import React from 'react';
import { Instagram, Facebook, Send, Music2, Twitter, Mail, Phone } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  };

  const handlePrivacyClick = () => {
    navigate('/privacy-policy');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleTermsClick = () => {
    navigate('/terms-of-service');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleLegalNoticeClick = () => {
    navigate('/legal-notice');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-black to-purple-900/20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contact</h3>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail size={16} />
              <span>airthodox@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone size={16} />
              <span>+49 1629440359</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone size={16} />
              <span>+49 17630462523</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solutions')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={handlePrivacyClick}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={handleTermsClick}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={handleLegalNoticeClick}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Legal Notice
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Send size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Music2 size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Airthodox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;