import React, { useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Button } from "@material-ui/core";
import { columns, rows } from './data';
import Popup from '../Popup/Popup';

import useStyles from "./styles";


const StickyHeadTable = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  
  const handleChangePage = (event, newPage) => setPage(newPage);
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={classes.actions}>
        <Button variant="contained" size="large" color="primary" type="button" onClick={handleOpen} className={classes.addButton}>Create Booking</Button>
        <Popup open={open} handleOpen={handleOpen} handleClose={handleClose}/>
      </div>
      <Paper className={classes.root}>
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
              {rows.map((row, id) => (
                  <TableRow key={id}>
                      <TableCell component="th" scope="row" align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">{row.location}</TableCell>
                      <TableCell align="center">{row.date1}</TableCell>
                      <TableCell align="center">{row.date2}</TableCell>
                      <TableCell align="center">{row.date3}</TableCell>
                      <TableCell align="center">
                        <span className={`${classes.status} ${row.status}`}>{row.status}</span>
                      </TableCell>
                  </TableRow>
              ))}
              </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

export default StickyHeadTable;