---
# 🛡️ NEURAL_CORE_V1 // AI_ANALYZER

> **STATUS:** `STABLE` | **ENCRYPTION:** `AES-256` | **ENGINE:** `GEMINI_3_FLASH`

A high-fidelity, cyberpunk-themed linguistic diagnostic interface. This system processes raw data streams through a neural pipeline to extract sentiment, summaries, and key insight vectors.

## 🛠️ SYSTEM ARCHITECTURE

### 1. Neural Frontend (React + Vite)

* **UI Framework:** React 18 with Lucide icons.
* **Styling:** Custom **"Cyber-Glass"** CSS with clip-path geometry, glassmorphism, and neon-glow variables.
* **Components:**
* **SystemStatusBar:** Real-time HUD header with system vitals and status indicators.
* **SentimentGauge:** Kinetic SVG gauge that dynamically shifts colors (Lime/Red/Cyan) based on neural output.
* **DataStream:** Vertical neural summarization module with a custom thin-scroll terminal aesthetic.
* **KeyPoints:** Vector extraction list with geometric node wiring and "Data Pointer" indexing.

### 2. Neural Backend (FastAPI + Python)

* **Framework:** FastAPI for high-performance asynchronous **UPLINK**.
* **AI Service:** Integrated with Google Gemini via `ai_service.py`.
* **CORS:** Fully enabled for local development environments.
---

## 🚀 DEPLOYMENT_PROTOCOLS

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install fastapi uvicorn pydantic google-generativeai python-dotenv

or 

pip install -r requirements.txt

# Start the Neural Processor
uvicorn main:app --reload --port 8000

```

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Launch HUD Interface
npm run dev

```

---

## 📡 API_DOCUMENTATION

### `POST /analyze`

Processes raw text through the neural engine.

**Request Body:**

```json
{
  "text": "The high-speed uplink failed. I am frustrated but the data is secured."
}

```

**Response Object:**

```json
{
  "sentiment": "NEUTRAL",
  "score": 45,
  "summary": "System experienced an uplink failure; emotional state shows frustration tempered by data security confirmation.",
  "key_points": [
    "UPLINK_FAILURE detected",
    "Data integrity maintained",
    "User frustration logged"
  ]
}

```

---

## 📂 PROJECT_STRUCTURE

```text
.
├── backend/
│   ├── main.py            # FastAPI Entry Point (CORS & Routes)
│   ├── ai_service.py      # Gemini Logic & Prompt Engineering
│   └── .env               # API_KEYS (Strictly Local)
├── frontend/
│   ├── src/
│   │   ├── components/    # Gauge, DataStream, KeyPoints, StatusBar
│   │   ├── pages/         # Analyzer UI Logic
│   │   └── App.jsx        # Routing & Global State
│   └── index.css          # God-Level Cyberpunk Theme & Global Variables
└── .gitignore             # Global Ignore Rules (node_modules, venv, .env)

```

---

## ⚠️ SECURITY_NOTE

**CRITICAL:** Ensure your `GEMINI_API_KEY` is stored in the `backend/.env` file. Do **NOT** commit the `.env` file to public repositories to prevent unauthorized neural access and quota draining.
