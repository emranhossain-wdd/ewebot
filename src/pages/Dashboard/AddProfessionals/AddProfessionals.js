import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./AddProfessionals.css";
const AddProfessionals = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // add new professional to appointment page
  const onSubmit = (data) => {
    fetch(`https://murmuring-citadel-28008.herokuapp.com/addProfessional`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(data);
        if (result.insertedId) {
          Swal.fire("Good job!", "Your professional has been added!");
        } else {
          alert("Try again");
        }
      });

    reset();
  };
  const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Box sx={style}>
      <Typography variant="h6" component="h2">
        ADD PROFESSIONAlS
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          placeholder="Name"
          {...register("name", { required: true })}
          size="small"
        />
        <TextField
          type="text"
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          placeholder="time"
          {...register("time", { required: true })}
          size="small"
        />
        <TextField
          type="text"
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          placeholder="experience"
          {...register("experience", { required: true })}
          size="small"
        />
       
       
        <textarea
         type="text"
          style={{ border: "1px solid gray",height:"90px", width: "90%", marginLeft:"9px",}}
          placeholder="Description1"
          {...register("des1", { required: true })}
        />
        <br />
        <textarea
         type="text"
          style={{ border: "1px solid gray",height:"90px", width: "90%", marginLeft:"9px",}}
          placeholder="Description2"
          {...register("des2", { required: true })}
        />
        <br />
        <TextField
          type="email"
          sx={{ width: "90%", m: 1 }}
          placeholder="Mail"
          id="outlined-size-small"
          {...register("mail", { required: true })}
          size="small"
        />
        <TextField
          type="text"
          sx={{ width: "90%", m: 1 }}
          placeholder="experience"
          id="outlined-size-small"
          {...register("experience", { required: true })}
          size="small"
        />
        <TextField
          type="number"
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          placeholder="Phone"
          {...register("phone", { required: true })}
          size="small"
        />
        <TextField
          type="number"
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          placeholder="Space"
          {...register("space", { required: true })}
          size="small"
        />
        <TextField
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          placeholder="designation"
          size="small"
          {...register("designation", { required: true })}
        />
        <TextField
          type="text"
          placeholder="Add Your Image"
          sx={{ width: "90%", m: 1 }}
          id="outlined-size-small"
          size="small"
          {...register("img", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <Button
          type="submit"
          sx={{ mt: 2, width: "25%", mx: "auto" }}
          style={{ backgroundColor: "#5CE7ED", padding: "8px 12px" }}
          variant="contained"
        >
          SUBMIT
        </Button>
      </form>
    </Box>
  );
};

export default AddProfessionals;
