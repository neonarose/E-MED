# E-Med 💊

![E-Med Status](https://img.shields.io/badge/Status-Prototype%20Live-success)
> **Medicines in Minutes ⚡**

---

### Basic Details

**Team Members:**
* **Member 1:** NEONA ROSE JOYAL MATTAM - SAINTGITS COLLEGE OF ENGG
* **Member 2:** ANAKHA SARA MANOJ- SAINTGITS COLLEGE OF ENGG


**Hosted Project Link:**
https://neonarose.github.io/E-MED/

**Project Description:**
E-Med is a browser-based progressive web application designed to simplify medicine delivery for the elderly. It uses AI-powered Optical Character Recognition (OCR) to read handwritten prescriptions directly from the camera and integrates with real-time OpenStreetMap data to locate nearby pharmacies. It features a "Scan-to-Delivery" workflow, live order tracking simulation, and a one-touch SOS emergency system.

**The Problem statement:**
Elderly patients and users with limited technical literacy struggle with complex e-commerce interfaces, typing difficult medicine names, and navigating multiple menus to order essential medication. Existing apps often lack accessibility features for urgent medical needs.

**The Solution:**
E-Med solves this by removing the need to type. Users simply take a photo of their prescription. Our AI reads the text, extracts medicine names, and automatically locates the nearest pharmacy using GPS. A "Human-in-the-loop" design allows for verification, and a universal fallback ensures users are redirected to major platforms (Amazon/Instamart) if local stock is unavailable.

---

### Technical Details

**Technologies/Components Used**

**For Software:**
* **Languages used:** HTML5, CSS3, JavaScript (ES6+)
* **Frameworks used:** None (Vanilla JS for performance)
* **Libraries used:** * `Tesseract.js` (v2.1.0) - Client-side OCR
  * `Leaflet.js` (v1.9.4) - Interactive Maps
  * `FontAwesome` (v6.4.0) - UI Icons
* **Tools used:** VS Code, Git, GitHub Pages, OpenStreetMap (Overpass API)

**For Hardware:**
* **Main components:** Smartphone with Camera & GPS (Required for scanning & location features)
* **Specifications:** Modern Web Browser (Chrome/Edge/Safari) supporting MediaDevices API
* **Tools required:** Local Development Server (Live Server extension)

---

### Features

**List the key features of your project:**

* **Feature 1: Smart Scan (AI OCR)** - Uses Tesseract.js with custom image pre-processing (binarization) to read handwritten prescriptions instantly.
* **Feature 2: Real-Time Pharmacy Finder** - Integrates Overpass API to fetch live pharmacy locations within a 5km radius of the user's GPS coordinates.
* **Feature 3: Live Tracking Simulation** - Visualizes the delivery rider's path from the store to the user's location using Leaflet geometry to reduce user anxiety.
* **Feature 4: Universal Fallback** - Automatically generates deep search links for Amazon Pharmacy and Swiggy Instamart if local stores are out of stock.
* **Feature 5: One-Touch SOS** - A dedicated, high-contrast emergency mode that connects users to ambulance services (112) immediately.

---

### Implementation

**For Software:**

**Installation**
```bash
# Clone the repository
git clone [https://github.com/your-username/E-Med.git](https://github.com/your-username/E-Med.git)

# Navigate to the project directory
cd E-Med



This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
