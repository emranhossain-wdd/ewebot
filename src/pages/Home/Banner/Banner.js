import React from 'react';
import Typewriter from 'typewriter-effect'
import AOS from 'aos';
import 'aos/dist/aos.css'
import './Banner.css'
AOS.init();

const Banner = () => {
    return (
        <div className='banner mx-auto flex pb-4'>
            <div data-aos="fade-in" className="banner-Image z-0">
                <img className='z-0'  src="https://i.ibb.co/hsXh8Gn/smiling-girl.jpg" alt="banner" />
                <div className="sub-image">
                    <img data-aos="fade-right" data-aos-duration="1200" data-aos-once="true" id="sub1" src="https://i.ibb.co/VpMP4qb/home10-img3.png" alt="" />
                    <img data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1100" data-aos-once="true" id="sub2" src="https://i.ibb.co/BBZGDG1/home10-img1.png" alt="" />
                    <img data-aos="zoom-in-up" data-aos-duration="1100" data-aos-once="true" id="sub4" src="https://i.ibb.co/bd3vYYJ/home10-img4.png" alt="" />
                    <img data-aos="fade-down-right" data-aos-duration="1100" data-aos-once="true" id="sub3" src="https://i.ibb.co/1fRxSzx/home10-img2.png" alt="" />
                </div>
            </div>

            <div className="banner-text grid items-center content-center">
                <div className="heading-text mb-8">
                    <h2 className='text-7xl mb-5'>
                        <span className="heading-span">Digital</span> <br />
                        <span className="heading-span">Marketing</span>
                        <span>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'text-color'
                            }}
                            onInit={(typewriter)=> {
                        
                            typewriter
                                
                            .typeString(`Business`)
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString('Success')
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString('Services')
                            .start()
                            
                            }}
                        />
                        </span>
                        
                    </h2>
                    <p className='text-xl'>Ensuring the best return on investment for your bespoke SEO campaign requirement.</p>
                </div>
                <div className="searchSite bg-white py-2 px-3 rounded mb-12">
                    <form className='search' action="">
                        <input className='py-3 w-64 px-2 rounded' type="text" placeholder='http:// yoursite.com' />
                        <button className='px-6 search-btn py-3 text-base rounded text-white' type="submit">Analyze Your Site</button>
                    </form>
                </div>
                <div className="contact flex gap-4 cursor-pointer">
                    <div className="i-image py-2">
                        <img className='w-6' src="https://i.ibb.co/3yL5rZr/img-box-29-orange.png" alt="phone" />
                    </div>
                    <div className="contact-text font-bold">
                        <h2 className='text-4xl'>800-123-4567</h2>
                        <h4 className='text-sm'>INFO@COMPANY.COM</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;