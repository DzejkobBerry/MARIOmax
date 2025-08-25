import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
function Footer() {
  return <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              MARIO<span className="text-blue-400">max</span>
            </h3>
            <p className="mb-4">
              Professionele bouw- en timmerwerken voor al uw projecten.
              Kwaliteit en klanttevredenheid staan bij ons voorop.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Informatie</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-400" />
                <span>+31 6 12345678</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-400" />
                <span>info@mariomax.nl</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-blue-400" />
                <span>Zaandam, Nederland</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-blue-400 font-semibold">KvK:</span>
                <span>77979826</span>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  Over Ons
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Diensten
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition-colors">
                  Recensies
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MARIOmax. Alle rechten voorbehouden. | Ontworpen door{' '}
            <a 
              href="https://bloompixel.pl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors underline"
            >
              bloompixel.pl
            </a>
          </p>
        </div>
      </div>
    </footer>;
}

export { Footer };