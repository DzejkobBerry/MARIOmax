import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-end py-2 text-sm text-gray-600">
          <div className="flex items-center mr-4">
            <Phone size={16} className="mr-1" />
            <span>+31 6 12345678</span>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-1" />
            <span>info@mariomax.nl</span>
          </div>
        </div>
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-700">
              MARIO<span className="text-gray-700">max</span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a href="#" className="text-blue-700 font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors">
                  Over Ons
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors">
                  Diensten
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-700 hover:text-blue-700 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-700 transition-colors">
                  Recensies
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors">
                  Contact
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
      {isMenuOpen && <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col py-2">
            <li>
              <a href="#" className="block px-4 py-2 text-blue-700 font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block px-4 py-2 text-gray-700 hover:text-blue-700 transition-colors">
                Over Ons
              </a>
            </li>
            <li>
              <a href="#services" className="block px-4 py-2 text-gray-700 hover:text-blue-700 transition-colors">
                Diensten
              </a>
            </li>
            <li>
              <a href="#gallery" className="block px-4 py-2 text-gray-700 hover:text-blue-700 transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#testimonials" className="block px-4 py-2 text-gray-700 hover:text-blue-700 transition-colors">
                Recensies
              </a>
            </li>
            <li>
              <a href="#contact" className="block px-4 py-2 text-gray-700 hover:text-blue-700 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>}
    </header>;
}