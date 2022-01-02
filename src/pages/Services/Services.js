// import React, { useState } from 'react';

// const Services = () => {
//     const [monthlyShow, setMonthlyShow]=useState(true);
//     const [yearlyShow, setYearlyShow]=useState(true);
//     const monthlyBasic={
//         planType:"Monthly",
//         planName:"Basic",
//         planPrice:"24",
//         planPriceFloat:"50",
//     }
//     const monthlyStandart={
//         planType:"Monthly",
//         planName:"Standart",
//         planPrice:"59",
//         planPriceFloat:"90",
//     }
//     const monthlyPremium={
//         planType:"Monthly",
//         planName:"Premium",
//         planPrice:"89",
//         planPriceFloat:"50",
//     }
//     const yearlyBasic={
//         planType:"Yearly",
//         planName:"Basic",
//         planPrice:"89",
//         planPriceFloat:"50",
//     }
//     const yearlyStandart={
//         planType:"Yearly",
//         planName:"Standart",
//         planPrice:"299",
//         planPriceFloat:"90",
//     }
//     const yearlyPremium={
//         planType:"Yearly",
//         planName:"Premium",
//         planPrice:"599",
//         planPriceFloat:"50",
//     }
    
//     return (
//         <>
//         <div className="flex justify-center my-8">
//             <div className="flex justify-between rounded-full bg-gray-300 px-10 py-4 w-52">
//                 <button onClick={()=>setMonthlyShow(!monthlyShow)}><span>Monthly</span></button>
//                 <button onClick={()=>setYearlyShow(!yearlyShow)}><span>Year</span></button>
//             </div>
//         </div>
//         {monthlyShow?<div className="container mx-auto">
//             <div className="md:grid lg:grid-cols-3">
//             <div className="bg-gradient-to-r from-slate-100 to-slate-300 w-full h-auto py-20 lg:my-8 rounded-lg flex justify-center">
//                 <ul>
//                     <li className="text-center text-2xl font-bold text-gray-600">{monthlyBasic.planName} Plan</li>
//                     <li className="text-center text-blue-800 font-bold pt-4"><span className="text-2xl">$</span><span className="text-7xl">{monthlyBasic.planPrice}</span><span className="text-4xl">{monthlyBasic.planPriceFloat}</span></li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Audits</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Management</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Copywriting</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Link Building</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Site Migration</li>
//                     <button className="bg-gradient-to-r from-blue-300 to-blue-600 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl font-semibold text-slate-50 mt-4">Get Started</button>
//                 </ul>
//              </div>
//              <div className="bg-gradient-to-r from-orange-300 to-orange-600 w-full h-auto rounded-lg flex justify-center">
//                 <ul className="my-28">
//                     <li className="text-center text-2xl font-bold text-slate-50">{monthlyStandart.planName} Plan</li>
//                     <li className="text-center text-slate-50 font-bold pt-4"><span className="text-2xl ">$</span><span className="text-7xl">{monthlyStandart.planPrice}</span><span className="text-4xl">{monthlyStandart.planPriceFloat}</span></li>
//                     <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Audits</li>
//                     <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Management</li>
//                     <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Copywriting</li>
//                     <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> Link Building</li>
//                     <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> Site Migration</li>
//                     <button className="bg-orange-50 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl text-orange-600 font-semibold mt-4">Get Started</button>
//                 </ul>
//              </div>
//              <div className="bg-gradient-to-r from-green-100 to-green-200 w-full h-auto py-20 my-8 rounded-lg flex justify-center">
//                 <ul>
//                     <li className="text-center text-2xl font-bold text-gray-600">{monthlyPremium.planName}  Plan</li>
//                     <li className="text-center text-green-700 font-bold pt-4"><span className="text-2xl ">$</span><span className="text-7xl">{monthlyPremium.planPrice}</span><span className="text-4xl">{monthlyPremium.planPriceFloat}</span></li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Audits</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Management</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Copywriting</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Link Building</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Site Migration</li>
//                     <button className="bg-gradient-to-r from-green-300 to-green-600 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl font-semibold text-slate-50 mt-4">Get Started</button>
//                 </ul>
//              </div>
//             </div>
//         </div>:<div className="container mx-auto">
//             <div className="md:grid lg:grid-cols-3">
//             <div className="bg-gradient-to-r from-slate-100 to-slate-300 w-full h-auto py-20 lg:my-8 rounded-lg flex justify-center">
//                 <ul>
//                     <li className="text-center text-2xl font-bold text-gray-600">{yearlyBasic.planName} Plan</li>
//                     <li className="text-center text-blue-800 font-bold pt-4"><span className="text-2xl">$</span><span className="text-7xl">{yearlyBasic.planPrice}</span><span className="text-4xl">{yearlyBasic.planPriceFloat}</span></li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Audits</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Management</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Copywriting</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Link Building</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Site Migration</li>
//                     <button onClick={()=>console.log(monthlyBasic)} className="bg-gradient-to-r from-blue-300 to-blue-600 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl font-semibold text-slate-50 mt-4">Get Started</button>
//                 </ul>
//              </div>
//              <div className="bg-gradient-to-r from-orange-300 to-orange-600 w-full h-auto rounded-lg flex justify-center">
//                 <ul className="my-28">
//                     <li className="text-center text-2xl font-bold text-slate-50">{yearlyStandart.planName} Plan</li>
//                     <li className="text-center text-slate-50 font-bold pt-4"><span className="text-2xl ">$</span><span className="text-7xl">{yearlyStandart.planPrice}</span><span className="text-4xl">{yearlyStandart.planPriceFloat}</span></li>
//                     <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Audits</li>
//                     <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Management</li>
//                     <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> SEO Copywriting</li>
//                     <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> Link Building</li>
//                     <li className="text-center text-1xl font-semibold text-slate-50 pt-4"> Site Migration</li>
//                     <button className="bg-orange-50 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl text-orange-600 font-semibold mt-4">Get Started</button>
//                 </ul>
//              </div>
//              <div className="bg-gradient-to-r from-green-100 to-green-200 w-full h-auto py-20 my-8 rounded-lg flex justify-center">
//                 <ul>
//                     <li className="text-center text-2xl font-bold text-gray-600">{yearlyPremium.planName} Plan</li>
//                     <li className="text-center text-green-700 font-bold pt-4"><span className="text-2xl ">$</span><span className="text-7xl">{yearlyPremium.planPrice}</span><span className="text-4xl">{yearlyPremium.planPriceFloat}</span></li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Audits</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Management</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> SEO Copywriting</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Link Building</li>
//                     <li className="text-center text-1xl font-semibold text-gray-600 pt-4"> Site Migration</li>
//                     <button className="bg-gradient-to-r from-green-300 to-green-600 mt-10 py-3 px-6 rounded-lg ml-2 text-1xl font-semibold text-slate-50 mt-4">Get Started</button>
//                 </ul>
//              </div>
//             </div>
//         </div>} 
//         </>
//     );
// };

// export default Services;