import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-10">Welcome to My Portfolio</h1>
            <p className="text-center mt-4 text-lg">Explore my projects, skills, and experiences.</p>
            <div className="flex justify-center mt-6">
                <a href="/projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                    View Projects
                </a>
                <a href="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default HeroSection;