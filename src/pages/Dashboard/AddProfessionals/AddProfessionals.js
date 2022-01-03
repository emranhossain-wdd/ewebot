import React, { useState } from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddProfessionals = ({
  openBooking,
  handleBookingClose,

  date,
  setBookingSuccess,
}) => {
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [appointmentInfo, setAppointmentInfo] = useState(initialInfo);
  // const { name, time } = booking;
  const name = user?.displayName;
  const time = "january";
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newAppointmentData = { ...appointmentInfo };
    newAppointmentData[field] = value;

    setAppointmentInfo(newAppointmentData);
  };
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // collect
    const appointment = {
      ...appointmentInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    console.log(appointment);
    // send to the server
    fetch("https://murmuring-citadel-28008.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleBookingSubmit}>
        <TextField
          disabled
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
        <TextField
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          name="patientName"
          onBlur={handleOnBlur}
          defaultValue={user.displayName}
          size="small"
        />
        <TextField
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          name="email"
          onBlur={handleOnBlur}
          defaultValue={user.email}
          size="small"
        />
        <TextField
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          name="phone"
          onBlur={handleOnBlur}
          defaultValue="your phone number"
          size="small"
        />
        <TextField
          disabled
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
        />
        <Button
          type="submit"
          sx={{ mt: 2, width: "25%", mx: "auto" }}
          style={{ backgroundColor: "#5CE7ED", padding: "8px 12px" }}
          variant="contained"
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default AddProfessionals;
