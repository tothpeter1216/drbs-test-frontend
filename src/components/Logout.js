import React from "react";

const Logout = ({ user, handleLogout }) => {
  return (
    <div>
      <h4>Üdv, {user.user}!</h4>
      <button onClick={() => handleLogout()}>Kijelentkezés</button>
    </div>
  );
};

export default Logout;
