import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // version 5.2.0

const Registration = ({ handleRegistration }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    handleRegistration(username, password);
    history.push("/");
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>Regisztráció</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <label htmlFor="username">Felhasználónév: </label>
        <input
          type="text"
          name="username"
          value={username}
          id=""
          onChange={handleUsernameChange}
        />
        <label htmlFor="password">Jelszó: </label>
        <input
          type="text"
          name="password"
          value={password}
          id=""
          onChange={handlePasswordChange}
        />
        <button type="submit">Regisztráció</button>
      </form>
    </div>
  );
};

export default Registration;
