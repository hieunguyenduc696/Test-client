import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// admin route
export const fetchBookings = () => API.get("/bookings");
export const approveBooking = (id, confirmedDate) => API.patch(`/bookings/${id}/approve`, { confirmedDate });
export const rejectBooking = (id, reason) => API.patch(`/bookings/${id}/reject`, { reason });

// hr routes
export const fetchBookingsByUserId = (id) => API.get(`/bookings/${id}`);
export const createBooking = (newBooking) => API.post("/bookings", newBooking);
export const cancelBooking = (id) => API.delete(`/bookings/${id}`)

// auth routes
export const signIn = (form) => API.post("/users/signin", form);
export const signUp = (form) => API.post("/users/signup", form);
