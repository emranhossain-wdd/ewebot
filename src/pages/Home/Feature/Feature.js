import React from 'react';
import Flickity from 'react-flickity-component';
import AOS from 'aos';
import "./Feature.css";
AOS.init();

const flickityOptions = {
    initialIndex: 2,
    wrapAround: true
  }
const Feature = () => {
    return (
        <div className='feature py-8 mt-4'>
            <div className="feature-heading text-center mb-16" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <h4 className='font-semibold text-sm mb-2'>FEATURED PROJECTS</h4>
                <h3 className='text-3xl font-bold'>Our Case Studies</h3>
            </div>
            <div className="featureProjects pb-14">
            <Flickity className='' options={flickityOptions} >
                <div id="carousel-cell-1" class="carousel-cell gap-5">
                    <div className="carousel-cell-img">
                        <img src="https://i.ibb.co/rktDLkz/portfolio-img-02-540x391.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h4>Marketing</h4>
                        <h3>Online Media Management</h3>
                    </div>
                </div>
                <div id="carousel-cell-2" class="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://i.ibb.co/dtphSPH/portfolio-img-04-540x391.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h4>SEO</h4>
                        <h3>Mannix Marketing</h3>
                    </div>
                </div>
                <div id="carousel-cell-3" class="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://i.ibb.co/5TB3MfW/flowy-dark-haired-woman-540x391.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h4>Marketing</h4>
                        <h3>Online Media Management</h3>
                    </div>
                </div>
                <div id="carousel-cell-4" class="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://i.ibb.co/rQ0m6k7/portfolio-img-01-new-540x391.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h4>SEO</h4>
                        <h3>Mannix Marketing</h3>
                    </div>
                </div>
                <div id="carousel-cell-5" class="carousel-cell gap-5">
                <div className="carousel-cell-img">
                        <img src="https://i.ibb.co/rktDLkz/portfolio-img-02-540x391.jpg" alt="" />
                    </div>
                    <div className="carousel-cell-text">
                        <h4>SEO</h4>
                        <h3>Mannix Marketing</h3>
                    </div>
                </div>
            </Flickity>
            </div>
        </div>
    );
};

export default Feature;