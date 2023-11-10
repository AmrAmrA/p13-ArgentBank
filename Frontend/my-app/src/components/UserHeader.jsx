import React from "react";
import {useSelector } from 'react-redux';
export default function UserHeader() {
  const user = useSelector((state) => state.auth.user);
  return (
    <header className="header">
      <h1>
        Welcome back
        <br />
        {user.body.firstName} {user.body.lastName}
      </h1>
      <button className="edit-button">Edit Name</button>
    </header>
  );
}