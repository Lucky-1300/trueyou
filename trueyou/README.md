## 🛠️ Tech Stack

### Frontend

* **React.js** — Build the user interface
* **Vite** — Fast frontend development and build tool
* **Tailwind CSS** — Responsive and modern styling
* **React Router DOM** — Client-side navigation
* **Framer Motion** — Smooth UI animations and transitions
* **Lucide React** — Clean and consistent icons
* **Axios** — Communication with the backend API

### Backend

* **Node.js** — JavaScript runtime
* **Express.js** — REST API and server-side application
* **Socket.IO** — Real-time anonymous chat
* **Helmet** — Security-focused HTTP headers
* **CORS** — Secure communication between frontend and backend
* **Dotenv** — Environment variable management

### Database & Authentication

* **Supabase** — Backend-as-a-Service
* **PostgreSQL** — Relational database provided by Supabase
* **Supabase Auth** — User authentication and session management
* **Supabase Realtime** — Real-time database updates where needed

### Development Tools

* **Git** — Version control
* **GitHub** — Source code collaboration
* **Nodemon** — Automatic backend server restart during development
* **Postman** — API testing
* **Figma** — UI/UX design and prototyping

### Deployment

```text
Frontend → Netlify / Vercel
Backend  → Render / Railway
Database → Supabase
Code     → GitHub
```

### Architecture

```text
                    ┌──────────────────┐
                    │    TrueYou UI    │
                    │ React + Vite     │
                    │ Tailwind CSS     │
                    └────────┬─────────┘
                             │
                       REST API / Socket.IO
                             │
                    ┌────────▼─────────┐
                    │  Node + Express  │
                    │     Backend      │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │     Supabase     │
                    │   PostgreSQL     │
                    │   Auth + Realtime│
                    └──────────────────┘
```

### 🌈 Core Features

* 🔒 Anonymous identity
* 💬 Anonymous real-time chat
* 📝 Anonymous thought sharing
* ❤️ Community interaction
* 💭 Comments and discussions
* 🚩 Report and block functionality
* 🛡️ Privacy-focused design
* 🌈 LGBTQIA+ inclusive community
* 📱 Responsive design

**Project:** TrueYou
**Tagline:** *Be yourself. Be heard.*
