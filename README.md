# 📧 AI Email Writer

A full-stack AI-powered email assistant that generates smart, context-aware email replies with tone selection. Includes a **Spring Boot backend**, **React frontend**, and a **Chrome Extension** that injects an AI reply button directly inside Gmail.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Language | Java 21 |
| Framework | Spring Boot 3, Spring MVC |
| HTTP Client | Spring WebClient (Reactive) |
| AI Integration | OpenRouter AI API (Free LLM) |
| Frontend | React, Material UI |
| Browser Extension | Chrome Extension (Manifest V3) |
| Build Tool | Maven |

---

## ✨ Features

- **AI Email Generation** — Sends email content to OpenRouter AI API and gets smart professional replies
- **5 Tone Options** — Professional, Friendly, Formal, Casual, Apologetic
- **Chrome Extension** — Uses MutationObserver to detect Gmail compose window and injects AI Reply button dynamically
- **React Frontend** — Clean UI with email input, tone selector, generated reply display and copy to clipboard
- **Non-blocking API calls** — Spring WebClient for reactive, non-blocking AI API communication
- **CORS enabled** — Seamless communication between frontend, backend and Chrome Extension

---

## 🏗️ Architecture

```
React Frontend / Chrome Extension (Gmail)
        │
        │  POST /api/email/generate
        ▼
Spring Boot Backend (Port 8080)
        │
        │  OpenRouter AI API call (WebClient)
        ▼
OpenRouter AI (Free LLM)
        │
        │  Returns AI-generated email reply
        ▼
Spring Boot Backend
        │
        ▼
React Frontend / Chrome Extension
```

---

## 📁 Project Structure

```
AI_Email_Writer/
├── AI_Email_Writer/                  # Spring Boot Backend
│   └── src/main/java/
│       └── controller/               # REST Controller
│       └── service/                  # AI API integration logic
│       └── dto/                      # EmailRequest DTO
│   └── src/main/resources/
│       └── application.properties    # API keys and config
│
├── ai-email-writer-frontend/         # React Frontend
│   └── src/
│       └── App.jsx                   # Main UI component
│
└── ai-email-writer-ext/              # Chrome Extension
    └── content.js                    # Gmail injection script
    └── manifest.json                 # Extension config
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/email/generate` | Generate AI email reply |

**Request Body:**
```json
{
  "emailContent": "Original email text here",
  "toneOfReply": "professional"
}
```

**Response:**
```
Generated professional email reply text...
```

---

## ⚙️ Getting Started

### Prerequisites
- Java 21
- Maven
- Node.js
- OpenRouter API Key — [Get free key here](https://openrouter.ai)

### Run Backend

```bash
cd AI_Email_Writer

# Add your API key in application.properties
groq.api.key=YOUR_OPENROUTER_API_KEY

# Run
mvn spring-boot:run
```

### Run Frontend

```bash
cd ai-email-writer-frontend
npm install
npm run dev
```

### Install Chrome Extension

1. Open Chrome → go to `chrome://extensions/`
2. Enable **Developer Mode** (top right toggle)
3. Click **Load unpacked**
4. Select the `ai-email-writer-ext` folder
5. Open Gmail — AI Reply button will appear in compose window

---

## 🎯 How It Works

### React Frontend
1. User pastes original email content
2. Selects desired tone (Professional/Friendly/Formal/Casual/Apologetic)
3. Clicks "Generate Reply"
4. AI-generated reply appears with copy to clipboard option

### Chrome Extension
1. MutationObserver watches for Gmail compose window to open
2. Once detected, injects "AI Reply" button into Gmail toolbar
3. On click, reads email content from Gmail DOM
4. Sends to Spring Boot backend
5. Inserts AI reply directly into compose box

---

## 📊 Performance Highlights

- AI reply generation under **2 seconds** response time
- Non-blocking API calls using **Spring WebClient**
- Chrome Extension detects compose window in under **500ms**

---

## 🗺️ Roadmap

- [x] OpenRouter AI API integration
- [x] 5 tone options for reply generation
- [x] React frontend with Material UI
- [x] Chrome Extension with Gmail injection
- [x] MutationObserver for dynamic compose detection
- [ ] Save reply history
- [ ] Custom tone input
- [ ] Deploy backend to cloud

---

## ⚠️ Important

- Never commit your `application.properties` with real API keys to GitHub
- Add `application.properties` to `.gitignore`
- Use environment variables for API keys in production

---

## 👨‍💻 Author

**Saket Nitin Mungse**
B.Tech Information Technology — SGGSIE&T, Nanded
[LinkedIn](#) | [Portfolio](#) | saketmungse20@gmail.com
