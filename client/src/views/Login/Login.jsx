import React, { useState } from "react";
import "../Login/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <div className="login-container">
      <div className="title-User">
        <a href="/home">
          <img
            src="https://peluditosconfuturo.org/wp-content/uploads/2015/01/logo2.png"
            alt="log"
          />
        </a>
        <h1>Ingresar</h1>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
