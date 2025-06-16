import React from 'react';
import { Link } from 'react-router-dom';
import { BarChartIcon, ClipboardListIcon, PieChartIcon, TrendingUpIcon } from 'lucide-react';
export const Home = () => {
  return <div className="flex flex-col gap-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Manage Your Finances with Ease
        </h1>
        <p className="text-gray-600 mb-6">
          Track expenses, set budgets, and achieve your financial goals with our
          simple budget tracking application.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/register" className="px-6 py-3 border border-emerald-500 rounded-md bg-emerald-500 text-white hover:bg-emerald-600">
            Get Started
          </Link>
          <Link to="/login" className="px-6 py-3 border border-cyan-300 rounded-md bg-white text-blue-900 hover:bg-cyan-50">
            Login
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border border-gray-300 rounded-md p-5 bg-white">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-300 mb-4">
            <ClipboardListIcon className="h-6 w-6 text-blue-900" />
          </div>
          <h3 className="text-lg font-medium text-blue-900 mb-2">
            Track Expenses
          </h3>
          <p className="text-gray-600">
            Easily record and categorize all your expenses in one place.
          </p>
        </div>
        <div className="border border-gray-300 rounded-md p-5 bg-white">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 mb-4">
            <BarChartIcon className="h-6 w-6 text-gray-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Set Budgets
          </h3>
          <p className="text-gray-600">
            Create budgets for different categories and track your spending.
          </p>
        </div>
        <div className="border border-gray-300 rounded-md p-5 bg-white">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 mb-4">
            <PieChartIcon className="h-6 w-6 text-gray-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Visualize Data
          </h3>
          <p className="text-gray-600">
            See where your money goes with insightful charts and reports.
          </p>
        </div>
        <div className="border border-gray-300 rounded-md p-5 bg-white">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 mb-4">
            <TrendingUpIcon className="h-6 w-6 text-gray-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Achieve Goals
          </h3>
          <p className="text-gray-600">
            Set financial goals and track your progress over time.
          </p>
        </div>
      </div>
      <div className="border border-gray-300 rounded-md p-6 bg-white">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
              <span className="text-lg font-medium">1</span>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Create an account
            </h3>
            <p className="text-gray-600">
              Sign up for free and set up your profile with your financial
              information.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
              <span className="text-lg font-medium">2</span>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Track transactions
            </h3>
            <p className="text-gray-600">
              Record your income and expenses with detailed categorization.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
              <span className="text-lg font-medium">3</span>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Analyze and improve
            </h3>
            <p className="text-gray-600">
              Review your spending patterns and make better financial decisions.
            </p>
          </div>
        </div>
      </div>
    </div>;
};