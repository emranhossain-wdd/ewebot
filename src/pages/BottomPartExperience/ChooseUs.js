import React from 'react';
import './ChooseUs.css';
import service1 from '../../images/home10_service1-active.png';
import service2 from '../../images/home10_service2-active.png';
import service3 from '../../images/home10_service3.png';
import service4 from '../../images/home10_service4-active.png';
import service5 from '../../images/home10_service5.png';
import service6 from '../../images/home10_service6-active.png';

const ChooseUs = () => {
    const offers=[
        {image: service1,
        offersName:'SEO',
        offersDescription:'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.'},
        {image: service2,
        offersName:'Development',
        offersDescription:'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.'},
        {image: service3,
        offersName:'Web Design',
        offersDescription:'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.'},
        {image: service4,
        offersName:'CMS',
        offersDescription:'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.'},
        {image: service5,
        offersName:'Maintenance',
        offersDescription:'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.'},
        {image: service6,
        offersName:'Hosting',
        offersDescription:'Maecenas elementum sapien in metus placerat finibus. Lorem ipsum dolor sit amet, vix an.'}
    ]
    return (
        <div>
            <div className='flex items-center justify-center my-8'>
                <div>
                    <p className='text-gray-500 font-medium text-center'> WHY CHOOSE US</p>
                    <h3 className='text-3xl text-gray-700 font-bold'>What We Offer</h3>
                </div>
            </div>
            <div className="md:grid lg:grid-cols-3 gap-x-10 gap-y-8 mx-28">
                {
                    offers.map(offer=><div className='cartShadow p-12 rounded-lg w-96'>
                    <div>
                        <div className=' flex items-center justify-start '>
                            <img className='w-20' src= {offer.image} alt="" />
                            <div className='ml-4'><h4 className='text-2xl text-gray-700  font-semibold'>{offer.offersName}</h4></div>
                        </div>
                    </div>
                    <div className='mt-2'><p className='text-justify text-gray-500 font-medium'>{offer.offersDescription}</p></div>
                </div>)
                }
            </div>
        </div>
    );
};

export default ChooseUs;