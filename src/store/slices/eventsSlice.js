import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
    const res = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
    return await res.json();
});

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export default eventsSlice.reducer;