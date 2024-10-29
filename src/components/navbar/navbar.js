'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavItem from './nav-item';
import SignUpButton from './sign-up-btn';
import Image from 'next/image';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-indigo-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
          <Link href="/landing" className="flex items-center py-4">
            <Image
                src="/assets/images/logo.png"
                alt="Logo"
                width={150}
                height={70}
                className="w-auto h-auto max-h-6"
            />
            </Link>

          </div>
          <div className="hidden md:flex items-center space-x-1">
            <NavItem href="/landing">Home</NavItem>
            <NavItem href="/dashboard">Dashboard</NavItem>
            <NavItem href="/products">Products</NavItem>
            <NavItem href="/risk-analysis">Risk Analysis</NavItem>
            <SignUpButton href="/sign-up"/>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              className="outline-none mobile-menu-button"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6 text-white hover:text-gray-200"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-blue-900`}>
        <ul className="pt-4 pb-3">
          <NavItem href="/landing">Home</NavItem>
          <NavItem href="/dashboard">Dashboard</NavItem>
          <NavItem href="/products">Products</NavItem>
          <NavItem href="/risk-analysis">Risk Analysis</NavItem>
          <NavItem href="/sign-up">Sign up</NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
