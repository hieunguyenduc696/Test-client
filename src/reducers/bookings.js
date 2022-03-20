import { FETCH_ALL, FETCH_BY_USERID, CREATE, DELETE, APPROVE, REJECT } from "../constant/index";

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_BY_USERID:
      return action.payload;
    case CREATE:
      return [action.payload, ...state];
    case DELETE:
      return state.filter((booking) => booking._id !== action.payload);
    case APPROVE:
    case REJECT:
      return state.map((booking) =>
        booking._id === action.payload._id ? action.payload : booking
      );
    default:
      return state;
  }
};

export default reducer;
