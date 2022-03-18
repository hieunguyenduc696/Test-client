import React from "react";
import { CssBaseline } from "@material-ui/core";
import { useSelector } from "react-redux";

import Table from "../Table/Table";

import useStyles from "./styles";

const Bookings = () => {
  const bookings = useSelector((state) => state.bookings);

  console.log(bookings);
  return (
    <>
      <CssBaseline />
      <Table />
    </>
  );
};

export default Bookings;
