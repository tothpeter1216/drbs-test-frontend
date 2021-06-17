import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Home from "./containers/Home";
import Registration from "./containers/Registration";

function App() {
  const [user, setUser] = useState();

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      console.log("login", username, password);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setUser();
  };

  const handleRegistration = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:3001/users", {
        username,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Home handleLogin={handleLogin} user={user} handleLogout={handleLogout} />
      <Registration handleRegistration={handleRegistration} />
    </div>
  );
}

export default App;
