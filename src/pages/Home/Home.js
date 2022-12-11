import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className='bg-slate-200'>
            <Banner />
            <Skills />
            {/* <Projects /> */}
            <Contact />
        </div>
    );
};

export default Home;