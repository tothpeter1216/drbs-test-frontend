import React from "react";
import LoginForm from "../components/LoginForm";
import Logout from "../components/Logout";
import SecretContents from "../components/SecretContents";

const Home = ({ handleLogin, user, handleLogout }) => {
  return (
    <div>
      {!user && <LoginForm handleLogin={handleLogin} />}
      {user && <Logout user={user} handleLogout={handleLogout} />}
      {user && <SecretContents />}
    </div>
  );
};

export default Home;
