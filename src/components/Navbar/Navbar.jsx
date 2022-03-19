import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
    navigate("/");

    setUser(null);
    localStorage.clear();
  }, [navigate, dispatch]);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, user?.token, logout]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link className={classes.brandContainer} to="/">
          <Typography className={classes.header} variant="h4" color="inherit">Booking</Typography>
      </Link>
      <Toolbar className={classes.toolbar}>
        {user && (
          <div className={classes.profile}>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              className={classes.logout}
              variant="contained"
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
