import React from 'react';

export default function ConnectionFields({
  email,
  onEmailChange,
  password,
  onPasswordChange,
}) {
  const formFields = [
    {
      className: "input-wrapper",
      label: "Email",
      type: "email",
      id: "email",
      value: email,
      onChange: onEmailChange,
    },
    {
      className: "input-wrapper",
      label: "Password",
      type: "password",
      id: "password",
      value: password,
      onChange: onPasswordChange,
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
        onChange={item.onChange}
        {...(item.type === 'checkbox' ? { checked: item.value } : {})}
      />
    </div>
  ));
}
