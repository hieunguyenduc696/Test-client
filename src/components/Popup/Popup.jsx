import React, { useState } from "react";
import { Modal, Backdrop, Fade, Typography, TextField, Button } from "@material-ui/core";
import Form from "../Form/Form";

import useStyles from './styles';

const Popup = ({ open, handleOpen, handleClose }) => {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography variant="h4" color="primary">Creating Booking</Typography>
          <Form isCreating={true} />
        </div>
      </Fade>
    </Modal>
  );
};

export default Popup;
