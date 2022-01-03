import { Alert, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

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
        </div>
    );
};
// booking={booking}
export default AppointmentBtn;