import React from "react";

export default function ConnectionFields({
  email,
  setEmail,
  password,
  setPassword,
}) {
  const formFields = [
    {
      className: "input-wrapper",
      label: "email",
      type: "email",
      id: "email",
      value: email,
      setValue: setEmail,
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

  return formFields.map((item, index) => (
    <div className={item.className} key={index}>
      <label htmlFor={item.id}>{item.label}</label>
      <input
        type={item.type}
        id={item.id}
        value={item.value}
        onChange={
          item.setValue ? (e) => item.setValue(e.target.value) : undefined
        }
      />
    </div>
  ));
}
