import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EventsList from "./components/EventsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsPage from "./pages/EventsPage";
import Detail from "./pages/Detail";
import FavoritePage from "./pages/FavoritePage";

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
                <Route path="/events" element={<EventsPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;