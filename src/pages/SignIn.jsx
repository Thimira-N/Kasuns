import React from 'react';

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EAE0D5] to-[#C6AC8E]">
      <div className="w-full max-w-md bg-[#0A0908] text-[#EAE0D5] rounded-lg shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wide">Welcome Back</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-[#22333B] text-[#EAE0D5] border border-[#5E503F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] shadow-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-[#22333B] text-[#EAE0D5] border border-[#5E503F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] shadow-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-center bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] text-[#0A0908] font-bold rounded-lg hover:scale-105 transform transition focus:outline-none"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between items-center mt-6">
          <a
            href="#"
            className="text-sm text-[#C6AC8E] hover:underline transition"
          >
            Forgot Password?
          </a>
          <p className="text-sm">
            Don't have an account?{' '}
            <a href="/signup" className="text-[#C6AC8E] font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
