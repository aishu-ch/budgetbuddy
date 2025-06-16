import React from 'react';
import { RegisterForm } from '../components/auth/RegisterForm';
export const Register = () => {
  return <div className="py-8">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Create Your Account
      </h1>
      <RegisterForm />
    </div>;
};