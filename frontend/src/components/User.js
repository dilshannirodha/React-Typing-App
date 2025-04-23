import React, { useState, useEffect } from 'react';

const User = ({ isUserDropdownOpen }) => {
  const [view, setView] = useState('menu'); // 'menu' | 'signin' | 'signup'
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) setIsLoggedIn(true);
  }, []);

  const handleLogin = async () => {
    try {
      setMessage('');
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful!');
        localStorage.setItem('email', data.email);
        setIsLoggedIn(true);
        setView('menu');
      } else {
        setMessage(data.message || 'Login failed.');
      }
    } catch (error) {
      setMessage('Error logging in.');
      console.error(error);
    }
  };

  const handleRegister = async () => {
    try {
      setMessage('');
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Registration successful!');
        setView('menu');
      } else {
        setMessage(data.message || 'Registration failed.');
      }
    } catch (error) {
      setMessage('Error registering.');
      console.error(error);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    setView('menu');
  };

  const renderContent = () => {
    switch (view) {
      case 'signin':
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />
            <button onClick={handleLogin} className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
            {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
            <button className="mt-2 text-sm text-blue-500" onClick={() => setView('menu')}>← Back to Menu</button>
          </div>
        );
      case 'signup':
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-2 border rounded"
            />
            <button onClick={handleRegister} className="w-full bg-green-600 text-white p-2 rounded">Register</button>
            {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
            <button className="mt-2 text-sm text-blue-500" onClick={() => setView('menu')}>← Back to Menu</button>
          </div>
        );
      default:
        return (
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#dash" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            {!isLoggedIn ? (
              <>
                <li>
                  <button
                    onClick={() => setView('signin')}
                    className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setView('signup')}
                    className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={handleSignOut}
                  className="flex items-center w-full p-2 text-red-600 rounded-lg hover:bg-red-100 dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                </button>
              </li>
            )}
          </ul>
        );
    }
  };

  return (
    <div>
      <div
        id="drawer-navigation"
        className={`fixed top-30 right-0 z-60 h-screen p-4 border border-gray-200 overflow-y-auto transition-transform ${
          isUserDropdownOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-white w-64 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Menu
        </h5>
        <div className="py-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default User;
