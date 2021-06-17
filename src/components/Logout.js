import userEvent from "@testing-library/user-event";
import React from "react";

const Logout = ({ user, handleLogout }) => {
  return (
    <div>
      <h4>Bejelentkezett felhasználó: {userEvent.username}</h4>
      <button onClick={() => handleLogout()}>Kijelentkezés</button>
    </div>
  );
};

export default Logout;
