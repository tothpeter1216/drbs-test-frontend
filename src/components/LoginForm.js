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
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        value={username}
        id=""
        onChange={handleUsernameChange}
      />
      <label htmlFor="password">Password: </label>
      <input
        type="text"
        name="password"
        value={password}
        id=""
        onChange={handlePasswordChange}
      />
      <button type="submit">Bejelentkezés</button>
    </form>
  );
};

export default LoginForm;
