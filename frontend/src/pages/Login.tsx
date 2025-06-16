import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';
export const Login = () => {
  return <div className="py-8">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Login to Your Account
      </h1>
      <LoginForm />
    </div>;
};