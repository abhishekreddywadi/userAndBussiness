import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    userId: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    message: ''
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dummy data for dropdowns
  const countries = [
    { id: 'in', name: 'India' },
    { id: 'us', name: 'United States' },
    { id: 'uk', name: 'United Kingdom' }
  ];

  const states = {
    in: [
      { id: 'mh', name: 'Maharashtra' },
      { id: 'ka', name: 'Karnataka' },
      { id: 'dl', name: 'Delhi' }
    ],
    us: [
      { id: 'ny', name: 'New York' },
      { id: 'ca', name: 'California' },
      { id: 'tx', name: 'Texas' }
    ],
    uk: [
      { id: 'en', name: 'England' },
      { id: 'sc', name: 'Scotland' },
      { id: 'wl', name: 'Wales' }
    ]
  };

  const cities = {
    mh: ['Mumbai', 'Pune', 'Nagpur'],
    ka: ['Bangalore', 'Mysore', 'Hubli'],
    dl: ['New Delhi', 'Delhi NCR'],
    ny: ['New York City', 'Buffalo', 'Albany'],
    ca: ['Los Angeles', 'San Francisco', 'San Diego'],
    tx: ['Houston', 'Austin', 'Dallas'],
    en: ['London', 'Manchester', 'Birmingham'],
    sc: ['Edinburgh', 'Glasgow', 'Aberdeen'],
    wl: ['Cardiff', 'Swansea', 'Newport']
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      
      // Reset dependent fields when country or state changes
      if (name === 'country') {
        newData.state = '';
        newData.city = '';
      } else if (name === 'state') {
        newData.city = '';
      }
      
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Sticky Navbar */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-3' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="w-[70vw] mx-auto flex justify-between items-center">
          <div className={`text-2xl font-bold transition-colors ${
            isScrolled ? 'text-[#00B5C8]' : 'text-white'
          }`}>
            Logo
          </div>
          <div className="flex gap-6">
            {['REGISTER NOW', 'SIGN IN', 'ABOUT US', 'CONTACT US'].map((item, index) => (
              <Link 
                key={index}
                to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                className={`text-sm hover:opacity-80 transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="w-full">
        <h1 className="text-4xl font-bold text-white text-center py-[85px] bg-[#FF5197]">CONTACT US</h1>
        
        <div className="w-[60vw] mx-auto bg-white rounded-lg shadow-lg p-10 relative -top-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-4">GET IN TOUCH</h2>
              <p className="text-gray-600 mb-7 text-base">
                We're here to help! Send us your message and we'll respond as soon as possible.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-7">
                <div className="flex items-center gap-4">
                  <div className="bg-[#FF69B4] p-2.5 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-base">123 Business Avenue, New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#FF69B4] p-2.5 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-base">+1 234 567 8900</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#FF69B4] p-2.5 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-base">contact@example.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold mb-4 text-base">Follow Us</h3>
                <div className="flex gap-4">
                  {/* Social media icons with smaller size */}
                  <a href="#" className="bg-[#FF69B4] p-2 rounded-full hover:opacity-80 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#FF69B4] p-2 rounded-full hover:opacity-80 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#FF69B4] p-2 rounded-full hover:opacity-80 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-[#FF69B4] p-2 rounded-full hover:opacity-80 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name" 
                  className="w-full p-2.5 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#FF69B4] text-base"
                />
              </div>
              <div>
                <input 
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  placeholder="User ID" 
                  className="w-full p-2.5 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#FF69B4] text-base"
                />
              </div>
              <div>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  className="w-full p-2.5 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#FF69B4] text-base"
                />
              </div>
              <div>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number" 
                  className="w-full p-2.5 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#FF69B4] text-base"
                />
              </div>
              <div>
                <select 
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2.5 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#FF69B4] text-base"
                >
                  <option value="">Select Country</option>
                  {countries.map(country => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select 
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  disabled={!formData.country}
                  className="w-full p-2.5 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#FF69B4] disabled:bg-gray-100 disabled:cursor-not-allowed text-base"
                >
                  <option value="">Select State</option>
                  {formData.country && states[formData.country].map(state => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select 
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={!formData.state}
                  className="w-full p-2.5 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#FF69B4] disabled:bg-gray-100 disabled:cursor-not-allowed text-base"
                >
                  <option value="">Select City</option>
                  {formData.state && cities[formData.state].map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message" 
                  rows="4" 
                  className="w-full p-2.5 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#FF69B4] resize-none text-base"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-[#4CAF50] text-white px-7 py-2.5 rounded hover:bg-opacity-90 transition-colors text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
