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
### Project Documentation

**For Software:**

**Screenshots (Add at least 3)**

![Home Screen](screenshots/home.png)
*Home Screen: The landing page featuring a clean, accessible UI with high-contrast action buttons and a "PharmEasy-style" teal aesthetic for trust and readability.*

![Smart Scan](screenshots/scan.png)
*Smart Scan Interface: The camera view where the AI (Tesseract.js) processes the handwritten prescription. The "Human-in-the-loop" edit box allows users to verify text before searching.*

![Live Tracking](screenshots/track.png)
*Live Tracking Map: A real-time Leaflet map showing the "Fastest Route" (green line) from the selected pharmacy to the user's GPS location, with a moving delivery simulation.*

**Diagrams**

**System Architecture:**

![System Architecture](https://mermaid.ink/img/pako:eNp1kMtqwzAQRX9FzKpF_AAfC6F0001CNkWW1lgewx5JjBNC_r1yHCSBojQz986RRotgTRF0hO-A98Zq-F5Zg8_eOk_OKK0Q5E2j0fJp-1iS95_f1w25hB41WvOOp2-d0y4-Qk4d_sF2oQ8l9MhOa_QG21X8T2_wA5pQ7q20eOes_sM3-A0Vj4Jd5Q618g57h86i52q0QoP33uA3dKx4FPRn9A9Y8SzoP7Cj4lHwR8V_wIaKR8FqikfB_6p4FPw3xU8x919lq6b5Anz5bWk?type=png)
*The architecture demonstrates a serverless design. The Client Browser handles the UI and Camera input. It processes images locally using the Tesseract.js WASM binary. It then queries the external Overpass API for pharmacy data and renders the result on a Leaflet map.*

**Application Workflow:**

![Application Workflow](https://mermaid.ink/img/pako:eNp1kstqwzAQRX9FzKpF_AAfC6F0001CNkWW1lgewx5JjBNC_r1yHCSBojQz986RRotgTRF0hO-A98Zq-F5Zg8_eOk_OKK0Q5E2j0fJp-1iS95_f1w25hB41WvOOp2-d0y4-Qk4d_sF2oQ8l9MhOa_QG21X8T2_wA5pQ7q20eOes_sM3-A0Vj4Jd5Q618g57h86i52q0QoP33uA3dKx4FPRn9A9Y8SzoP7Cj4lHwR8V_wIaKR8FqikfB_6p4FPw3xU8x919lq6b5Anz5bWk?type=png)
*User Flow: Open App -> Scan Prescription -> Verify Text -> Find Stores (API Call) -> Select Pharmacy -> Track Delivery -> Emergency SOS (Optional).*

---

### Additional Documentation

**For Web Projects with Backend (External APIs):**

**API Documentation**

The application interacts with the OpenStreetMap **Overpass API** to fetch real-time pharmacy data.

**Base URL:** `https://overpass-api.de/api/interpreter`

**Endpoints**

**GET / (Query via Data Parameter)**

* **Description:** Fetches nodes tagged as "pharmacy" within a specific radius of the user's coordinates.
* **Parameters:**
    * `data` (string): The Overpass QL query string.
        * *Example:* `[out:json];node["amenity"="pharmacy"](around:5000,12.97,77.59);out;`
* **Response:**
    ```json
    {
      "version": 0.6,
      "generator": "Overpass API 0.7.62.1",
      "elements": [
        {
          "type": "node",
          "id": 12345678,
          "lat": 12.9716,
          "lon": 77.5946,
          "tags": {
            "amenity": "pharmacy",
            "name": "Apollo Pharmacy"
          }
        }
      ]
    }
    ```

---

### Project Demo

**Video**

[Link to Demo Video (YouTube/Drive)]
*The video demonstrates the end-to-end flow: scanning a handwritten note, the AI extraction process, verifying the text, locating real pharmacies on the map, and the delivery tracking simulation.*

**Additional Demos**

[Live Hosted Project Link](https://your-username.github.io/E-Med/)

---

### AI Tools Used (Optional - For Transparency Bonus)

*During the development of E-Med, we leveraged AI tools to optimize our image processing logic and UI design.*

**Tool Used:** ChatGPT (GPT-4o), Gemini 1.5 Pro

**Purpose:**
* **Code Optimization:** Used to create the `preprocessImage` function (canvas-based binarization) to convert grey-scale camera images into high-contrast black-and-white formats, significantly improving Tesseract.js accuracy on handwriting.
* **Debugging:** Assisted in resolving asynchronous race conditions when loading Leaflet map tiles inside hidden DOM elements.
* **UI Design:** Generated the CSS color palette (`#10847e` teal theme) to match industry-standard medical apps.

**Key Prompts Used:**
* *"Create a JavaScript function to resize and binarize an image on an HTML Canvas for OCR optimization."*
* *"How to query OpenStreetMap Overpass API for pharmacies within 5km using JavaScript fetch?"*
* *"Debug Leaflet map container size invalidation issue on tab switch."*

**Percentage of AI-generated code:** Approximately 30% (primarily Image Processing algorithms and API fetch logic).

**Human Contributions:**
* **Architecture & Safety:** Designed the "Human-in-the-loop" verification workflow to prevent medical errors.
* **Integration:** Manually integrated the OCR output with the Map search logic.
* **UX/UI:** Designed the specific layout to mimic popular Indian pharmacy apps for user familiarity.

---

### Team Contributions

* **[Member 1 Name]:** Frontend development (HTML/CSS), UI Design (PharmEasy Theme), and Leaflet Map integration.
* **[Member 2 Name]:** Backend logic, API integration (Overpass & Tesseract.js), and Image Pre-processing algorithm.
* **[Member 3 Name]:** Documentation, Testing, Creating the Demo Video, and Presentation.

---

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
