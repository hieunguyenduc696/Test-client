import * as api from "../api/index";
import { AUTH } from "../constant/index";

export const signin = (form, navigate, setError) => async (dispatch) => {
  try {
    const { data } = await api.signIn(form);

    dispatch({ type: AUTH, data });

    navigate("/home");
  } catch (error) {
    setError(error.response.data.message);
  }
};

export const signup = (form, navigate, setError) => async (dispatch) => {
  try {
    const { data } = await api.signUp(form);

    dispatch({ type: AUTH, data });

    navigate("/home");
  } catch (error) {
    setError(error.response.data.message);
  }
};
