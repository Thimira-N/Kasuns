import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig'; // Import Firebase auth and db
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const SignUp = () => {
  // State variables for form inputs and errors
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Validation checks
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }

    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user details to Firestore database
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        fullName: fullName,
        email: email,
        password: password,
        createdAt: serverTimestamp(),
      });

      alert('Account created successfully!');
      setFullName('') , setEmail('') , setPassword('') , setConfirmPassword('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EAE0D5] to-[#C6AC8E]">
      <div className="w-full max-w-md bg-[#0A0908] text-[#EAE0D5] rounded-lg shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wide">Create Account</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Thimira Navodana"
              className="w-full px-4 py-3 bg-[#22333B] text-[#EAE0D5] border border-[#5E503F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="someone@example.com"
              className="w-full px-4 py-3 bg-[#22333B] text-[#EAE0D5] border border-[#5E503F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a strong password"
              className="w-full px-4 py-3 bg-[#22333B] text-[#EAE0D5] border border-[#5E503F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter your password again"
              className="w-full px-4 py-3 bg-[#22333B] text-[#EAE0D5] border border-[#5E503F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6AC8E] shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-center bg-gradient-to-r from-[#C6AC8E] to-[#5E503F] text-[#0A0908] font-bold rounded-lg hover:scale-105 transform transition focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          Already have an account?{' '}
          <a href="/signin" className="text-[#C6AC8E] font-semibold hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;


