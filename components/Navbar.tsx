
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { CLUB_LOGO } from '../config';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Executive Board', path: '/board' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              {CLUB_LOGO ? (
                <img src={CLUB_LOGO} alt="CCC Logo" className="w-12 h-12 object-contain" />
              ) : (
                <div className="w-10 h-10 bg-[#7BAFD4] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
                   <Heart size={20} fill="currentColor" />
                </div>
              )}
              <span className="font-bold text-lg tracking-tight text-[#7BAFD4] hidden sm:block">
                CAROLINA CARE COLLECTIVE
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-semibold transition-all relative ${
                  isActive(link.path)
                    ? 'text-[#7BAFD4]'
                    : 'text-gray-600 hover:text-[#7BAFD4]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#7BAFD4] rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#7BAFD4] p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                  isActive(link.path)
                    ? 'bg-[#7BAFD4] text-white shadow-md shadow-[#7BAFD4]/20'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#7BAFD4]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
