import React from 'react';
import BannerDownPart from '../BannerDownPart/BannerDownPart';
import FooterBody from '../Footer/FooterBody/FooterBody';
import FooterTop from '../Footer/FooterTop/FooterTop';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <BannerDownPart />
            <FooterTop/>
            <FooterBody/>
        </div>
    );
};

export default Home;