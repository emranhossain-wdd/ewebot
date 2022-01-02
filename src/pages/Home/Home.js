import React from 'react';
import ExperienceDownPart from '../Solving/Solving';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import Feature from './Feature/Feature';

const Home = () => {
    return (
        <div>
            <Banner />
            <Experience />
            <Feature />
            <ExperienceDownPart />
        </div>
    );
};

export default Home;