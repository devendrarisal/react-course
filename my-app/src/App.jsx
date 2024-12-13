// Import dependencies
import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">facebook</h1>
        <p className="text-lg text-gray-700">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Email address or phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4 text-wrap">
          <a href="/forgot-password" className="text-blue-500 text-sm hover:underline">
            Forgotten password?
          </a>
        </div>
        <hr className="my-6" />
        <div className="text-center">
          <button
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Create New Account
          </button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <a href="/create-page" className="text-sm text-gray-700 hover:underline">
          Create a Page for a celebrity, band or business.
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
