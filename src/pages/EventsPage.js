import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EventsPage() {
    const [events, setEvents] = useState([]);

useEffect(() => {
    fetch("/events.json")
    .then(res => res.json())
    .then(data => setEvents(data))
}, []);

return (
    <div>
        <h1 style={{textAlign: 'center'}}>Мероприятия</h1>
        <ul>
            {events.map(event => (
                <li key={event.id}>
                
                    <Link to={`/events/${event.id}`}><h2>{event.title}</h2></Link>
                    <p>
                        <b>Дата:</b> {new Date(event.date).toLocaleDateString()} <br />
                        <b>Место:</b> {event.location}
                    </p>
                </li>
            ))}
        </ul>
    </div>
);
}

export default EventsPage;