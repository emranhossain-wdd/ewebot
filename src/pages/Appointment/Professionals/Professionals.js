import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProfessionals } from '../../../Redux/slices/ProfessionalsSlice/professionalsSlice';

const Professionals = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfessionals());
    }, [dispatch])

    const professionals = useSelector(state => state.professionals.professionals)

    return (
        <div className="md:grid grid-cols-3 w-9/12 mx-auto gap-10">
            {professionals.map((professional) => (<div key={professional._id} >
                <Link to={`appointment/${professional?._id}`}>
                    <div className="">
                        <img src={professional?.img} alt="" />
                        <h2>{professional?.name}</h2>
                        <h5>{professional?.designation}</h5>
                    </div>
                </Link>
            </div>
            ))}
        </div>
    );
};

export default Professionals;