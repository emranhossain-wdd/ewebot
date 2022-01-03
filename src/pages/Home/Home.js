import React from 'react';
import ChooseUs from '../BottomPartExperience/ChooseUs';
import ExperienceDownPart from '../ExperienceDownPart/ExperienceDownPart';
import BannerDownPart from '../BannerDownPart/BannerDownPart';
import FooterBody from '../Footer/FooterBody/FooterBody';
import FooterTop from '../Footer/FooterTop/FooterTop';
import Banner from './Banner/Banner';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import Experience from './Experience/Experience';
import Feature from './Feature/Feature';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <BannerDownPart />
            <Experience />
            <ExperienceDownPart />
            <Services />

            <ChooseUs />
            <Feature />
            <FooterTop />
            <FooterBody />
        </div>
    );
};

export default Home;