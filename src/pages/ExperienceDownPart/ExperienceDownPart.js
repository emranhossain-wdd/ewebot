import React from 'react';
import './ExperienceDownPart.css';
const ExperienceDownPart = () => {
    return (
        <div className='experiencePart flex'>
            <div className="experience-part-one mx-auto relative">
                <div className='experience-before-img'>
                    <img className='top-0 left-0 z-0 ' src='https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_ellipse.png' alt="" />
                </div>
                <div className="grid grid-cols-2 gap-5 absolute top-0 justify-center left-28">
                    <div className='shadow flex items-center justify-center w-full h-60 rounded-lg'>
                        <div className='px-9'>
                        <h2 className='text-center text-6xl font-bold text'>89%</h2>
                        <p className='text-center text-xl mt-2'>Of the audience is <br /> under 34 years old</p>
                        </div>
                    </div>
                    <div className='shadow flex items-center justify-center w-full h-60 rounded-lg'>
                        <div className='px-9'>
                        <h2 className='text-center text-6xl font-bold'>1350</h2>
                        <p className='text-center text-xl mt-2'>Content pieces <br /> produced everyday</p>
                        </div>
                    </div>
                    <div className='shadow flex items-center justify-center w-full h-60 rounded-lg'>
                        <div className='px-9'>
                        <h2 className='text-center text-6xl font-bold'>320m</h2>
                        <p className='text-center text-xl mt-2'>Employee <br /> worldwide</p>
                        </div>
                    </div>
                    <div className='shadow flex items-center justify-center w-full h-60 rounded-lg'>
                        <div className='px-9'>
                        <h2 className='text-center text-6xl font-bold'>320m</h2>
                        <p className='text-center text-xl mt-2'>Digital global <br /> audience reach</p>
                        </div>
                    </div>
                </div>
            </div>  
           
            <div>
                <img src='https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/girl-with_phone.jpg' alt="" />
            </div>
        </div>
    );
};
 
export default ExperienceDownPart;
 


