import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

import Popup from "../Popup/Popup";
import { columns } from "./data";

import useStyles from "./styles";

const StickyHeadTable = ({
  bookings,
  cancelBooking,
  isAdmin,
}) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false); // state of pop up menu
  const [currentId, setCurrentId] = useState(null);

  const [isApproving, setIsApproving] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsApproving(false);
    setIsRejecting(false);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const approveBookingHandler = (id) => {
    setCurrentId(id);
    setIsApproving(true);
    handleOpen();
  };

  const rejectBookingHandler = (id) => {
    setCurrentId(id);
    setIsRejecting(true);
    handleOpen();
  };

  return (
    <>
      <Paper className={classes.root}>
        <Popup
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          isApproving={isApproving}
          isRejecting={isRejecting}
          currentId={currentId}
        />
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                    align="center"
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((booking, id) => (
                  <TableRow key={id}>
                    <TableCell component="th" scope="row" align="center">
                      {booking.name}
                    </TableCell>
                    <TableCell align="center">{booking.type}</TableCell>
                    <TableCell align="center">{booking.location}</TableCell>
                    <TableCell align="center">{booking.date[0]}</TableCell>
                    <TableCell align="center">{booking.date[1]}</TableCell>
                    <TableCell align="center">{booking.date[2]}</TableCell>
                    <TableCell align="center">
                      {booking.confirmedDate}
                    </TableCell>
                    <TableCell align="center">
                      <span className={`${classes.status} ${booking.status}`}>
                        {booking.status}
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      {!isAdmin && booking.status === "Pending" && (
                        <span
                          className={`${classes.action} ${classes.Cancel}`}
                          onClick={() => cancelBooking(booking._id)}
                        >
                          Cancel
                        </span>
                      )}
                      {isAdmin && booking.status === "Pending" && (
                        <span
                          className={`${classes.action} ${classes.Approved}`}
                          onClick={() => approveBookingHandler(booking._id)}
                          style={{ marginRight: "10px" }}
                        >
                          Approved
                        </span>
                      )}
                      {isAdmin && booking.status === "Pending" && (
                        <span
                          className={`${classes.action} ${classes.Rejected}`}
                          onClick={() => rejectBookingHandler(booking._id)}
                        >
                          Reject
                        </span>
                      )}
                    </TableCell>
                    <TableCell align="center">{booking.reason}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={bookings.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default StickyHeadTable;
