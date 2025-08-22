import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import AnimatedBackground from '../Components/AnimatedBackground';
import ScrollToTop from '../Components/ScrollToTop';
// import AnimatedBackground from '../Components/AnimatedBackground';
// import { div } from 'framer-motion/client';
// import AnimatedBackground from '../Components/AnimatedBackground';

const Layout = () => {
    return (
       <div className="relative min-h-screen    ">
  <AnimatedBackground />
  <div className="relative z-10 min-h-screen  text-white">
    <Navbar />
    <ScrollToTop></ScrollToTop>
    <Outlet />
    <Footer />
  </div>
</div>

    );
};

export default Layout;