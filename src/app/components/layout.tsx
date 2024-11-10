// components/layout.tsx

import React, { ReactNode } from 'react';
import Navbar from './navbar'; // Navbar component import karein
import Footer from './footer'; // Footer component import karein
import '../styles/globals.css'; // Global styles import karein

// Props ki type define karein
interface LayoutProps {
  children: ReactNode; // children prop ki type ReactNode hai
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page-Specific Content */}
      <main className="flex-grow">
        {children} {/* Yeh children prop har page ke specific content ko render karega */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
