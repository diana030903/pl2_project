import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EventsList from "./components/EventsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage";
import Detail from "./pages/Detail";
import FavoritePage from "./pages/FavoritePage";
import RegistrationPage from "./pages/RegistrationPage";
import Login from "./pages/Login";
import Users from "./pages/Users";
import TicketPage from "./components/TicketPage";
import BookingPage from "./pages/BookingPage";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/events/:id" element={<Detail />} />
                <Route path="/" element={
                    <div>
                        <HomePage />
                        <EventsList />
                    </div>
                } />
                <Route path="/favorites" element={<FavoritePage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<Users />} />
                <Route path="/tickets" element={<TicketPage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;