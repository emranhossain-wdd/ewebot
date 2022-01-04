import React, { useState } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Services = () => {
    const [monthlyPlan, setMonthlyPlan] = useState(true)

    const monthlyBasic = {
        planType: "Monthly",
        planName: "Basic",
        planPrice: "24",
    }
    return (
        <div className='py-20'>
            <div className='flex flex-col items-center'>
                <div className='text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <h3 className='text-lg font-semibold'>PRICING PLANS</h3>
                    <h2 className='text-yellow text-4xl font-bold'>The Best Solutions for Our Clients</h2>
                </div>
                
                <div className='bg-gray-200 rounded-full my-8'>
                    <button onClick={() => setMonthlyPlan(true)} className={classNames(monthlyPlan ? 'bg-gradient-to-r from-orange-300 to-orange-400 rounded-full text-white' : 'bg-transparent text-slate-600', 'py-3 px-6 font-semibold')}>MONTHLY</button>
                    <button onClick={() => setMonthlyPlan(false)} className={classNames(!monthlyPlan ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full text-white' : 'bg-transparent text-slate-600', 'py-3 px-6 font-semibold')}>YEARLY</button>
                </div>
            </div>
            {
                monthlyPlan ?
                    <div className="w-9/12 mx-auto">
                        <div className="md:grid lg:grid-cols-3">
                            <div className="bg-gradient-to-r from-slate-100 to-slate-200 w-full h-auto py-20 lg:my-8 rounded-lg flex justify-center" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                                <ul>
                                    <li className="text-center text-2xl font-bold text-gray-600">Basic Plan</li>
                                    <li className="text-center text-indigo-600 font-bold pt-4"><span className="text-2xl">$</span><span className="text-7xl">24</span><span className="text-4xl">50</span></li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Audits</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Management</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Copywriting</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Link Building</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Site Migration</li>
                                    <button onClick={() => console.log(monthlyBasic)} className="bg-gradient-to-r from-blue-300 to-indigo-600 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl font-semibold text-slate-50">Get Started</button>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-r from-orange-300 to-orange-600 w-full h-auto rounded-lg flex justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                                <ul className="my-28 text-center">
                                    <li className="text-center text-2xl font-bold text-slate-50">Standard Plan</li>
                                    <li className="text-center text-slate-50 font-bold pt-4"><span className="text-2xl ">$</span><span className="text-7xl">59</span><span className="text-4xl">90</span></li>
                                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Audits</li>
                                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Management</li>
                                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Copywriting</li>
                                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> Link Building</li>
                                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> Site Migration</li>
                                    <button className="bg-orange-50 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl text-orange-600 font-semibold">Get Started</button>
                                </ul>
                            </div>
                            {/* 3 */}
                            <div className="bg-gradient-to-r from-green-50 to-green-100 w-full h-auto py-20 my-8 rounded-lg flex justify-center" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                                <ul className='text-center'>
                                    <li className="text-center text-2xl font-bold text-gray-600">Premium Plan</li>
                                    <li className="text-center text-green-500 font-bold pt-4"><span className="text-2xl ">$</span><span className="text-7xl">89</span><span className="text-4xl">50</span></li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Audits</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Management</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Copywriting</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Link Building</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Site Migration</li>
                                    <button className="bg-gradient-to-r from-green-300 to-green-600 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl font-semibold text-slate-50">Get Started</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="w-9/12 mx-auto transition">
                        <div className="md:grid lg:grid-cols-3">
                            <div className="bg-gradient-to-r from-amber-50 to-amber-100 w-full h-auto py-20 lg:my-8 rounded-lg flex justify-center">
                                <ul>
                                    <li className="text-center text-2xl font-bold text-gray-500">Basic Plan</li>
                                    <li className="text-center text-orange-500 font-bold pt-4"><span className="text-2xl">$</span><span className="text-7xl">89</span><span className="text-4xl">50</span></li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Audits</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Management</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Copywriting</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Link Building</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Site Migration</li>
                                    <button onClick={() => console.log(monthlyBasic)} className="bg-gradient-to-r from-orange-300 to-orange-600 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl font-semibold text-slate-50">Get Started</button>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 w-full h-auto rounded-lg flex justify-center">
                                <ul className="my-28 text-center">
                                    <li className="text-center text-2xl font-bold text-slate-50">Standard Plan</li>
                                    <li className="text-center text-slate-50 font-bold pt-4"><span className="text-2xl ">$</span><span className="text-7xl">299</span><span className="text-4xl">90</span></li>
                                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Audits</li>
                                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Management</li>
                                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Copywriting</li>
                                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> Link Building</li>
                                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> Site Migration</li>
                                    <button className="bg-white mt-10 py-3 px-6 rounded-lg ml-2 text-1xl text-indigo-600 font-semibold">Get Started</button>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-r from-green-50 to-green-100 w-full h-auto py-20 my-8 rounded-lg flex justify-center">
                                <ul className='text-center'>
                                    <li className="text-center text-2xl font-bold text-gray-500">Premium Plan</li>
                                    <li className="text-center text-green-600 font-bold pt-4"><span className="text-2xl ">$</span><span className="text-7xl">599</span><span className="text-4xl">50</span></li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Audits</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Management</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Copywriting</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Link Building</li>
                                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Site Migration</li>
                                    <button className="bg-gradient-to-r from-green-300 to-green-600 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl font-semibold text-slate-50">Get Started</button>
                                </ul>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Services;
