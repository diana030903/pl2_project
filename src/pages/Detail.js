import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        fetch("/events.json")
        .then(res => res.json())
        .then(data => {
            const foundEvent = data.find(e => e.id.toString() === id);
            setEvent(foundEvent);
        })
    }, [id]);

    if (!event) return <p>Загрузка...</p>

    return (
        <div style={{textAlign: 'center'}}>
            <h2>{event.title}</h2>
            <p>ID: {event.id}</p>
            <p>Дата: {event.date}</p>
            <p>Место: {event.location}</p>
            {event.image && <img src={event.image} alt={event.title} style={{maxWidth: '300px', borderRadius:'20px'}} />}
        </div>
    );
}

export default Detail;