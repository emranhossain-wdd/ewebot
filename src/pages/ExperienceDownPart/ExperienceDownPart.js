import React from 'react';
import partImg from '../../images/girl-with_phone.jpg';
import './ExperienceDownPart.css';
import amniImage from '../../images/home10_ellipse.png';

const ExperienceDownPart = () => {
    return (
        <div>
            <div>
            <div className="md:grid lg:grid-cols-2 mx-20">
                <div>
                {/* <img className='backgroundImage' src={amniImage} alt="" /> */}
                <div className="md:grid gap-x-8 gap-y-6 lg:grid-cols-2 mx-8 my-8">
                    <div className='shadow flex items-center justify-center w-full h-60 rounded-lg'>
                        <div>
                        <h2 className='text-center text-6xl font-bold text'>89%</h2>
                        <p className='text-center text-xl mt-2'>Of the audience is <br /> under 34 years old</p>
                        </div>
                    </div>
                    <div className='shadow flex items-center justify-center w-full h-60 rounded-lg'>
                        <div>
                        <h2 className='text-center text-6xl font-bold'>1350</h2>
                        <p className='text-center text-xl mt-2'>Content pieces <br /> produced everyday</p>
                        </div>
                    </div>
                    <div className='shadow flex items-center justify-center w-full h-60 rounded-lg'>
                        <div>
                        <h2 className='text-center text-6xl font-bold'>320m</h2>
                        <p className='text-center text-xl mt-2'>Employee <br /> worldwide</p>
                        </div>
                    </div>
                    <div className='shadow flex items-center justify-center w-full h-60 rounded-lg'>
                        <div>
                        <h2 className='text-center text-6xl font-bold'>320m</h2>
                        <p className='text-center text-xl mt-2'>Digital global <br /> audience reach</p>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                    <img src={partImg} alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default ExperienceDownPart;