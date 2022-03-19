const reducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        // case "FETCH_BY_ID":
            // return { ...state, booking: action.payload };
        case "FETCH_BY_USERID":
            // return { ...state, bookings: action.payload };
            return action.payload;
        case "CREATE":
            return [...state, action.payload];
            // return { ...state, bookings: [...state.bookings, action.payload] };
        case "DELETE":
            return state.filter(booking => booking._id !== action.payload);
            // return { ...state, bookings: state.bookings.filter(booking => booking._id !== action.payload)};
        case "APPROVE":
        case "REJECT":
            return state.map(booking => booking._id === action.payload._id ? action.payload : booking);
            // return { ...state, bookings: state.bookings.map(booking => booking._id === action.payload._id ? action.payload : booking)};
        default:
            return state;
    }
}

export default reducer;