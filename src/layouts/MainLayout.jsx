import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
     const navigation = useNavigation();
    return (
        <div>
            <Navbar/>
            <ToastContainer position='top-center'></ToastContainer>
            {navigation.state === "loading" && <Loader/>}
            <div className='min-h-[calc(100vh-116px)]'>
                <Outlet/>
            </div>
            <Footer/>
            
        </div>
    );
};

export default MainLayout;