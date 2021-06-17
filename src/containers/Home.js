import React from "react";
import LoginForm from "../components/LoginForm";
import Logout from "./components/Logout";
import SecretContents from "../components/SecretContents";

const Home = ({ handleLogin, user }) => {
  return (
    <div>
      {!user && <LoginForm handleLogin={handleLogin} />}
      <Logout />
      {user && <SecretContents />}
    </div>
  );
};

export default Home;
