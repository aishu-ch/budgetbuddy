import React from 'react';
import { Header } from './Header';
interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({
  children
}: LayoutProps) => {
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
      <footer className="border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          Budget Tracker Wireframe &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>;
};