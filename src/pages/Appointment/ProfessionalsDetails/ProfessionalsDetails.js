import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBtn from '../AppointmentBtn/AppointmentBtn';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const ProfessionalsDetails = ({ date, setDate }) => {
    const { id } = useParams();

    return (
        <div>
            <span className='text-5xl'>{id}</span>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            {/* <AvailableAppointments date={date} setDate={setDate}></AvailableAppointments> */}
            <AppointmentBtn date={date} />
        </div>
    );
};

export default ProfessionalsDetails;