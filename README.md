# 🎯 HobbyHub - Local Hobby Group Organizer

**HobbyHub** is a dynamic web platform where users can discover, create, and join local hobby groups based on their interests. From photography to book clubs, connect with like-minded people and grow your community!

## 🚀 Live Site

👉 [Live Website Link](https://your-firebase-app.web.app)


## 🔥 Features

- 🔐 Firebase Authentication (Google Login, Email/Password)
- 🧠 Role-Based Navigation (Create, Join, View Groups)
- 📅 Group Details, Filtering & Search
- 📊 Data Visualization (Recharts)
- 🌗 Light/Dark Theme Toggle
- ⚡ Responsive UI with Animations
- 📝 CRUD Functionality for Hobby Groups
- 🔒 Protected Routes for Authenticated Users

## 🛠️ Tech Stack

### Frontend
- React
- React Router DOM
- Firebase Auth
- Tailwind CSS + DaisyUI
- Framer Motion
- Recharts
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Dotenv

## 🔐 Environment Variables

To keep Firebase config and MongoDB credentials secure, use a `.env` file:

```env
VITE_API_BASE_URL=https://your-backend-url.com
VITE_FIREBASE_API_KEY=AIzaSyAM3UqYr7lBpdSl1ML2EyjimD11XJQAx8o
VITE_FIREBASE_AUTH_DOMAIN=https://hobbyhub-27dd6.firebaseapp.com/
VITE_FIREBASE_PROJECT_ID=hobbyhub-27dd6
VITE_FIREBASE_STORAGE_BUCKET=hobbyhub-27dd6.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=619144493006
VITE_FIREBASE_APP_ID=1:619144493006:web:2187b824b37d7999899d9f

