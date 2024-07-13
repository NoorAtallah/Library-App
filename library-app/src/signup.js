import React, { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const [isRegistered, setIsRegistered] = useState(localStorage.getItem('user') !== null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    setIsRegistered(true);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {!isRegistered ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleInputChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <p>Welcome, {JSON.parse(localStorage.getItem('user')).username}!</p>
      )}
    </div>
  );
};

export default Signup;
