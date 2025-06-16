import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return <div className="max-w-md w-full mx-auto border border-gray-300 rounded-md p-6 bg-white">
      <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
        Create an account
      </h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input type="text" id="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="John" />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input type="text" id="lastName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="Doe" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="your@email.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} id="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400" placeholder="••••••••" />
            <button type="button" className="absolute right-3 top-2.5 text-gray-400" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Password must be at least 8 characters long with a number and
            special character.
          </p>
        </div>
        <div className="flex items-center">
          <input id="terms" type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I agree to the{' '}
            <a href="#" className="text-gray-800 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-gray-800 hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>
        <button type="submit" className="w-full py-2 px-4 border border-emerald-500 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400">
          Create Account
        </button>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-emerald-500 font-medium hover:underline">
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>;
};