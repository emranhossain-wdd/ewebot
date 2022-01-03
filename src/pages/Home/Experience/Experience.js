import React from 'react';
import {ProgressBar} from "react-progressbar-fancy";
import AOS from 'aos';
import 'aos/dist/aos.css'
import './Experience.css'
AOS.init();

const Experience = () => {
    return (
        <div className='experience flex w-11/12 mx-auto relative py-16 mt-12 gap-5'>
            <div className="experience-left-image">
                <img data-aos="zoom-in" data-aos-duration="1600" data-aos-once="true" src="https://i.ibb.co/m5vGXLS/home10-figure1.jpg" alt="" />
                <img data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" className='absolute top-8 left-5' src="https://i.ibb.co/Cwk1DRt/home10-phone1.png" alt="" />
                <img data-aos="fade-up" data-aos-duration="2200" data-aos-once="true" className='absolute top-0 left-24' src="https://i.ibb.co/dMpqF0K/home10-phone2.png" alt="" />
                <img data-aos="zoom-in-down" data-aos-duration="2400" data-aos-once="true" className='absolute top-48 left-80' src="https://i.ibb.co/NmggryJ/home10-phone3.png" alt="" />
            </div>

            <div className="experience-right-details w-3/6">
                <div className="text-content px-4" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
                    <h5 className='font-semibold text-sm mb-2'>EXPERIENCE</h5>
                    <h2 className='text-2xl font-bold mb-2'>Pay for Qualified Traffic</h2>
                    <p className='mb-10 text-lg'>Ewebot stays ahead of the curve with digital marketing trends. Our success has us leading the pack amongst our competitors with our ability to anticipate change
                    and innovation.</p>
                </div>

                <div className="progress-bar mb-14">
                    <ProgressBar
                        className="space mb-7 text-xl"
                        label={"SEO Analysis"}
                        score={90}
                     />
                      <ProgressBar
                        className="space mb-7 text-xl"
                        label={"SEO Audit"}
                        score={79}
                     />
                      <ProgressBar
                        className="space text-xl"
                        label={"Optimization"}
                        score={95}
                     />
                </div>
                <button className='ml-4 border border-[#4f46e5] hover:bg-indigo hover:text-[#fff] rounded px-5  py-3 font-semibold transition duration-700'>Discover More</button>
            </div>
        </div>
    );
};

export default Experience;