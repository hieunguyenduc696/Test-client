import * as api from "../api";
import {
  FETCH_ALL,
  FETCH_BY_USERID,
  CREATE,
  DELETE,
  APPROVE,
  REJECT,
} from "../constant/index";

// Action Creators
export const getBookings = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBookings();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getBookingsByUserId = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchBookingsByUserId(id);
    dispatch({ type: FETCH_BY_USERID, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createBooking = (booking) => async (dispatch) => {
  try {
    const { data } = await api.createBooking(booking);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBooking = (id) => async (dispatch) => {
  try {
    await api.cancelBooking(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const approvebooking = (id, confirmedDate) => async (dispatch) => {
  try {
    const { data } = await api.approveBooking(id, confirmedDate);
    dispatch({ type: APPROVE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const rejectbooking = (id, reason) => async (dispatch) => {
  try {
    const { data } = await api.rejectBooking(id, reason);
    dispatch({ type: REJECT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
