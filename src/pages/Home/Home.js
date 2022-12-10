import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
// import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;