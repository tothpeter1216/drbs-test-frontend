import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form>
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
    </form>
  );
};

export default LoginForm;
