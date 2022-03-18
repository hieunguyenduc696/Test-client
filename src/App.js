import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBookings } from "./actions/bookings";

import Auth from "./components/Auth/Auth";
import Bookings from './components/Bookings/Bookings';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Auth />}></Route>
      <Route path="/home" element={<Bookings />}></Route>
    </Routes>
  );
};

export default App;
