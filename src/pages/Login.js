import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/authSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(login({ username }));
      navigate("/users");
    }
  };

    return (
        <div style={{ textAlign: "center", marginTop: "100px"}}>
            <h2>Авторизация</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Введите имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}