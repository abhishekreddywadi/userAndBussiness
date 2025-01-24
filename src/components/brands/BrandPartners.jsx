import React from 'react';
import { Link } from 'react-router-dom';
import bokwaImg from '../../../assets/img/bokwa.jpeg';
import bollyFitImg from '../../../assets/img/bolly-fit-fainal.png';
import latiboImg from '../../../assets/img/LATIBO_one.png';
import logoFinalImg from '../../../assets/img/logo-finial.png';

const BrandPartners = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="w-[600px] bg-white h-full overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Our Brand Partners</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 text-2xl"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.id}`}
                onClick={onClose}
                className="block"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gray-50 flex items-center justify-center p-3">
                    <img 
                      src={brand.image} 
                      alt={brand.name}
                      className="w-[70%] h-[70%] object-contain hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-base mb-1">{brand.name}</h3>
                    
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-blue-600 text-xs font-semibold">{brand.status}</span>
                      <span className="text-gray-500 text-xs">{brand.website}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8">
            <p className="text-gray-600 text-sm">
              Join our growing network of fitness brands! Each partner brings unique expertise 
              and innovative programs to help you achieve your fitness goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const brands = [
  {
    id: 'bolly-fit',
    name: 'BOLLY FIT',
    status: 'Coming Soon',
    website: 'WWW.BOLLYFIT.COM',
    image: bollyFitImg,
    description: 'Experience the magic of Bollywood fitness',
    features: [
      'Certified Instructors',
      'Dance-Based Workouts',
      'Fun & Energetic Sessions',
      'All Fitness Levels'
    ]
  },
  {
    id: 'bokwa',
    name: 'BOKWA FITNESS',
    status: 'Coming Soon',
    website: 'WWW.BOKWAFITNESS.COM',
    image: bokwaImg,
    description: 'Draw numbers & letters while you exercise',
    features: [
      'Unique Letter-Based Moves',
      'Cardio Workout',
      'International Community',
      'Easy to Follow'
    ]
  },
  {
    id: 'latibo',
    name: 'LATIBO FIT',
    status: 'Coming Soon',
    website: 'WWW.LATIBOFIT.COM',
    image: latiboImg,
    description: 'Latin-inspired dance fitness revolution',
    features: [
      'Latin Dance Moves',
      'High-Energy Workouts',
      'Professional Choreography',
      'Rhythm & Fitness Combined'
    ]
  },
  {
    id: 'fitness-hub',
    name: 'FITNESS HUB',
    status: 'Coming Soon',
    website: 'WWW.FITNESSHUB.COM',
    image: logoFinalImg,
    description: 'Your complete fitness destination',
    features: [
      'Multiple Programs',
      'Expert Trainers',
      'Customized Plans',
      'Modern Facilities'
    ]
  },
  {
    id: 'bolly-beats',
    name: 'BOLLY BEATS',
    status: 'Coming Soon',
    website: 'WWW.BOLLYBEATS.COM',
    image: bollyFitImg,
    description: 'Rhythm of Bollywood meets fitness',
    features: [
      'Bollywood Music',
      'Dance Fitness',
      'Cultural Experience',
      'Cardio Training'
    ]
  },
  {
    id: 'latin-groove',
    name: 'LATIN GROOVE',
    status: 'Coming Soon',
    website: 'WWW.LATINGROOVE.COM',
    image: latiboImg,
    description: 'Move to the Latin beats',
    features: [
      'Salsa Fitness',
      'Bachata Moves',
      'Latin Cardio',
      'Dance Training'
    ]
  },
  {
    id: 'dance-fit-pro',
    name: 'DANCE FIT PRO',
    status: 'Coming Soon',
    website: 'WWW.DANCEFITPRO.COM',
    image: bokwaImg,
    description: 'Professional dance fitness training',
    features: [
      'Pro Instructors',
      'Multiple Styles',
      'Fitness Focus',
      'Regular Events'
    ]
  },
  {
    id: 'fitness-fusion',
    name: 'FITNESS FUSION',
    status: 'Coming Soon',
    website: 'WWW.FITNESSFUSION.COM',
    image: logoFinalImg,
    description: 'Where all fitness styles meet',
    features: [
      'Mixed Workouts',
      'Fusion Training',
      'Diverse Programs',
      'Flexible Schedule'
    ]
  }
];

export default BrandPartners;
