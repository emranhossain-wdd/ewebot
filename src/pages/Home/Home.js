import React from 'react';
import BannerDownPart from '../BannerDownPart/BannerDownPart';
import ChooseUs from '../BottomPartExperience/ChooseUs';
import ExperienceDownPart from '../ExperienceDownPart/ExperienceDownPart';
import Banner from './Banner/Banner';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import Experience from './Experience/Experience';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Experience />
            {/* <ExperienceDownPart /> */}
            <Services />

            <ChooseUs />
        </div>
    );
};

export default Home;