import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        list: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            if (!state.list.find((event) => event.id === action.payload.id)) {
                state.list.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            state.list = state.list.filter((event) => event.id !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;