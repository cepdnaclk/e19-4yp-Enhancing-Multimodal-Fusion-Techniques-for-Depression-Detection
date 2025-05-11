import React, { useState } from 'react';

function Login() {
  const [state, setState] = useState('SignUp');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle authentication logic here
    console.log({ name, email, password });
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="flex flex-col gap-4 w-full max-w-md p-8 border rounded-xl shadow-lg bg-white text-zinc-700">
        <h2 className="text-xl font-semibold">{state === 'SignUp' ? 'Create Account' : 'Login'}</h2>
        <p className="text-sm text-zinc-500 mb-2">
          Please {state === 'SignUp' ? 'sign up' : 'log in'} to book an appointment.
        </p>

        {state === 'SignUp' && (
          <div className="w-full">
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your full name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
        >
          {state === 'SignUp' ? 'Create Account' : 'Login'}
        </button>

        <p className="text-sm text-center text-zinc-500 mt-2">
          {state === 'SignUp' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            className="text-primary cursor-pointer hover:underline"
            onClick={() => setState(state === 'SignUp' ? 'Login' : 'SignUp')}
          >
            {state === 'SignUp' ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </div>
    </form>
  );
}

export default Login;
