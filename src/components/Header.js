import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={{padding: '15px', background: '#16A085'}}>
            <nav>
                <Link to="/" style={{margin: '10px', color: 'white'}}>Главная</Link>
                <Link to="/about" style={{margin: '10px', color: 'white'}}>О нас</Link>
                <Link to="/contacts" style={{margin: '10px', color: 'white'}}>Контакты</Link>
                <Link to="/events" style={{margin: '10px', color: 'white'}}>Мероприятия</Link>
                <Link to="/favorites" style={{margin: '10px', color: 'white'}}>Избранное</Link>
            </nav>
        </header>
    );
}
export default Header;