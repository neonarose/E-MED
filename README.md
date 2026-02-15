# 💊 E-Med: AI-Powered Hyperlocal Medicine Delivery

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/status-Live%20Prototype-success.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**E-Med** is a progressive web application designed to bridge the digital gap for elderly patients. Unlike complex e-commerce apps, E-Med uses **AI Optical Character Recognition (OCR)** to read handwritten prescriptions and finds real-time availability in local pharmacies using **Geolocation** and **OpenStreetMap**.

---

## 🚀 Key Features

### 1. 📸 **Smart Scan (AI OCR)**
* Uses **Tesseract.js** to read physical prescriptions directly in the browser.
* Includes a custom **Image Pre-processing Engine** (Binarization & Contrast Enhancement) to improve accuracy on handwritten notes.
* "Human-in-the-loop" verification to prevent medication errors.

### 2. 🗺️ **Live Pharmacy Finder**
* Integrates with **OpenStreetMap (Overpass API)** to fetch *actual* pharmacy locations within a 5km radius of the user's real-time GPS location.
* No hardcoded data – works anywhere in the world where OSM data exists.

### 3. ⚡ **Smart Routing & Tracking**
* Calculates the **Fastest Route** using Leaflet geometry logic.
* Simulates a live delivery rider moving from the store to the user's home on the map.

### 4. 🛡️ **Universal Fallback**
* If a medicine is not found locally, the app automatically generates deep links to **Amazon Pharmacy** or **Swiggy Instamart** to ensure the patient never goes without medication.

### 5. 🆘 **One-Touch SOS**
* Dedicated emergency mode that connects immediately to Ambulance services (112).

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (PharmEasy UI Theme)
* **Scripting:** Vanilla JavaScript (ES6+)
* **AI Engine:** [Tesseract.js](https://tesseract.projectnaptha.com/) (Browser-based OCR)
* **Maps:** [Leaflet.js](https://leafletjs.com/)
* **Data Source:** [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) (Real-time OpenStreetMap data)

---

## 📸 Screenshots

| Landing Page | AI Scanning | Live Tracking |
|:---:|:---:|:---:|
| <img src="screenshots/home.png" width="250"> | <img src="screenshots/scan.png" width="250"> | <img src="screenshots/track.png" width="250"> |

*(Note: Add screenshots to a folder named `screenshots` in your repo to make these visible)*

---

## ⚙️ How to Run Locally

Since this project uses **Camera** and **Geolocation**, modern browsers require it to run on a secure context (HTTPS) or localhost. **You cannot just double-click `index.html`.**

### Option 1: VS Code (Recommended)
1.  Clone the repository.
2.  Install the **"Live Server"** extension in VS Code.
3.  Right-click `index.html` and select **"Open with Live Server"**.

### Option 2: Python Simple Server
If you have Python installed:
```bash
# Open terminal in project folder
python -m http.server 8000
# Go to http://localhost:8000 in your browser
