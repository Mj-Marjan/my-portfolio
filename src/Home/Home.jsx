import React from 'react';
import HeroSection from '../Components/HeroSection';
import NewsTicker from '../Pages/NewsTicker';

const Home = () => {
    return (
        <div className='pt-20'>
             <HeroSection></HeroSection>
             <NewsTicker></NewsTicker>
        </div>
    );
};

export default Home;