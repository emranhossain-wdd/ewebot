import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const Booking = ({ booking,date,setBookingSuccess }) => {
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  const { name, time, space } = booking;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 3 }}>
          <Typography
            variant="h5"
            style={{ color: "#5CE7ED", fontWeight: "600" }}
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} SPACES AVAILABLE
          </Typography>
          <Button
            onClick={handleBookingOpen}
            sx={{ mt: 2 }}
            style={{ backgroundColor: "#5CE7ED", padding: "8px 12px" }}
            variant="contained"
          >
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <AppointmentModal booking={booking} handleBookingClose={handleBookingClose} openBooking={openBooking} date={date}setBookingSuccess={setBookingSuccess}></AppointmentModal>
    </>
  );
};

export default Booking;
