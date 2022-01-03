import React from 'react';

const FooterBody = () => {
    return (
        <div>
            <hr className='w-5/6 mx-auto  mt-10' />
            <div className="md:grid lg:grid-cols-4 gap-5 mx-32">
                <div>
                    <h6 className='text-gray-700 font-bold text-2xl my-6'>About</h6>
                    <p className='text-gray-500 font-normal'>We focus on the needs of small to middle market businesses to improve and grow their return.</p>
                    <div></div>
                </div>
                <div>
                    <h6 className='text-gray-700 font-bold text-2xl my-6'>Service</h6>
                    <ul>
                        <li className='text-gray-600 font-normal'>SEO Marketing</li>
                        <li className='text-gray-600 font-normal'>SEO Services</li>
                        <li className='text-gray-600 font-normal'>Pay Per Click</li>
                        <li className='text-gray-600 font-normal'>Social Media</li>
                        <li className='text-gray-600 font-normal'>SEO Audit</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-gray-700 font-bold text-2xl my-6'>Community</h6>
                    <ul>
                        <li className='text-gray-600 font-normal'>Our Product</li>
                        <li className='text-gray-600 font-normal'>Documentation</li>
                        <li className='text-gray-600 font-normal'>Our Services</li>
                        <li className='text-gray-600 font-normal'>Company</li>
                        <li className='text-gray-600 font-normal'>What We Do?</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-gray-700 font-bold text-2xl my-6'>
                        Quick Links
                    </h6>
                    <ul>
                        <li className='text-gray-600 font-normal'>Home</li>
                        <li className='text-gray-600 font-normal'>About Us</li>
                        <li className='text-gray-600 font-normal'>Main Services</li>
                        <li className='text-gray-600 font-normal'>Pricing</li>
                        <li className='text-gray-600 font-normal'>Our Cases</li>
                    </ul>
                </div>
            </div>
            <hr className='w-5/6 mx-auto  mt-10' />
            <div><p className='text-center text-gray-500 font-normal my-5'>© 2021 — team-34 @ Ewebot</p></div>
        </div>
    );
};

export default FooterBody;