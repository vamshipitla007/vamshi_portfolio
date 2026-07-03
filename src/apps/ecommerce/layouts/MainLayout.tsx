import React from 'react';
import { Footer, Navbar } from '../components';


interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
