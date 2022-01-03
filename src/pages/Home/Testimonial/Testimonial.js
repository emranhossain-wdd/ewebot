import React from 'react';
import Flickity from 'react-flickity-component';
import AOS from 'aos';
import './Testimonial.css'
AOS.init();

const flickityOptions = {
    initialIndex: 0,
    wrapAround: true
  }

const Testimonial = () => {
    return (
        <div className="main-branch bg-slate-50 py-24">
            <div className='testimonial flex w-11/12 mx-auto gap-10'>
            <div className="testimonial-details relative w-2/4 left-16">
                <div className="testimonial-bg-image relative left-32 top-12" data-aos="fade-up" data-aos-duration="1600" data-aos-once="true">
                    <img  src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_quote.png" alt="" />
                </div>
                <div className="testimonial-details absolute top-0" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <h4 className='font-semibold mb-2'>TESTIMONIALS</h4>
                    <h2 className='text-2xl font-bold mb-3'>What Our Clients Say</h2>
                    <p className='text-xl w-96'>Ewebot stays ahead of the curve with digital marketing trends.</p>
                </div>
            </div>
            <div className="review-details relative w-2/4 mx-2">
            <Flickity className='review-slide' options={flickityOptions} >
                <div id="review-cell-1" class="review-cell gap-5">
                    <div className="review-card bg-white relative  py-6">
                        <div className="review-text-wrapper">
                            <img src="https://i.ibb.co/sbHnVm9/8679025-double-quotes-l-icon-1.png" alt="" />
                            <p className='pt-4 text-xl'>Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talen.t, creative ability manual skill.</p>
                        </div>
                        <figure className='relative left-24 pb-8'>
                            <div className="review-pic flex gap-3">
                                <img className='rounded-full w-24 h-24' src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_avatar-148x148.jpg" alt="" />
                                <h2 className='flex flex-col top-4 relative'>
                                    <span className="review_name font-bold">
                                    Denis Robinson
                                    </span>
                                    <span className="review_prof">
                                    Customer
                                    </span>
                                </h2>
                            </div>
                        </figure>
                    </div>
                </div>
                <div id="review-cell-1" class="review-cell gap-5">
                    <div className="review-card bg-white relative py-6">
                        <div className="review-text-wrapper">
                            <img src="https://i.ibb.co/sbHnVm9/8679025-double-quotes-l-icon-1.png" alt="" />
                            <p className='pt-4 text-xl'>Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talen.t, creative ability manual skill.</p>
                        </div>
                        <figure className='relative left-24 pb-8'>
                            <div className="review-pic flex gap-3">
                                <img className='rounded-full w-24 h-24' src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_avatar-148x148.jpg" alt="" />
                                <h2 className='flex flex-col top-4 relative'>
                                    <span className="review_name font-bold">
                                    Denis Robinson
                                    </span>
                                    <span className="review_prof">
                                    Customer
                                    </span>
                                </h2>
                            </div>
                        </figure>
                    </div>
                </div>
                <div id="review-cell-1" class="review-cell gap-5">
                    <div className="review-card bg-white relative py-6">
                        <div className="review-text-wrapper">
                            <img src="https://i.ibb.co/sbHnVm9/8679025-double-quotes-l-icon-1.png" alt="" />
                            <p className='pt-4 text-xl'>Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talen.t, creative ability manual skill.</p>
                        </div>
                        <figure className='relative left-24 pb-8'>
                            <div className="review-pic flex gap-3">
                                <img className='rounded-full w-24 h-24' src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2021/01/home10_avatar-148x148.jpg" alt="" />
                                <h2 className='flex flex-col top-4 relative'>
                                    <span className="review_name font-bold">
                                    Denis Robinson
                                    </span>
                                    <span className="review_prof">
                                    Customer
                                    </span>
                                </h2>
                            </div>
                        </figure>
                    </div>
                </div>
            </Flickity>
            </div>
        </div>
        </div>
        
    );
};

export default Testimonial;