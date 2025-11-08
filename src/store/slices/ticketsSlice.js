import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTickets = createAsyncThunk("tickets/fetchTickets", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums?_limit=10");
    return await res.json()
})

export const bookTicket = createAsyncThunk("tickets/bookTicket", async (ticketId)=>{
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return ticketId;
})

const ticketsSlice = createSlice({
    name: "tickets",
    initialState: {
        items: [],
        loading: false,
        booking: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTickets.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTickets.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.map((t)=> ({...t, booked: false}));
            })
            .addCase(fetchTickets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(bookTicket.pending, (state) => {
                state.booking = true;
            })
            .addCase(bookTicket.fulfilled, (state, action) => {
                state.booking = false;
                const ticket = state.items.find((t) => t.id === action.payload);
                if (ticket) {
                    ticket.booked = true;
                }
            })
            .addCase(bookTicket.rejected, (state, action) => {
                state.booking = false;
                state.error = action.error.message;
            });
        }
    })

export default ticketsSlice.reducer;