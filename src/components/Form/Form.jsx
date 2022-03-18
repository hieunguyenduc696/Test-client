import React, { useState } from "react";
import { TextField, Button, Typography, Paper, FormControl, InputLabel, Select } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createBooking } from "../../actions/bookings";

import useStyles from "./styles";

const Form = ({ isCreating, isApproving, isRejecting }) => {
  const classes = useStyles();
  const [bookingsData, setBookingsData] = useState({ type: '', creator: '', location: '', date1: '', date2: '', date3: '' });
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createBooking(bookingsData));
  }

  return (
      <>
        {isCreating && (
          <div className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <InputLabel htmlFor="Wellness Type">Wellness Type</InputLabel>
                <Select native value={bookingsData.type} onChange={(e) => setBookingsData({ ...bookingsData, type: e.target.value })} inputProps={{ name: 'wellnessType', id: 'Wellness Type' }} fullWidth >
                  <option value="Health Talk">Health Talk</option>
                  <option value="Wellness Events">Wellness Events</option>
                  <option value="Fitness Activities">Fitness Activities</option>
                </Select>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={bookingsData.creator} onChange={(e) => setBookingsData({ ...bookingsData, creator: e.target.value })} />
                <TextField name="location" variant="outlined" label="Location" fullWidth value={bookingsData.location} onChange={(e) => setBookingsData({ ...bookingsData, location: e.target.value })} />
                <div className={classes.container}>
                  <TextField id="date" label="Date1" type="date" defaultValue="2017-05-24" className={classes.textField} InputLabelProps={{ shrink: true, }} onChange={(e) => setBookingsData({ ...bookingsData, date1: e.target.value })} />
                  <TextField id="date" label="Date2" type="date" defaultValue="2017-05-24" className={classes.textField} InputLabelProps={{ shrink: true, }} onChange={(e) => setBookingsData({ ...bookingsData, date2: e.target.value })} />
                  <TextField id="date" label="Date3" type="date" defaultValue="2017-05-24" className={classes.textField} InputLabelProps={{ shrink: true, }} onChange={(e) => setBookingsData({ ...bookingsData, date3: e.target.value })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
          </div>
        )}
    </>
  );
};

export default Form;
