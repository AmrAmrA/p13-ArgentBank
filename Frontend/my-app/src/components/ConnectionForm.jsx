import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

export default function ConnectionForm() {
const [userName, setUserName] = useState("");
const [password, setPassword]   = useState("");

const formFields = [
  {
    className: "input-wrapper",
    label: "Username",
    type: "text",
    id: "username",
    value: userName,
    setValue: setUserName,
  },
  {
    className: "input-wrapper",
    label: "Password",
    type: "password",
    id: "password",
    value: password,
    setValue: setPassword,
  },
  {
    className: "input-remember",
    label: "Remember me",
    type: "checkbox",
    id: "remember-me",
  },
];
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form>
            {formFields.map((item, index) => (
                <div className={item.className} key={index}>
                    <label htmlFor={item.id}>{item.label}</label>
                    <input type={item.type} id={item.id} 
                    onChange={(e) => item.setValue(e.target.value)}
                    />
                </div>
            ))}
            {console.log(userName, password)}
            <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  )
}
