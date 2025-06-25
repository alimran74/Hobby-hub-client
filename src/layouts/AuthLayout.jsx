import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
         <div className="flex flex-col min-h-screen">
      <Navbar />
       <ToastContainer position='top-center'></ToastContainer>
      <main className="flex-grow p-4 bg-purple-100">
        <Outlet />
      </main>
      <Footer />
    </div>
    );
};

export default AuthLayout;