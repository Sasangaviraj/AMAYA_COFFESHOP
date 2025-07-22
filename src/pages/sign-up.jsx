import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom'; 
import {
  createUserWithEmailAndPassword, 
  GoogleAuthProvider,            
  signInWithPopup,              
} from 'firebase/auth';
import { auth } from '../config/config'; 

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
   const navigate = useNavigate();

  // Handles Email/Password Sign Up
  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    try {
     
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage('Successfully signed up! Redirecting to login...');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
     
      setTimeout(() => {
        navigate('/login'); 
      }, 2000); 
    } catch (err) {
      console.error("Firebase Sign Up Error:", err.code, err.message);
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('This email is already in use. Please use a different email.');
          break;
        case 'auth/weak-password':
          setError('Password is too weak. Please use at least 6 characters.');
          break;
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        default:
          setError('Sign up failed. Please try again.');
      }
    }
  };

 // Handles Google Sign-in
  const handleGoogleSignUp = async () => {
    setError('');
    setSuccessMessage('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider); 
      setSuccessMessage('Successfully signed up with Google! Redirecting to dashboard...');
     
      setTimeout(() => {
        navigate('/dashboard'); 
      }, 2000); 
    } catch (err) {
      console.error("Google Sign Up Error:", err.code, err.message);
      switch (err.code) {
        case 'auth/popup-closed-by-user':
          setError('Google Login cancelled.');
          break;
        case 'auth/cancelled-popup-request':
          setError('Google Login request cancelled.');
          break;
        case 'auth/account-exists-with-different-credential':
          setError('An account with this email already exists using a different sign-in method.');
          break;
        default:
          setError('Google sign up failed. Please try again.');
      }
    }
  };


  // Placeholder for Facebook Sign-in (Frontend only)
  const handleFacebookSignUp = () => {
    setError('');
    setSuccessMessage('');
    setSuccessMessage('Facebook Login button clicked! (No authentication)');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 font-inter">
      {/* Left Side Image */}
      <div className="w-full lg:w-1/2 relative overflow-hidden">
        <img
          src="https://www.amayatheme.redsun.design/dark/wp-content/uploads/sites/5/2021/10/amaya-108-1024x1024.jpg" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Sign Up
          </h2>

          {/* Social Login Buttons */}
          <div className="flex flex-col gap-4 mb-6">
            <button
              onClick={handleGoogleSignUp}
              className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 font-semibold hover:bg-gray-50 transition duration-200"
            >
              <FcGoogle className="text-2xl" />
              Sign up with Google
            </button>
            <button
              onClick={handleFacebookSignUp}
              className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-sm font-semibold hover:bg-blue-700 transition duration-200"
            >
              <FaFacebook className="text-2xl" />
              Sign up with Facebook
            </button>
          </div>

          
          <div className="relative flex items-center justify-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Email/Password Sign Up Form */}
          <form onSubmit={handleEmailSignUp}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className=" appearance-none border border-gray-200 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-amber-500"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="sappearance-none border border-gray-200 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-amber-500"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="appearance-none border border-gray-200 rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-amber-500"
                placeholder=""
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs italic mb-4 text-center">{error}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-xs italic mb-4 text-center">{successMessage}</p>
            )}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#c19d67] hover:bg-[#a88656] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 w-full"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-[#c19d67] hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
