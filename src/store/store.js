import { combineReducers, configureStore } from '@reduxjs/toolkit';
import eventsReducer from './slices/eventsSlice';
import favoritesReducer from './slices/favoriteSlice';

const rootReducer = combineReducers({
    events: eventsReducer,
    favorite: favoritesReducer,
});

export const store = configureStore({
    reducer: rootReducer,
})