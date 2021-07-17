import React from "react";
import "./../Container/styles.css";

function UserCard({ user }) {
  return (
    <div className="userCard">
      <h3>{user.name}</h3>
      <h4>{user.lastName}</h4>
      <h6>{user.email}</h6>
    </div>
  );
}

export default UserCard;
