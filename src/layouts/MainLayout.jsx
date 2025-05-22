import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            {Navigation.state === "loading" && <Loader/>}
            <div className='min-h-[calc(100vh-116px)]'>
                <Outlet/>
            </div>
            <Footer/>
            
        </div>
    );
};

export default MainLayout;