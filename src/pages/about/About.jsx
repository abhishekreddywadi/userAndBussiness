import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <div className="flex-grow w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  We are dedicated to providing innovative solutions that empower businesses
                  and individuals to achieve their goals. Our platform combines cutting-edge
                  technology with user-friendly interfaces to create seamless experiences.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h2>
                <p className="text-gray-700 mb-4">
                  To be the leading platform that bridges the gap between users and businesses,
                  creating meaningful connections and fostering growth in the digital age.
                </p>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-gray-800">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovation</h3>
                  <p className="text-gray-700">
                    Constantly pushing boundaries to deliver cutting-edge solutions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Integrity</h3>
                  <p className="text-gray-700">
                    Building trust through transparent and ethical practices.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Excellence</h3>
                  <p className="text-gray-700">
                    Striving for the highest quality in everything we do.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Team</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm max-w-3xl mx-auto">
                <p className="text-gray-700">
                  Our diverse team of experts brings together years of experience in technology,
                  business, and customer service. We're passionate about creating solutions
                  that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
