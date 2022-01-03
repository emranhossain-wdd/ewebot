import React from 'react';
import './BannerDownPart.css';
import seo from '../../../images/SEO-Consultancy.png';
import ca from '../../../images/Competitor-Analysis.png';
import smm from '../../../images/Social-Media-Marketing.png';

const BannerDownPart = () => {
    const bannerDownPart = [
        { image: seo, number: '.01', bannerName: 'SEO Consultancy', bannerDetails: 'Delectus recteque has ne, no pro tation commodo. Ea libris utamur vix, in sumo augue soluta vis.' },
        { image: ca, number: '.02', bannerName: 'Competitor Analysis', bannerDetails: 'Per ea quod iusto. Te autem perti nax definitiones vel, denique patrioque id per was be more.' },
        { image: smm, number: '.03', bannerName: 'Social Media Marketing', bannerDetails: 'Delenit signiferumque ei cum, te pertinax voluptatum sed, ornatus nonumes explicari sit et.' },
    ]
    return (
        <div className='grid lg:grid-cols-3 banner-shadow lg:mx-32 my-24 rounded-lg '>
            {
                bannerDownPart.map(bdp => <div>
                    <div className='banner-design'>
                        <img className='w-60 mx-auto' src={bdp.image} alt="" />
                        <h3 className='number-design text-center text-5xl font-extrabold'>{bdp.number}</h3>
                    </div>
                    <div className='my-24 mx-10'>
                        <h5 className='text-center my-3 text-xl text-gray-700 font-semibold'>{bdp.bannerName}</h5>
                        <p className='text-center text-base text-gray-500 font-medium'>{bdp.bannerDetails}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default BannerDownPart;