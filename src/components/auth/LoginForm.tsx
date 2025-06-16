import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return <div className="max-w-md w-full mx-auto border border-gray-300 rounded-md p-6 bg-white">
      <h2 className="text-xl font-semibold mb-6 text-center text-gray-800">
        Login to your account
      </h2>
      <form className="space-y-4">
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
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember" type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Forgot password?
          </a>
        </div>
        <button type="submit" className="w-full py-2 px-4 border border-emerald-500 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400">
          Sign in
        </button>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-emerald-500 font-medium hover:underline">
              Register
            </Link>
          </span>
        </div>
      </form>
    </div>;
};