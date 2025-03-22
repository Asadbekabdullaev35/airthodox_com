import React, { useState } from 'react';
import { Bot, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import GetStartedForm from './GetStartedForm';

const Navbar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button 
            onClick={navigateToHome}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity focus:outline-none"
          >
            <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
            <span className="text-white text-lg sm:text-xl font-bold">Airthodox</span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button 
              onClick={() => scrollToSection('solutions')}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-600/20 rounded-lg transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-purple-600/20 rounded-lg transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => {
                setIsFormOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      <GetStartedForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </nav>
  );
};

export default Navbar;