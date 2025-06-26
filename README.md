# 🎯 HobbyHub - Local Hobby Group Organizer

![HobbyHub Demo](https://i.ibb.co/F7mkbwL/hobbyhub-demo.gif) <!-- Replace with your own hosted GIF if needed -->

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

## ✨ Recent Enhancements

- 🧠 **DecryptedText Animation** on dashboard titles & quotes  
- 🖱️ **SplashCursor Effect** for engaging user interaction  
- 🎞️ **Lottie Animations** in dashboard and pages  
- 🎭 **Framer Motion Fade-In Animation** on sidebar entry  
- 🔄 **Rotating Motivational Text** on dashboard  
- 🖼️ **Responsive Settings Page** for profile updates with animation  
- 🎨 Improved **UI Consistency** and interaction feedback

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
- @lottiefiles/react-lottie-player (Lottie Animations)

### Backend

- Node.js  
- Express.js  
- MongoDB  
- Dotenv (Environment Variables)

---

## 🔐 Environment Variables Setup

### Client (`hobby-hub-client`)

Create a `.env` file in the root of your client folder:

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

REACT_APP_BACKEND_URL=http://localhost:5000

---
##💻 How to Run the Project Locally

1️⃣ Clone the Repositories
bash
Copy
Edit
git clone https://github.com/alimran74/hobby-hub-client.git
git clone https://github.com/alimran74/hobby-hub-server.git
2️⃣ Setup & Run the Backend
bash
Copy
Edit
cd hobby-hub-server
npm install
➡️ Add your .env file as shown above

bash
Copy
Edit
npm run dev
📍 Server runs at: http://localhost:5000

3️⃣ Setup & Run the Frontend
bash
Copy
Edit
cd ../hobby-hub-client
npm install
➡️ Add your .env file as shown above

bash
Copy
Edit
npm run dev
📍 Client runs at: http://localhost:5173

✅ Now your HobbyHub is running locally!

Make sure your MongoDB is active or use MongoDB Atlas

🙌 Author
Crafted with ❤️ by Al Imran

vbnet
Copy
Edit

Let me know if you want to add:

- 📽️ YouTube video demo
- 🧪 Unit testing section
- 🌍 Multi-language support info

I'm here to help polish it even more!








