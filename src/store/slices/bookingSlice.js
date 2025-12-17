import { createSlice } from "@reduxjs/toolkit";

const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        list: savedBookings,
    },
    reducers: {
        addBooking: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("bookings", JSON.stringify(state.list));
        },
        removeBooking: (state, action) => {
            state.list.splice(action.payload, 1);
            localStorage.setItem("bookings", JSON.stringify(state.list));
        }
    }
});

export const { addBooking, removeBooking } = bookingSlice.actions;
export default bookingSlice.reducer;