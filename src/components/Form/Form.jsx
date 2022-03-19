import React, { useState } from "react";
import { CircularProgress, TextField, Button, Typography, InputLabel, Select, Radio, RadioGroup, FormControlLabel, FormLabel } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createBooking, approvebooking, rejectbooking } from "../../actions/bookings";

import useStyles from "./styles";

const Form = ({ isCreating, isApproving, isRejecting, handleClose, booking, currentId }) => {
  const classes = useStyles();
  const [bookingsData, setBookingsData] = useState({ type: '', location: '', date1: '', date2: '', date3: '' });
  const [confirmedDate, setConfirmedDate] = useState('');
  const [reason, setReason] = useState('');
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isCreating) {
      dispatch(createBooking({ ...bookingsData, name: user?.result?.name }));
    } else if (isApproving) {
      dispatch(approvebooking(currentId, confirmedDate));
    } else if (isRejecting) {
      dispatch(rejectbooking(currentId, reason));
    }
    handleClose();
  }

  return (
      <>
        {isCreating && (
          <div className={classes.paper}>
            <Typography variant="h4" color="primary">Creating Booking</Typography>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <div className={classes.type}>
                  <InputLabel htmlFor="Wellness Type">Wellness Type</InputLabel>
                  <Select native value={bookingsData.type} onChange={(e) => setBookingsData({ ...bookingsData, type: e.target.value })} inputProps={{ name: 'wellnessType', id: 'Wellness Type' }} fullWidth >
                    <option value="">Select Wellness Type</option>
                    <option value="Health Talk">Health Talk</option>
                    <option value="Wellness Events">Wellness Events</option>
                    <option value="Fitness Activities">Fitness Activities</option>
                  </Select>
                </div>
                <TextField name="location" variant="outlined" label="Location" fullWidth value={bookingsData.location} onChange={(e) => setBookingsData({ ...bookingsData, location: e.target.value })} />
                <div className={classes.container}>
                  <TextField id="date" label="Date1" type="date" defaultValue="" className={classes.textField} InputLabelProps={{ shrink: true, }} onChange={(e) => setBookingsData({ ...bookingsData, date1: e.target.value })} />
                  <TextField id="date" label="Date2" type="date" defaultValue="" className={classes.textField} InputLabelProps={{ shrink: true, }} onChange={(e) => setBookingsData({ ...bookingsData, date2: e.target.value })} />
                  <TextField id="date" label="Date3" type="date" defaultValue="" className={classes.textField} InputLabelProps={{ shrink: true, }} onChange={(e) => setBookingsData({ ...bookingsData, date3: e.target.value })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth disabled={Object.values(bookingsData).indexOf('') !== -1}>Submit</Button>
            </form>
          </div>
        )}
        {isApproving && (
          <>
            {!booking ? (
              <CircularProgress />
            ) : (
              <form onSubmit={handleSubmit}>
                <FormLabel id="demo-radio-buttons-group-label">Proposed DateTime</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="date1"
                  name="radio-buttons-group"
                  onChange={(e) => setConfirmedDate(e.target.value)}
                >
                  <FormControlLabel value={booking?.date[0]} control={<Radio />} label={booking?.date[0]} />
                  <FormControlLabel value={booking?.date[1]} control={<Radio />} label={booking?.date[1]} />
                  <FormControlLabel value={booking?.date[2]} control={<Radio />} label={booking?.date[2]} />
                </RadioGroup>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" disabled={!confirmedDate.length}>Approve</Button>
              </form>
            )}
          </>
        )}
        {isRejecting && (
          <>
          {!booking ? (
            <CircularProgress />
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField name="rejection reason" variant="outlined" label="Rejection Reason" fullWidth value={reason} onChange={(e) => setReason(e.target.value)} />
              <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" disabled={!reason.length}>Reject</Button>
            </form>
          )}
        </>
        )}
    </>
  );
};

export default Form;
