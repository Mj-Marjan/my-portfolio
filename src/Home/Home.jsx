import React from 'react';
import HeroSection from '../Components/HeroSection';
import NewsTicker from '../Pages/NewsTicker';
import AboutSection from '../Pages/AboutSection';

const Home = () => {
    return (
        <div className='pt-20'>
             <HeroSection></HeroSection>
             <NewsTicker></NewsTicker>
             <AboutSection></AboutSection>
        </div>
    );
};

export default Home;