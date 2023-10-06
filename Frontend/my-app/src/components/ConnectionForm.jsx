import React from 'react'

export default function ConnectionForm() {
    const configForm = [
        {
            className : "input-wrapper",
            label : "Username",
            type : "text",
            id : "username"

        }, 
        {
            className : "input-wrapper",
            label : "Password",
            type : "password",
            id : "password"
        },
        {
            className : "input-remember",
            label : "Remember me",
            type : "checkbox",
            id : "remember-me"
        }
        
    ]
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
            {configForm.map((item, index) => (
                <div className={item.className} key={index}>
                    <label htmlFor={item.id}>{item.label}</label>
                    <input type={item.type} id={item.id} />
                </div>
            ))}
            <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  )
}
