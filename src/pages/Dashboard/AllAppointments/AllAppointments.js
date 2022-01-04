import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const AllAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [control, setControl] = useState(false);
  // get all orders
  useEffect(() => {
    fetch("https://murmuring-citadel-28008.herokuapp.com/allAppointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [control, appointments]);
  //Handle Status
  const handleApprove = (id) => {
    setControl(false);
    const proceed = window.confirm(
      "Want to Status Done the appointment from Status Pending??"
    );
    if (proceed) {
      axios
        .put(
          `https://murmuring-citadel-28008.herokuapp.com/appointmentUpdateFromPending/${id}`
        )
        .then((result) => {
          if (result.data.modifiedCount) {
            setControl(true);
            alert("updated successfully!!");
          }
        });
    }
  };
  // delete users order
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, u want to delete it?");
    if (proceed) {
      fetch(
        `https://murmuring-citadel-28008.herokuapp.com/DeleteFromAllAppointments/${id}`,
        {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        }
      )
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
              <TableCell align="right">Update Status</TableCell>
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
                <TableCell
                  onClick={() => handleApprove(row._id)}
                  style={{
                    paddingLeft: "20px",
                    width: "40px",
                    backgroundColor: "#138b62",
                    fontWeight: "bold",
                    borderRadius: "8px",
                  }}
                  align="right"
                >
                  {row.status}
                </TableCell>

                <TableCell
                  style={{
                    paddingLeft: "20px",
                    width: "40px",
                    backgroundColor: "red",
                    fontWeight: "bold",
                    borderRadius: "8px",
                  }}
                  onClick={() => handleDelete(row?._id)}
                  className=" my-1 mx-auto  "
                >
                  Delete
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllAppointments;
