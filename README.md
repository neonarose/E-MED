<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# E-MED 💊

## Basic Details

### Team Name: ZOOTOPIA

### Team Members
- Member 1: NEONA ROSE JOYAL MATTAM - SAINTGITS COLLEGE OF ENGG
- Member 2: ANAKHA SARA MANOJ - SAINTGITS COLLEGE OF ENGG

### Hosted Project Link
https://github.com/neonarose/E-MED

### Project Description
E-Med is an accessibility-first web app that helps elderly users order medicine by simply scanning handwritten prescriptions with AI, eliminating the need to type complex names. It integrates with OpenStreetMap to instantly locate nearby pharmacies and provides live delivery tracking for a seamless healthcare experience.

### The Problem statement
"Current digital health platforms assume a high level of tech-savviness. For senior citizens, the process of searching, filtering, and ordering medication involves too many steps. There is a critical lack of accessible, 'one-tap' solutions that bridge the gap between physical handwritten prescriptions and digital ordering for those who need it most."

### The Solution
"We built a 'Scan-to-Delivery' ecosystem where the camera becomes the keyboard. The app processes images locally to protect privacy, verifies the text with a human-in-the-loop design to prevent errors, and integrates with OpenStreetMap to find actual inventory nearby. If local stores are out of stock, it provides a universal fallback to major platforms like Amazon Pharmacy."

---

## Technical Details

### Technologies/Components Used

**For Software:**
-Languages used: HTML5, CSS3, JavaScript (ES6+)
-Frameworks used: None (Vanilla JS for lightweight performance)
-Libraries used: Tesseract.js (v2.1.0), Leaflet.js (v1.9.4), FontAwesome (v6.4.0)
-Tools used: VS Code, Git, GitHub Pages, OpenStreetMap (Overpass API)


**For Hardware:**
-Main components: Smartphone (Android/iOS) or Laptop with Webcam.
-Specifications: Device must have a working Camera (min. 5MP recommended for OCR accuracy), ---GPS/Geolocation sensor, and a modern web browser (Chrome/Safari/Edge).
-Tools required: Local Development Server (e.g., VS Code "Live Server" extension) or HTTPS environment for Camera API access.

---

## Features

-Feature 1: Smart Scan (AI OCR) - Uses Tesseract.js with custom image pre-processing to instantly read and digitize handwritten prescriptions directly from the camera.
-Feature 2: Real-Time Pharmacy Finder - Integrates with the OpenStreetMap Overpass API to locate actual operating pharmacies within a 5km radius of the user's live GPS coordinates.
-Feature 3: Live Tracking Simulation - Reduces user anxiety by visualizing the delivery rider's specific route and estimated time of arrival on an interactive map.
-Feature 4: One-Touch SOS - Features a dedicated, high-contrast emergency mode that connects users to ambulance services (112) with a single tap.

---

## Implementation

### For Software:

#### Installation
# Clone the repository
git clone https://github.com/your-username/E-Med.git
# Navigate to the project directory
cd E-Med

#### Run
# if you have Python installed, run this in the project folder:
python -m http.server 8000
# Then open http://localhost:8000 in your browser.

### For Hardware:

#### Components Required
-Primary Device: Smartphone (Android/iOS) or Laptop/PC with a webcam.
-Sensors: Built-in Camera (Minimum 5MP resolution recommended for clear OCR scanning).
-Location: Integrated GPS/GNSS receiver (for fetching live pharmacy location).
-Connectivity: Active Internet connection (Wi-Fi or 4G/5G) to reach OpenStreetMap APIs.

#### Circuit Setup
-N/A (Software-Only Solution): This project is a Progressive Web Application (PWA) designed to run on standard consumer electronics. No custom circuit assembly, soldering, or external microcontrollers (like Arduino/ESP32) are required.
-Device Configuration: Simply ensure Camera and Location permissions are allowed in the browser settings when prompted.

## Project Documentation

### For Software:

#### Screenshots 


<img width="953" height="903" alt="image" src="https://github.com/user-attachments/assets/2052de2d-f254-417d-adb7-603ef91baf2e" />
Home Screen: The accessible landing page featuring high-contrast buttons and a clean "PharmEasy-style" interface designed for elderly users.

<img width="953" height="903" alt="image" src="https://github.com/user-attachments/assets/e7b81aa9-de3e-409e-ae4e-692889c4f471" />
Smart Scan Interface: The AI-powered camera view where Tesseract.js reads the handwritten prescription and allows the user to verify the text.

<img width="1910" height="900" alt="image" src="https://github.com/user-attachments/assets/a7c44308-1db8-4a55-ba36-7ee3efe73fd1" />
Live Delivery Tracking: The real-time map showing the pharmacy location and the delivery rider's route (green line) to the user's home.


## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** Fetches nodes tagged as "pharmacy" within a specific radius (5000m) of the user's current GPS coordinates.
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
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
        "name": "Apollo Pharmacy",
        "opening_hours": "24/7"
      }
    }
  ]
}
**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
https://drive.google.com/file/d/1MjhPI2jkRxPOHCF_B73q8wxoDfBebFDD/view?usp=drivesdk


## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** ChatGPT (GPT-4o), Gemini 1.5 Pro

**Purpose:**
-Code Optimization: Generated the preprocessImage function (canvas-based binarization) to convert grey-scale camera images into high-contrast black-and-white formats, significantly improving Tesseract.js accuracy on handwriting.
-Debugging Assistance: Helped resolve asynchronous race conditions when loading Leaflet map tiles inside hidden DOM elements (the "map size invalidation" bug).
-UI Design: Suggested the CSS color palette (#10847e teal theme) to match industry-standard medical apps like PharmEasy.

**Key Prompts Used:**
- "Create a JavaScript function to resize and binarize an image on an HTML Canvas for OCR optimization."
-"How to query OpenStreetMap Overpass API for pharmacies within 5km using JavaScript fetch?"
-"Debug Leaflet map container size invalidation issue on tab switch."

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
--Architecture design and planning:

-Decided on a client-side PWA (Progressive Web App) architecture to ensure low latency and user privacy, processing sensitive prescription data locally on the device rather than sending it to a cloud server.
-Structured the user flow specifically for elderly users: Scan -> Verify -> Track, eliminating complex navigation menus.

--Custom business logic implementation:

-Developed the custom image preprocessing algorithm (canvas-based binarization) to clean up shadows and improve contrast before passing images to the OCR engine.
-Implemented the "Fastest Route" logic that calculates distances between the user and multiple pharmacy nodes to identify the optimal delivery path.

--Integration and testing:

-Manually integrated the asynchronous Tesseract.js worker with the OpenStreetMap Overpass API, ensuring that map markers load only after text is successfully verified.
-Conducted testing with various handwriting styles (cursive vs. block) to fine-tune the OCR confidence thresholds.

--UI/UX design decisions:

-Designed the interface with high-contrast colors (Teal #10847e) and large touch targets to mimic popular apps like PharmEasy, reducing the learning curve for seniors.
-Added the "Human-in-the-loop" text editing step, deciding that user verification was critical for safety in a medical context.

---

## Team Contributions

- NEONA ROSE JOYAL MATTAM: Frontend & UI/UX Design
- ANAKHA SARA MANOJ: AI Logic & Camera Integration

## License

This project is licensed under the MIT License - see the LICENSE file for details.

**Common License Options:**
MIT	Most Projects	It’s the "do whatever you want" license. It’s permissive and very common for TinkerHub/Hackathon projects.
Apache 2.0	Professional/Corporate	It’s like MIT but includes extra protection for patents. Great if you plan to turn this into a real startup.
GPL v3	Open Source Purists	If someone uses your code, they must also make their project open source. It keeps the code "free" forever.

---

Made with ❤️ at TinkerHub
