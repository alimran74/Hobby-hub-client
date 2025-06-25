import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { ToastContainer } from 'react-toastify';
import Aos from 'aos';
import 'aos/dist/aos.css'; // 🔥 Don't forget this import

const MainLayout = () => {
  const navigation = useNavigation();

  // 🔁 AOS initialize on mount
  useEffect(() => {
    Aos.init({
      duration: 800,     // Animation duration in ms
      once: false,        // Only animate once
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div>
      <Navbar />
      <ToastContainer position="top-center" />
      {navigation.state === 'loading' && <Loader />}
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
