import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';
import Professionals from '../Professionals/Professionals';

const Appointment = () => {
    // const [date, setDate] = React.useState(new Date());
    return (
        <div>
            {/* <AppointmentHeader date={date}setDate={setDate}></AppointmentHeader> */}
            {/* <AvailableAppointments date={date} setDate={setDate}></AvailableAppointments> */}
            <Professionals />
        </div>
    );
};

export default Appointment;