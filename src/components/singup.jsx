
import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
function Signup() {
  const Navigate = useNavigate();

  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userdetails) => {
     
        console.log(userdetails);
      Navigate('/login');
      })
      .catch((error) => {
        console.error(error);
        alert("Please enter a valid email and password (at least 6 characters).");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-10">

      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600 text-white text-2xl font-bold mb-4 shadow-lg shadow-indigo-600/20">
            S
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Get started by creating your account today.
          </p>
        </div>

        {/* Signup Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                required
                onChange={(e) => setemail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                required
                minLength={6}
                onChange={(e) => setpassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              <p className="text-xs text-slate-500 mt-2">
                Must be at least 6 characters.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-yellow-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-indigo-600/20"
            >
              Create account
            </button>

          </form>

          {/* Login Link */}
          <div className="mt-7 pt-6 border-t border-slate-800 text-center">
            <p className="text-sm text-slate-400">
              Already have an account?{' '}
              <a
                href="/login"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
              >
                Sign in
              </a>
            </p>
          </div>

        </div>

        <p className="text-center text-xs text-slate-600 mt-6">
          Secure authentication powered by Firebase.
        </p>

      </div>
    </div>
  );
}

export default Signup;
