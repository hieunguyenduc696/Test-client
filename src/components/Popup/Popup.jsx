import React from "react";
import {
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import Form from "../Form/Form";
import { useSelector } from "react-redux";

import useStyles from "./styles";

const Popup = ({
  open,
  handleClose,
  isCreating,
  isApproving,
  isRejecting,
  currentId,
}) => {
  const classes = useStyles();
  const booking = useSelector((state) =>
    state.bookings.find((booking) => booking._id === currentId)
  );

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
          <Form
            isCreating={isCreating}
            isApproving={isApproving}
            isRejecting={isRejecting}
            handleClose={handleClose}
            booking={booking}
            currentId={currentId}
          />
        </div>
      </Fade>
    </Modal>
  );
};

export default Popup;
