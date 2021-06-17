import React from "react";

const Logout = ({ user, handleLogout }) => {
  return (
    <div>
      <h4>Bejelentkezett felhasználó: {user.username}</h4>
      <button onClick={() => handleLogout()}>Kijelentkezés</button>
    </div>
  );
};

export default Logout;
