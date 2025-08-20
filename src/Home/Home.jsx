import React from 'react';
import HeroSection from '../Components/HeroSection';
import NewsTicker from '../Pages/NewsTicker';
import AboutSection from '../Pages/AboutSection';
import SkillsSection from '../Pages/SkillsSection';
import SkillsTicker from '../Pages/SkillsTicker';

const Home = () => {
    return (
        <div className='pt-20'>
             <HeroSection></HeroSection>
             <NewsTicker></NewsTicker>
             <AboutSection></AboutSection>
             <SkillsSection></SkillsSection>
             <SkillsTicker></SkillsTicker>
        </div>
    );
};

export default Home;