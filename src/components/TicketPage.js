import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { fetchTickets, bookTicket } from "../store/slices/ticketsSlice";

export default function TicketPage() {
  const dispatch = useDispatch();
  const { items = [], loading, booking, error } = useSelector((state) => state.tickets ?? {});

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  if (loading) return <p>Загрузка билетов...</p>;
  if (error) return <p>Error: {error}</p>;

  const tickets = items.filter(Boolean);

  return (
    <div style={{padding: "20px"}}>
      <h1>Доступные билеты</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id} style={{
            marginBottom: "10px",
            listStyle: "none",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            maxWidth: "400px",
            background: ticket.booked ? "#d4edda" : "#f8f9fa"
          }}>
            <span>{ticket.title}</span>
            <p>{ ticket?.title?.slice(0, 50) ?? "" }...</p>

            <button
              onClick={() => dispatch(bookTicket(ticket.id))}
              disabled={ticket.booked || booking}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: ticket.booked ? "#28a745" : "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "3px",
                cursor: ticket.booked ? "not-allowed" : "pointer"
              }}>
              {ticket.booked ? "Забронирован" : booking ? "Бронирование..." : "Забронировать"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}