import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../store/slices/favoriteSlice";

function FavoritePage() {
    const favorites = useSelector(state => state.favorite.list);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Избранные мероприятия</h1>
            {favorites.length === 0 ? (
                <p style={{textAlign: 'center'}}>Нет избранных мероприятий.</p>
            ) : (
                <div>
                    {favorites.map(event => (
                        <div key={event.id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
                            <h2>{event.title}</h2>
                            <button onClick={() => dispatch(removeFavorite(event.id))}>Удалить из избранного</button>
                </div>
            ))}
        </div>
)}
        </div>
    );
}

export default FavoritePage;