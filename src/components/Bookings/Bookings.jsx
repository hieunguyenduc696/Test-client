import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  CircularProgress,
  Button,
  Typography,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  getBookings,
  getBookingsByUserId,
  deleteBooking,
  approvebooking,
  rejectbooking,
} from "../../actions/bookings";

import Navbar from "../Navbar/Navbar";
import Popup from "../Popup/Popup";
import Table from "../Table/Table";

import useStyles from "./styles";

const Bookings = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  let bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));
  const isAdmin = user?.result?.role === 1;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cancelBookingHandler = (id) => {
    dispatch(deleteBooking(id));
  };

  const approveBookingHandler = (id) => {
    dispatch(approvebooking(id));
  };

  const rejectBookingHandler = (id) => {
    dispatch(rejectbooking(id));
  };

  useEffect(() => {
    if (!isAdmin) { // Company HR can just see their own bookings
      dispatch(getBookingsByUserId(user?.result?._id));
    } else {
      // admin will be able to see all the bookings
      dispatch(getBookings());
    }
  }, [dispatch, isAdmin, user?.result?._id]);

  if (!bookings) {
    return <CircularProgress />;
  }

  if (bookings.length === 0 && isAdmin) {
    return (
      <div className={classes.container}>
        <Navbar />
        <Typography variant="h4" color="primary">
          No booking found.
        </Typography>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <CssBaseline />
      <Navbar />
      <div className={classes.actions}>
        {bookings?.length === 0 && (
          <Typography variant="h4" color="primary">
            No booking found.
          </Typography>
        )}
        {!isAdmin && (
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="button"
            onClick={handleOpen}
            className={classes.addButton}
          >
            Create Booking
          </Button>
        )}
        <Popup
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          isCreating
        />
      </div>
      {bookings?.length !== 0 && (
        <Table
          bookings={bookings && bookings}
          cancelBooking={cancelBookingHandler}
          approveBooking={approveBookingHandler}
          rejectBooking={rejectBookingHandler}
          isAdmin={isAdmin}
        />
      )}
    </div>
  );
};

export default Bookings;
