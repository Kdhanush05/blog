
import { useState } from 'react';
import { useEffect } from 'react';

import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
  




function Login() {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const Navigate = useNavigate();
  
   useEffect(() =>
   {
    
    auth.onAuthStateChanged((user)=>{
    if(user){
      Navigate('/dashboard');
    }
    else{
      Navigate('/login');
    }
  })
},[]);
   
  


   

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      
        console.log(userCredential);
        Navigate('/dashboard');
      })
      .catch((error) => {
        console.error(error);
        alert("Invalid email or password. Please try again.");
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
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Sign in to continue to your account.
          </p>

        </div>

        {/* Login Card */}
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
                placeholder="Enter your password"
                required
                onChange={(e) => setpassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 outline-none transition duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-yellow-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-indigo-600/20"
            >
              login in
            </button>

          </form>

          {/* Signup Link */}
          <div className="mt-7 pt-6 border-t border-slate-800 text-center">

            <p className="text-sm text-slate-400">
              Don't have an account?{' '}

              <Link
                to="/signup"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
              >
                Create account
              </Link>

            </p>

          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-600 mt-6">
          Secure authentication powered by Firebase.
        </p>

      </div>

    </div>
  );
}

export default Login;
