# 🎯 HobbyHub - Local Hobby Group Organizer

**HobbyHub** is an engaging web platform where users can discover, create, and join local hobby groups tailored to their interests. Whether it's photography, book clubs, or any passion, HobbyHub helps you connect with like-minded people and grow your community!

---

## 🚀 Live Demo

[🌐 Visit the Live Website](https://hobbyhub-27dd6.web.app)

---

## 🔥 Key Features

- 🔐 **Firebase Authentication** (Google Login & Email/Password)  
- 🧭 **Role-Based Navigation** (Create, Join, View Groups)  
- 🔎 **Group Search & Filtering** for easy discovery  
- 📅 **Detailed Group Pages** with interactive UI  
- 📊 **Data Visualization** with Recharts for insights  
- 🌗 **Light/Dark Theme Toggle** for better UX  
- ⚡ **Responsive Design** with smooth animations  
- 📝 **Full CRUD** functionality for hobby groups  
- 🔒 **Protected Routes** for authenticated user access  

---

## 🛠️ Tech Stack

### Frontend

- React  
- React Router DOM  
- Firebase Authentication  
- Tailwind CSS + DaisyUI  
- Framer Motion (Animations)  
- Recharts (Charts & Graphs)  
- React Toastify (Notifications)  

### Backend

- Node.js  
- Express.js  
- MongoDB  
- Dotenv (Environment Variables)  

---

## 🔐 Environment Variables Setup

To keep sensitive information secure, create a `.env` file in your project root and add the following variables:

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

REACT_APP_BACKEND_URL=http://localhost:5000
