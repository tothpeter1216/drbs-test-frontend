import React, { useState } from "react";

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h1>Bejelentkezés</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Felhasználónév: </label>
        <input
          type="text"
          name="username"
          value={username}
          id=""
          onChange={handleUsernameChange}
          required
        />
        <label htmlFor="password">Jelszó: </label>
        <input
          type="text"
          name="password"
          value={password}
          id=""
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Bejelentkezés</button>
      </form>
    </div>
  );
};

export default LoginForm;
