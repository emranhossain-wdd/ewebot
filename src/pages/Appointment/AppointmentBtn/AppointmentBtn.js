import { Alert, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import {ProgressBar} from "react-progressbar-fancy";
import AOS from 'aos';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import './Appointmentbtn.css'
import { PieChart } from 'amazing-react-charts';
AOS.init();

const AppointmentBtn = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <div>
            <Container>
                <Typography
                    sx={{ py: 4 }}
                    style={{ color: "#5CE7ED", fontWeight: "400", fontSize: "40px" }}
                >
                    AvailableAppointment on {date.toDateString()}
                </Typography>
                {bookingSuccess && <Alert severity="success">appointment booked successfully!</Alert>}
                <Button
                    onClick={handleBookingOpen}
                    sx={{ mt: 2 }}
                    style={{ backgroundColor: "#5CE7ED", padding: "8px 12px" }}
                    variant="contained"
                >
                    BOOK APPOINTMENT
                </Button>
            </Container>
            <AppointmentModal time={date} handleBookingClose={handleBookingClose} openBooking={openBooking} date={date} setBookingSuccess={setBookingSuccess}></AppointmentModal>
            <div className="singleappointbottom w-10/12 mx-auto flex py-24 gap-5">
                <div className="single-point-left w-3/6">
                <div className="single-point-heading px-4 mb-6">
                        <h4 className="font-semibold">MORE SNACKS HERE</h4>
                        <h3 className="text-3xl font-bold">How Amazing We are<br/> You Have to See</h3>
                        <p className="text-xl">Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te.</p>
                    </div>
                    <div className="single-point-progress">
                    <PieChart
                    noAnimation
                    colors={['#7171fd', '#ffc04c', '#72d82d', '#eb4b2f']}
                    legendPosition="inside"
                    radius="100%"
                    resultFormatType="percent"
                    labelFontColor="white"
                    tooltipTitle="title"
                    center={['50%', '50%']}
                    data={[
                        { name: 'Ruim', value: 25 },
                        { name: 'Satisfatório', value: 10 },
                        { name: 'Bom', value: 45 },
                        { name: 'Ótimo', value: 10 },
                    ]}
                    />
                    </div>
                </div>
                <div className="single-point-right w-3/6">
                    <div className="single-point-heading px-4 mb-8">
                        <h4 className="font-semibold">EXPERIENCE</h4>
                        <h3 className="text-3xl font-bold">Here Is My Some<br/> Experience</h3>
                        <p className="text-xl">Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te.</p>
                    </div>
                    <div className="single-point-progress">
                        <ProgressBar
                            className="space1 mb-7 text-xl"
                            label={"SEO Analysis"}
                            score={90}
                        />
                        <ProgressBar
                            className="space2 mb-7 text-xl"
                            label={"SEO Audit"}
                            score={89}
                        />
                        <ProgressBar
                            className="space3 text-xl mb-7"
                            label={"Optimization"}
                            score={95}
                        />
                         <ProgressBar
                            className="space4 text-xl"
                            label={"Development"}
                            score={96}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
// booking={booking}
export default AppointmentBtn;