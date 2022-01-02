import React from 'react';

const Services = () => {
    const monthlyBasic={
        planType:"Monthly",
        planName:"Basic",
        planPrice:"24",
    }
    return (
        <>
        <div>
            <button className='bg-red-500 mr-6'><span>Monthly</span></button>
            <button className='bg-yellow-500'><span>Year</span></button>
        </div>
        <div className="container mx-auto">
            <div className="md:grid lg:grid-cols-3">
            <div className="bg-gradient-to-r from-slate-100 to-slate-300 w-full h-auto py-20 lg:my-8 rounded-lg flex justify-center">
                <ul>
                    <li className="text-center text-2xl font-bold text-gray-600">{monthlyBasic.planName} Plan</li>
                    <li className="text-center text-blue-800 font-bold pt-4"><span className="text-2xl">$</span><span className="text-7xl">24</span><span className="text-4xl">50</span></li>
                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Audits</li>
                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Management</li>
                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Copywriting</li>
                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Link Building</li>
                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Site Migration</li>
                    <button onClick={()=>console.log(monthlyBasic)} className="bg-gradient-to-r from-blue-300 to-blue-600 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl font-semibold text-slate-50 mt-4">Get Started</button>
                </ul>
             </div>
             <div className="bg-gradient-to-r from-orange-300 to-orange-600 w-full h-auto rounded-lg flex justify-center">
                <ul className="my-28">
                    <li className="text-center text-2xl font-bold text-slate-50">Basic Plan</li>
                    <li className="text-center text-slate-50 font-bold pt-4"><span className="text-2xl ">$</span><span className="text-7xl">24</span><span className="text-4xl">50</span></li>
                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Audits</li>
                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Management</li>
                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Copywriting</li>
                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> Link Building</li>
                    <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> Site Migration</li>
                    <button className="bg-orange-50 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl text-orange-600 font-semibold mt-4">Get Started</button>
                </ul>
             </div>
             <div className="bg-gradient-to-r from-green-100 to-green-200 w-full h-auto py-20 my-8 rounded-lg flex justify-center">
                <ul>
                    <li className="text-center text-2xl font-bold text-gray-600">Basic Plan</li>
                    <li className="text-center text-green-700 font-bold pt-4"><span className="text-2xl ">$</span><span className="text-7xl">24</span><span className="text-4xl">50</span></li>
                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Audits</li>
                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Management</li>
                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Copywriting</li>
                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Link Building</li>
                    <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Site Migration</li>
                    <button className="bg-gradient-to-r from-green-300 to-green-600 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl font-semibold text-slate-50 mt-4">Get Started</button>
                </ul>
             </div>
            </div>
        </div>

        </>
    );
};

export default Services;