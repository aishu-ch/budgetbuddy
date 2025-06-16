import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, BarChartIcon, ClipboardListIcon, UserIcon } from 'lucide-react';
export const Header = () => {
  return <header className="w-full border-b border-emerald-500 bg-white">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="font-bold text-xl text-blue-900">
              Budget Tracker
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-1 text-gray-900 hover:text-emerald-500">
              <HomeIcon className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/dashboard" className="flex items-center gap-1 text-gray-900 hover:text-emerald-500">
              <BarChartIcon className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <Link to="/transactions" className="flex items-center gap-1 text-gray-900 hover:text-emerald-500">
              <ClipboardListIcon className="w-4 h-4" />
              <span>Transactions</span>
            </Link>
            <Link to="/login" className="flex items-center gap-1 text-gray-900 hover:text-emerald-500">
              <UserIcon className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>;
};