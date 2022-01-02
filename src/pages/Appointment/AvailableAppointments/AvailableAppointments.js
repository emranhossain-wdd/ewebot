import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const AvailableAppointments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const bookings = [
    {
      id: "01",
      name: "img1",
      time: "8.00 AM - 6.00 AM",
      space: "10",
    },
    {
      id: "02",
      name: "img2",
      time: "8.00 AM - 6.00 AM",
      space: "10",
    },
    {
      id: "03",
      name: "img3",
      time: "8.00 AM - 6.00 AM",
      space: "10",
    },
    {
      id: "04",
      name: "img4",
      time: "8.00 AM - 6.00 AM",
      space: "10",
    },
    {
      id: "05",
      name: "img6",
      time: "8.00 AM - 6.00 AM",
      space: "10",
    },
    { id: "06", name: "img6", time: "8.00 AM - 6.00 AM" },
  ];
  return (
    <Container>
      <Typography
        sx={{ py: 4 }}
        style={{ color: "#5CE7ED", fontWeight: "400", fontSize: "40px" }}
      >
        AvailableAppointment on {date.toDateString()}
      </Typography>
      {bookingSuccess && <Alert severity="success">appointment booked successfully!</Alert>}
      <Grid container spacing={3}>
        {bookings.map((booking) => (
          <Booking
            booking={booking}
            date={date}
            key={booking.id}
            setBookingSuccess={setBookingSuccess}
          ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
