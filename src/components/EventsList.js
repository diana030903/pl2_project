import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/slices/favoriteSlice";

function EventsList() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.list);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        margin: '20px'
      }}
    >
      {events.map((event) => {
        const isFav = favorites.some((fav) => fav.id === event.id);
        return (
          <div
            key={event.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '10px',
              width: '250px',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={event.image}
              alt={event.title}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%'
            }}
            >{event.title}</h3>
            <p><b>Дата:</b> {event.date}</p>
            <p><b>Место:</b> {event.location}</p>
            <button
              onClick={() =>
                isFav
                  ? dispatch(removeFavorite(event.id))
                  : dispatch(addFavorite(event))
              }
            >
              {isFav ? "Удалить из избранного" : "Добавить в избранное"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default EventsList;