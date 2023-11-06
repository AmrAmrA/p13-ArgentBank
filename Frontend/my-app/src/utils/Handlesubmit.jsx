import React from "react";
import  { loginUser } from './LoginUser';
export const HandleSubmit = async (email, password, setError, navigate ) => {
  try {
    const data = await loginUser(email, password);
    console.log("You are logged in");
    navigate("/User");

  } catch (error) {
    setError(error.message);
  }
};
