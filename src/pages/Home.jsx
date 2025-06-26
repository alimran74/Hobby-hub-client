

import BannerSlider from '../components/BannerSlider';
import FeaturedGroup from '../components/FeaturedGroup';

import Poster from '../components/Poster';
import {  useLoaderData } from 'react-router';
import HobbyAdd from '../components/HobbyAdd';
import StatsSection from '../components/StatsSection';
import Newsletter from '../components/newsletter';
import BlogPreview from '../components/BlogPreview';



const Home = () => {
    const data = useLoaderData();
    
   
    
    return   (

        <div>
            <h1>{data.title}</h1>
           <div className='bg-purple-100'>
            <BannerSlider/>
             <FeaturedGroup /> 
            <Poster/>
            <StatsSection/>
            <HobbyAdd/>
            <BlogPreview/>
            <Newsletter/>
            </div>
            

        </div>
    );
};

export default Home;