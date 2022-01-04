import React, { useState, useEffect } from "react";
import useAuth from "./../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Appointments = ({ date }) => {
  const { user } = useAuth();
  
  const [control, setControl] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const url = `https://murmuring-citadel-28008.herokuapp.com/appointments?email=${user.email}&date=${date}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [date,control, appointments]);
 // delete appointment from my appointment
 const handleDelete = (id) => {
  const proceed = window.confirm("Are you sure, u want to delete it?");
  if (proceed) {
    fetch(`https://murmuring-citadel-28008.herokuapp.com/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(true);
        
          alert("Deleted successfully");
        }
      });
  }
};
  return (
    <div>
      <h2>Appointments: {appointments.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Professional Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.professionalName}</TableCell>
                <TableCell style={{paddingLeft:"20px", width:"40px",backgroundColor:"#138b62",fontWeight:"bold",borderRadius:"8px" }} align="right">{row.status}</TableCell>
                <TableCell  style={{paddingLeft:"20px", width:"40px",backgroundColor:"red",fontWeight:"bold",borderRadius:"8px" }}  onClick={() => handleDelete(row?._id)}
                    className=" my-1 mx-auto  " >Delete</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;
