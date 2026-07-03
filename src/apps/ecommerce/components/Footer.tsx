import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">ElectroHub</h3>
            <p className="text-sm mb-4">Premium consumer electronics delivered at your doorstep.</p>
            <div className="flex gap-4">
              <FaFacebook size={20} className="hover:text-blue-400 cursor-pointer transition-colors" />
              <FaInstagram size={20} className="hover:text-pink-400 cursor-pointer transition-colors" />
              <FaTwitter size={20} className="hover:text-blue-400 cursor-pointer transition-colors" />
              <FaLinkedin size={20} className="hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/ecommerce" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ecommerce/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/ecommerce/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ecommerce/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>support@electrohub.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Tech Street, Innovation City, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center md:text-left">
              &copy; 2024 ElectroHub. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
