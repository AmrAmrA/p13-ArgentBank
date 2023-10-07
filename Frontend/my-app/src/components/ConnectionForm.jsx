import React from 'react'
import { handleSubmit } from '../utils/Handlesubmit';
import ConnectionFields from './ConnectionFields';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


export default function ConnectionForm() {
  const [email, setEmail]  = useState("");
  const [password, setPassword]  = useState("");
  const [error, setError] = useState(null)
return (
    <main className="main bg-dark">
      <section className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(email, password, setError);
        }}>
          <ConnectionFields email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} setError={setError} />
            <button className="sign-in-button" type="submit">Sign In</button>
        </form>
      </section>
    </main>
  )
}
