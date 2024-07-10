import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(localStorage.getItem('user') ? true : false);

  const handleSignUp = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ username, password }));
    setRegistered(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setRegistered(false);
  };

  return (
    <div>
      {registered ? (
        <div>
          <h1>Welcome, {JSON.parse(localStorage.getItem('user')).username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSignUp}>
          <h1>Sign Up</h1>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default SignUp;
