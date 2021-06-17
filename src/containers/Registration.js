import React, { useState } from "react";

const Registration = ({ handleRegistration }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    console.log("registration", username, password);
    handleRegistration(username, password);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
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
  );
};

export default Registration;
