import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser,fetchUserProfile ,setEmail, setPassword, setError} from '../features/auth/authSlice';
import ConnectionFields from './ConnectionFields';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function ConnectionForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, error, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate('/user');
    }
  }, [user, error, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password, navigate }))
    .then(({ payload }) => dispatch(fetchUserProfile(payload.body.token)));
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <ConnectionFields
            email={email}
            onEmailChange={(e) => dispatch(setEmail(e.target.value))}
            password={password}
            onPasswordChange={(e) => dispatch(setPassword(e.target.value))}
            error={error}
            onErrorSet={(error) => dispatch(setError(error))}
          />
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}