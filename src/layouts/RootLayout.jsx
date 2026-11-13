
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import BackToTopButton, {
  ScrollToTopOnRoute,
} from '../components/ScrollToTop';
import InitialLoader from '../components/InitialLoader';

export default function RootLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="relative flex min-h-screen flex-col bg-white font-sans text-neutral-900 transition-colors duration-300 selection:bg-blue-500 selection:text-white dark:bg-[#0A0A0A] dark:text-white">
      {/* Initial loading animation */}
      <InitialLoader onComplete={() => { }} />

      {/* Global animated background */}
      <AnimatedBackground />

      {/* Reset scroll when navigating between pages */}
      <ScrollToTopOnRoute />

      {/* Shared navigation */}
      <Navbar />

      {/* Current page */}
      <main className="relative z-10 w-full flex-1">
        <Outlet />
      </main>

      {/* Shared scroll-to-top button */}
      <BackToTopButton />

      {/* Footer appears only on the Home page */}
      {isHomePage && <Footer />}
    </div>
  );
}
