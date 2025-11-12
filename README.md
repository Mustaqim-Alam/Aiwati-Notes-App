# Notes App (Frontend + Backend)

A simple full-stack Notes application built for the Aiwati assignment.  
Frontend (React + Vite) and Backend (Node + Express + MongoDB) are included in a single repository.

---


---

## Tech stack

**Frontend**
- React (Vite)
- React Router (v6)
- Axios
- React Toastify (toasts)
- Bootstrap 5

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- CORS, dotenv

---

## Repo structure
Notes-App/
├── client/ # React frontend (Vite)
├── server/ # Node + Express backend
└── README.md

---

## Requirements implemented

**Backend**
- `POST /notes` – Add a new note (`{ title, description }`)
- `GET /notes` – Fetch all notes
- `GET /notes/:id` – Fetch single note
- `PUT /notes/:id` – Update note
- `DELETE /notes/:id` – Delete note
- Data validation: title is required (400 on missing title)
- Error handling: 400 / 404 / 500 responses

**Frontend**
- Notes list page
- Add note form
- Edit note form
- (Optional) View note behavior via Edit or List
- Loading states & error handling
- Uses functional components + hooks
- Uses Axios for API calls
- React Router + toast notifications (bonus)

---

## Setup & Run

> **Prerequisites**
> - Node.js v20.19.0+ or v22.x (recommended latest LTS)
> - npm
> - MongoDB (local) or MongoDB Atlas connection string

### 1. Clone the repo
```bash
git clone https://github.com/<Mustaqim-Alam>/Aiwati-Notes-App.git
cd Notes-App



2. Backend (server)
cd server
npm install


Create .env (inside server/) with:

PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/notes_app



