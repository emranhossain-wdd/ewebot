import React from 'react';
import Banner from './Banner/Banner';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import Experience from './Experience/Experience';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <Experience />
        </div>
    );
};

export default Home;