import React, { useEffect, useState } from "react";

function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', margin: '20px'}}>
      {events.map((event) => (
        <div key={event.id} style={{
          border: '1px solid #ddd',
          borderRadius: '12px',
          padding: '10px',
          width: '250px',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s'}}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
          <img src={event.image} alt={event.title} style={{width: '100%', borderRadius: '10px'}} />
          <h3>{event.title}</h3>
          <p><b>Дата:</b> {event.date}</p>
          <p><b>Место:</b> {event.location}</p>
        </div>
      ))
    }
    </div>
  );
}

export default EventsList;