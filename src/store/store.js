import { combineReducers, configureStore } from '@reduxjs/toolkit';
import eventsReducer from './slices/eventsSlice';
import favoritesReducer from './slices/favoriteSlice';
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';
import registrationMiddleware from './middleware/registration/registrationMiddleware';
import authMiddleware from './middleware/authMiddleware';

const rootReducer = combineReducers({
    events: eventsReducer,
    favorite: favoritesReducer,
    user: userReducer,
    auth: authReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            registrationMiddleware,
            authMiddleware,
        ]),
});