import React from 'react';
import FooterBody from '../Footer/FooterBody/FooterBody';
import FooterTop from '../Footer/FooterTop/FooterTop';
import Banner from './Banner/Banner';
import Navigation from '../Shared/Navigation/Navigation';
import Experience from './Experience/Experience';
import Feature from './Feature/Feature';
import Services from './Services/Services';
import BannerDownPart from './BannerDownPart/BannerDownPart';
import ChooseUs from './ChooseUs/ChooseUs';
import ExperienceDownPart from './ExperienceDownPart/ExperienceDownPart';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <BannerDownPart />
            <Experience />
            <ExperienceDownPart />
            <Feature />

            <Services />
            <ChooseUs />
            <Testimonial />
            <FooterTop />
        </div>
    );
};

export default Home;