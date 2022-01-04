import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import logo from '../../../images/ewebot.png'

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar style={{ backgroundColor: "#3b3663" }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <div className="flex items-center py-2">
              <img className="w-16" src={logo} alt="" />
              <span className="font-bold text-3xl ml-2 tracking-widest">ewebot</span>
            </div>
          </Typography>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/"
          >
            <Button color="inherit">Home</Button>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/appointment"
          >
            <Button color="inherit">Appointment</Button>
          </Link>
          {user?.email ? (
            <Box>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/dashboard"
              >
                <Button color="inherit">Dashboard</Button>
              </NavLink>
              <Button onClick={logout} color="inherit">
                Logout
              </Button>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
