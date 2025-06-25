import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { ToastContainer } from 'react-toastify';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PageWrapper from '../components/PageWraper';
  // <-- import your wrapper

const MainLayout = () => {
  const navigation = useNavigation();

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  });

  return (
    <div>
      <Navbar />
      <ToastContainer position="top-center" />
      {navigation.state === 'loading' && <Loader />}

      {/* Wrap Outlet inside PageWrapper */}
      <PageWrapper>
        <Outlet />
      </PageWrapper>

      <Footer />
    </div>
  );
};

export default MainLayout;
