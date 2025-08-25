import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
      : 'bg-white shadow-md'
  }`}>
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden lg:flex justify-end py-1 text-xs text-gray-500 border-b border-gray-100">
          <div className="flex items-center mr-6">
            <Phone size={14} className="mr-1" />
            <span>+31 6 18 79 33 75</span>
          </div>
          <div className="flex items-center">
            <Mail size={14} className="mr-1" />
            <span>contact@mariomax.nl</span>
          </div>
        </div>
        {/* Main header */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-700">
              MARIO<span className="text-gray-700">max</span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="relative text-blue-700 font-medium px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50">
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700"></span>
                </a>
              </li>
              <li>
                <a href="#about" className="relative text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 group">
                  Over Ons
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#services" className="relative text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 group">
                  Diensten
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="relative text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 group">
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="relative text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 group">
                  Recensies
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#contact" className="relative text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-700 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col py-2">
            <li>
              <a href="#" className="block px-4 py-3 text-blue-700 font-medium bg-blue-50 border-l-4 border-blue-700">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300">
                Over Ons
              </a>
            </li>
            <li>
              <a href="#services" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300">
                Diensten
              </a>
            </li>
            <li>
              <a href="#gallery" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#testimonials" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300">
                Recensies
              </a>
            </li>
            <li>
              <a href="#contact" className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>}
    </header>;
}