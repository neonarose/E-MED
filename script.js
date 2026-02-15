// --- GLOBAL VARIABLES ---
let mapStores, mapTrack, riderMarker;
let userLat = null; 
let userLng = null;
let bestStore = null;
let detectedMedicine = "";

// --- 1. NAVIGATION ---
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.classList.add('hidden'); });
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.add('active');
    
    // Fix leaflet map sizing bug
    if(id === 'page-pharmacy' && userLat) setTimeout(initStoreMap, 300);
}

// --- 2. AI LOGIC (MULTI-LINE FIX APPLIED) ---
function handleImageUpload() {
    const input = document.getElementById('cameraInput');
    const preview = document.getElementById('slip-preview');
    const status = document.getElementById('ocr-status');
    const resultArea = document.getElementById('ocr-result');
    const textBox = document.getElementById('detected-text');
    
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.classList.remove('hidden');
            document.querySelector('.upload-zone-pe label').classList.add('hidden');
            status.classList.remove('hidden');
            resultArea.classList.add('hidden');

            // STEP 1: Process & Resize Image
            preprocessImage(preview, (processedImage) => {
                
                // STEP 2: Configure Tesseract
                Tesseract.recognize(
                    processedImage,
                    'eng',
                    { 
                        logger: m => {
                            if(m.status === 'recognizing text') {
                                status.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Reading... ${Math.round(m.progress * 100)}%`;
                            }
                        }
                    }
                ).then(({ data: { text } }) => {
                    status.classList.add('hidden');
                    resultArea.classList.remove('hidden');
                    
                    // Cleanup Text: Keep letters, numbers, spaces, newlines, and hyphens
                    let cleanText = text.replace(/[^a-zA-Z0-9\s\n-]/g, "").trim();
                    
                    if(cleanText.length < 3) {
                        textBox.value = "";
                        textBox.placeholder = "Handwriting unclear. Please type name.";
                    } else {
                        // Filter out empty lines
                        const lines = cleanText.split('\n').filter(line => line.trim().length > 3);
                        
                        if(lines.length > 0) {
                            // *** THE FIX: Join ALL lines with a comma ***
                            textBox.value = lines.join(", "); 
                        } else {
                            textBox.value = cleanText;
                        }
                    }
                }).catch(err => {
                    status.classList.add('hidden');
                    resultArea.classList.remove('hidden');
                    textBox.value = "";
                    alert("Could not read handwriting. Please enter manually.");
                });
            });
        }
        reader.readAsDataURL(file);
    }
}

// --- IMAGE OPTIMIZER (Reduces Size/Tokens + Binarization) ---
function preprocessImage(imageElement, callback) {
    const img = new Image();
    img.src = imageElement.src;
    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // RESIZING: Max width 600px (Fast & Low Token)
        const maxWidth = 600;
        const scale = maxWidth / img.width;
        canvas.width = maxWidth;
        canvas.height = img.height * scale;
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Get Pixels
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // High Contrast Filter (Binarization)
        for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            const threshold = 160; 
            const color = avg > threshold ? 255 : 0;
            data[i] = color; data[i + 1] = color; data[i + 2] = color;
        }
        
        ctx.putImageData(imageData, 0, 0);
        
        // Export as JPEG
        callback(canvas.toDataURL('image/jpeg', 0.6));
    };
}

// --- 3. MAP & STORES ---
function findStores() {
    detectedMedicine = document.getElementById('detected-text').value;
    if(!detectedMedicine) { alert("Please enter medicine name."); return; }
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            userLat = pos.coords.latitude;
            userLng = pos.coords.longitude;
            showScreen('page-pharmacy');
            setTimeout(initStoreMap, 300);
        }, (error) => {
            alert("Error: GPS Access Denied. Cannot find real stores.");
        });
    } else { 
        alert("Geolocation not supported."); 
    }
}

function initStoreMap() {
    if (mapStores) { 
        mapStores.setView([userLat, userLng], 14); 
        fetchRealPharmacies(); 
        return; 
    }

    mapStores = L.map('map-stores', {zoomControl: false}).setView([userLat, userLng], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapStores);
    
    const userIcon = L.divIcon({className: 'user-dot', html: '<div style="width:15px;height:15px;background:#10847e;border:2px solid white;border-radius:50%;"></div>'});
    L.marker([userLat, userLng], {icon: userIcon}).addTo(mapStores).bindPopup("You").openPopup();
    
    fetchRealPharmacies();
}

function fetchRealPharmacies() {
    // 5km Radius Search
    const query = `[out:json];node["amenity"="pharmacy"](around:5000,${userLat},${userLng});out;`;
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data.elements.length === 0) {
                alert("No pharmacies found nearby.");
            } else {
                let minDistance = Infinity;
                let closestEl = null;

                data.elements.forEach(el => {
                    const dist = Math.sqrt(Math.pow(el.lat - userLat, 2) + Math.pow(el.lon - userLng, 2));
                    if (dist < minDistance) { minDistance = dist; closestEl = el; }
                    addStore(el.lat, el.lon, el.tags.name || "Local Pharmacy", false);
                });

                if(closestEl) {
                    addStore(closestEl.lat, closestEl.lon, closestEl.tags.name || "Best Option", true);
                }
            }
        })
        .catch(err => alert("Map Error. Check internet."));
}

function addStore(lat, lng, name, isBest) {
    const marker = L.marker([lat, lng]).addTo(mapStores);
    if(isBest) {
        bestStore = {lat, lng, name};
        if(window.routeLine) mapStores.removeLayer(window.routeLine);
        window.routeLine = L.polyline([[userLat, userLng], [lat, lng]], {color: '#10847e', weight: 5}).addTo(mapStores);
        marker.bindPopup("<b>Fastest Option</b>").openPopup();
    }
    
    marker.on('click', () => {
        document.getElementById('store-card').classList.remove('hidden');
        document.getElementById('store-name').innerText = name;
        document.getElementById('store-stock').innerHTML = `✅ Stock Available: <b>${detectedMedicine}</b>`;
    });
}

function confirmOrder() { startTracking(bestStore); }

// --- 4. TRACKING ---
function startTracking(store) {
    showScreen('page-track');
    if (!mapTrack) {
        mapTrack = L.map('map-track', {zoomControl: false});
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapTrack);
    }
    
    mapTrack.fitBounds([ [userLat, userLng], [store.lat, store.lng] ], {padding: [50,50]});
    L.polyline([[store.lat, store.lng], [userLat, userLng]], {color: '#10847e', weight: 5, dashArray: '10, 10'}).addTo(mapTrack);
    
    const icon = L.icon({iconUrl: 'https://cdn-icons-png.flaticon.com/512/3063/3063823.png', iconSize: [40,40]});
    if(riderMarker) mapTrack.removeLayer(riderMarker);
    riderMarker = L.marker([store.lat, store.lng], {icon: icon}).addTo(mapTrack);
    
    let step = 0;
    const interval = setInterval(() => {
        step += 0.01;
        if(step > 1) {
            clearInterval(interval);
            showScreen('page-thankyou');
        } else {
            const newLat = store.lat + (userLat - store.lat) * step;
            const newLng = store.lng + (userLng - store.lng) * step;
            riderMarker.setLatLng([newLat, newLng]);
        }
    }, 50);
}

function rate(stars) {
    document.querySelectorAll('.stars i').forEach((s, i) => {
        s.className = i < stars ? 'fa-solid fa-star' : 'fa-regular fa-star';
    });
}

function resetApp() { location.reload(); }
function openFallback(app) { alert("Opening " + app); }