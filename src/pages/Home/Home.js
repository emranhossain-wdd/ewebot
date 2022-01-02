import React from 'react';
import BannerDownPart from '../BannerDownPart/BannerDownPart';
import ChooseUs from '../BottomPartExperience/ChooseUs';
import ExperienceDownPart from '../ExperienceDownPart/ExperienceDownPart';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>

            <Banner />

            <ExperienceDownPart />
            <ChooseUs />
        </div>
    );
};

export default Home;