import React from 'react';
import Banner from './Banner/Banner';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';


const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Navigation></Navigation>

        </div>
    );
};

export default Home;