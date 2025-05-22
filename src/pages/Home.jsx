import React from 'react';

import BannerSlider from '../components/BannerSlider';
import FeaturedGroup from '../components/FeaturedGroup';

import Poster from '../components/Poster';
import {  useLoaderData } from 'react-router';



const Home = () => {
    const data = useLoaderData();
   
    
    return   (

        <div>
            <h1>{data.title}</h1>
           
            <BannerSlider/>
            <FeaturedGroup/>
            <Poster/>
            

        </div>
    );
};

export default Home;