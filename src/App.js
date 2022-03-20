import React from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "./components/Auth/Auth";
import Bookings from "./components/Bookings/Bookings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}></Route>
      <Route path="/home" element={<Bookings />}></Route>
    </Routes>
  );
};

export default App;
