import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { addBooking, removeBooking } from "../store/slices/bookingSlice";

function BookingPage() {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.bookingReducer);
    const [form, setForm] = useState({
        name: "",
        email: "",
        event: "",
        date: "",
        seats: 1,
    })

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [sortType, setSortType] = useState("date");

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        //валидация
        if (!form.name.trim()) {
            setError("Имя не должно быть пустым");
            return;
        }
        if (!form.email.trim() || !form.email.includes("@")) {
            setError("Некорректный email");
            return;
        }
        if (!form.event.trim()) {
            setError("Название события не должно быть пустым");
            return;
        }
        if (!form.date) {
            setError("Дата должна быть выбрана");
            return;
        }
        setError("");

        dispatch(addBooking(form));
        setForm({
            name: "",
            email: "",
            event: "",
            date: "",
            seats: 1,
        });
    }

    const filteredBookings = bookings.list.filter(b =>
        b.name.toLowerCase().includes(search.toLowerCase())
    );

    const sortedBookings = [...filteredBookings].sort((a, b) => {
        if (sortType === "name") {
            return a.name.localeCompare(b.name);
        }
        if (sortType === "date") {
            return new Date(a.date) - new Date(b.date);
        }
        if (sortType === "seats") {
            return a.seats - b.seats;
        }
        return 0;
    });

    return (
        <div style={{padding: "20px"}}>
            <h1>Бронирование билетов</h1>
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px"}}>
                <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={handleChange} />
                <input
                    type="text"
                    name="email"
                    placeholder="Ваш email"
                    value={form.email}
                    onChange={handleChange} />
                <input
                    type="text"
                    name="event"
                    placeholder="Название события"
                    value={form.event}
                    onChange={handleChange} />
                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange} />
                <input
                    type="number"
                    name="seats"
                    placeholder="Количество мест"
                    value={form.seats}
                    onChange={handleChange} />
                {error && (<p style={{color: "red", fontWeight: "bold"}}>{error}</p>)}
                <button type="submit">Забронировать</button>
            </form>

            <h2>Мои бронирования</h2>
            <input
                type="text"
                placeholder="Найти по имени..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{padding: "5px", marginBottom: "10px", width: "300px"}}
            />
            <div style={{margin: "10px 0"}}>
                <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                    <option value="">Без сортировки</option>
                    <option value="name">По имени</option>
                    <option value="date">По дате</option>
                    <option value="seats">По количеству гостей</option>
                </select>
            </div>
            <ul>
    {sortedBookings.map((booking, index) => (
        <li
            key={index}
            style={{
                marginBottom: "10px",
                listStyle: "none",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                maxWidth: "400px"
            }}
        >
            {booking.name} - {booking.event} - {booking.date} - {booking.seats}

            <button
                onClick={() => dispatch(removeBooking(index))}
                style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer"
                }}
            >
                Удалить
            </button>
        </li>
    ))}
</ul>

        </div>
    );
}

export default BookingPage;