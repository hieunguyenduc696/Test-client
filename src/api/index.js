import axios from 'axios';

const url = 'http://localhost:8000/bookings';

export const fetchBookings = () => axios.get(url);
export const createBooking = (newBooking) => axios.post(url, newBooking);