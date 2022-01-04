import React from 'react';
import phone_img from '../../../images/img_box_29_violet.png';
import localtion_img from '../../../images/img_box_30_violet.png';

const FooterTop = () => {
    return (
        <div>
            <div className="lg:flex lg:mx-32 mt-16 justify-center">
                <div className='lg:flex lg:mr-14'>
                    <img className='w-10 h-10' src={phone_img} alt="" />
                    <div className='ml-6'>
                        <p>8 800 2534 236</p>
                        <p>email@yoursite.com</p>
                    </div>
                </div>
                <div className='lg:flex mr-14'>
                    <img className='w-10 h-10' src={localtion_img} alt="" />
                    <div className='ml-6'>
                        <p>27 Division St, New York, NY</p>
                        <p>10002, United States</p>
                    </div>
                </div>
                <div>
                    <input className='bg-gray-100 border-solid border-2 border-violet-200 lg:w-96 pl-6 py-3 rounded' type="email" placeholder="Email Address" />
                    <button className='bg-gradient-to-r from-sky-400 to-blue-700 hover:bg-gradient-to-r from-blue-700 to-sky-400 py-3 px-6 rounded text-gray-50 font-bold' type="submit">SIGN UP</button>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;