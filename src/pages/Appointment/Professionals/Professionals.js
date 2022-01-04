import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillTwitterCircle, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { fetchProfessionals } from '../../../Redux/slices/ProfessionalsSlice/professionalsSlice';

const Professionals = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfessionals());
    }, [dispatch])

    const professionals = useSelector(state => state.professionals.professionals)

    return (
        <>
            <div className='flex flex-col items-center my-6 space-y-4'>
                <h3 className='text-lg font-semibold'>OUR TEAM</h3>
                <h2 className='text-yellow text-4xl font-bold'>Our Professionals</h2>
                <p className="text-center text-lg w-5/12">Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te.</p>
            </div>
            <div className="md:grid grid-cols-3 w-9/12 mx-auto gap-12 text-center">
                {professionals.map((professional) => (<div key={professional._id} >
                    <Link to={`appointment/${professional?._id}`}>
                        <div className="p-4 hover:shadow-xl rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700">
                            <img className="rounded-lg" src={professional?.img} alt="" />
                            <h2 className="text-xl font-semibold mt-4">{professional?.name}</h2>
                            <h5>{professional?.designation}</h5>
                            <div className="flex text-4xl mt-4 space-x-2 text-blue-700 justify-center">
                                <AiFillTwitterCircle />
                                <AiFillFacebook />
                                <AiFillLinkedin />
                            </div>
                        </div>
                    </Link>
                </div>
                ))}
            </div>
        </>
    );
};

export default Professionals;