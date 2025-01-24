import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="w-[70vw] mx-auto grid grid-cols-4 gap-8">
        {/* Company Name */}
        <div>
          <h3 className="text-lg font-bold mb-4">COMPANY NAME</h3>
          <p className="text-gray-600 text-sm">
            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">ABOUT</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-600 text-sm hover:text-gray-900">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 text-sm hover:text-gray-900">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">USEFUL LINKS</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy-policy" className="text-gray-600 text-sm hover:text-gray-900">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="text-gray-600 text-sm hover:text-gray-900">Terms and Condition</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <p className="text-gray-600 text-sm">
            178 West 27th Street, Suite 527 New York NY 10012 United States
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
