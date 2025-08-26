import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      
      // Get all sections
      const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      // Find which section is currently in view
      let currentSection = 'home';
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section.id;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
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
              MARIO<span className="text-gray-700">MAX</span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className={`relative px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 ${
                  activeSection === 'home' ? 'text-blue-700 font-medium' : 'text-gray-700 hover:text-blue-700'
                }`}>
                  Home
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                    activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
              <li>
                <a href="#about" className={`relative px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 group ${
                  activeSection === 'about' ? 'text-blue-700 font-medium' : 'text-gray-700 hover:text-blue-700'
                }`}>
                  Over Ons
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                    activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
              <li>
                <a href="#services" className={`relative px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 group ${
                  activeSection === 'services' ? 'text-blue-700 font-medium' : 'text-gray-700 hover:text-blue-700'
                }`}>
                  Diensten
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                    activeSection === 'services' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
              <li>
                <a href="#gallery" className={`relative px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 group ${
                  activeSection === 'gallery' ? 'text-blue-700 font-medium' : 'text-gray-700 hover:text-blue-700'
                }`}>
                  Portfolio
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                    activeSection === 'gallery' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className={`relative px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 group ${
                  activeSection === 'testimonials' ? 'text-blue-700 font-medium' : 'text-gray-700 hover:text-blue-700'
                }`}>
                  Recensies
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                    activeSection === 'testimonials' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              </li>
              <li>
                <a href="#contact" className={`relative px-3 py-2 rounded-md transition-all duration-300 hover:bg-blue-50 group ${
                  activeSection === 'contact' ? 'text-blue-700 font-medium' : 'text-gray-700 hover:text-blue-700'
                }`}>
                  Contact
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${
                    activeSection === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
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
              <a href="#home" className={`block px-4 py-3 transition-all duration-300 ${
                activeSection === 'home' 
                  ? 'text-blue-700 font-medium bg-blue-50 border-l-4 border-blue-700' 
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={`block px-4 py-3 transition-all duration-300 ${
                activeSection === 'about' 
                  ? 'text-blue-700 font-medium bg-blue-50 border-l-4 border-blue-700' 
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}>
                Over Ons
              </a>
            </li>
            <li>
              <a href="#services" className={`block px-4 py-3 transition-all duration-300 ${
                activeSection === 'services' 
                  ? 'text-blue-700 font-medium bg-blue-50 border-l-4 border-blue-700' 
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}>
                Diensten
              </a>
            </li>
            <li>
              <a href="#gallery" className={`block px-4 py-3 transition-all duration-300 ${
                activeSection === 'gallery' 
                  ? 'text-blue-700 font-medium bg-blue-50 border-l-4 border-blue-700' 
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#testimonials" className={`block px-4 py-3 transition-all duration-300 ${
                activeSection === 'testimonials' 
                  ? 'text-blue-700 font-medium bg-blue-50 border-l-4 border-blue-700' 
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}>
                Recensies
              </a>
            </li>
            <li>
              <a href="#contact" className={`block px-4 py-3 transition-all duration-300 ${
                activeSection === 'contact' 
                  ? 'text-blue-700 font-medium bg-blue-50 border-l-4 border-blue-700' 
                  : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
              }`}>
                Contact
              </a>
            </li>
          </ul>
        </div>}
    </header>;
}