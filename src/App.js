import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Home from "./containers/Home";
import Registration from "./containers/Registration";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState();

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/login",
        {
          username,
          password,
        }
      );
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setUser();
  };

  const handleRegistration = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:3001/api/users", {
        username,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar user={user} />
        <Switch>
          <Route path="/" exact>
            <Home
              handleLogin={handleLogin}
              user={user}
              handleLogout={handleLogout}
            />
          </Route>
          <Route path="/registration" exact>
            <Registration handleRegistration={handleRegistration} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
