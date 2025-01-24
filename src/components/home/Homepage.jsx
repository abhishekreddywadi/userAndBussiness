import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Contact from '../contact/Contact';
import BrandPartners from '../brands/BrandPartners';
import Footer from '../footer/Footer';

const Homepage = () => {
  const [isBrandSidebarOpen, setIsBrandSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Function to check if a URL is a YouTube link
  const isYouTubeUrl = (url) => {
    return url && (url.includes('youtube.com') || url.includes('youtu.be'));
  };

  // Function to check if a URL is a Canva link
  const isCanvaUrl = (url) => {
    return url && url.includes('canva.com');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    pauseOnHover: false,
  };

  const slides = [
    {
      title: "Welcome to Our Business Platform",
      subtitle: "Discover Amazing Opportunities",
      image: "/assets/img/master id (1).gif",
      type: "image"
    },
    {
      type: 'video',
      content: 'https://www.youtube.com/embed/SSkosQco6AA',
      overlay: {
        title: 'Business Growth',
        description: 'Empowering your business with innovative solutions'
      }
    },
    {
      type: 'video',
      content: 'https://www.canva.com/design/DAGYlFHOFHk/tUYZ_uEvD7LcUAuDQSwZRw/watch?utm_content=DAGYlFHOFHk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha394346fc2',
      overlay: {
        title: 'Innovation & Creativity',
        description: 'Building the future of business together'
      }
    }
  ];

  const renderVideoContent = (content) => {
    if (isYouTubeUrl(content)) {
      const videoId = getYouTubeVideoId(content);
      return (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          className="w-full h-full absolute inset-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else if (isCanvaUrl(content)) {
      // Extract the design ID from Canva URL
      const designId = content.match(/design\/([\w-]+)\//)?.[1];
      return (
        <iframe
          src={`https://www.canva.com/design/${designId}/embed`}
          title="Canva video player"
          frameBorder="0"
          className="w-full h-full absolute inset-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else {
      return (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={content} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  const renderSlide = (slide, index) => {
    return (
      <div key={index} className="relative h-90vh">
        {slide.type === 'image' ? (
          <div className="w-[70vw] mx-auto !flex items-center justify-between">
            {/* Left Content */}
            <div className="text-white max-w-xl">
              <h1 className="text-5xl font-bold leading-tight mb-4 animate-fadeIn">
                {slide.title}
              </h1>
              <p className="text-lg mb-8 animate-fadeIn animation-delay-200">
                {slide.subtitle}
              </p>
              <div className="flex gap-4 animate-fadeIn animation-delay-400">
                <button 
                  onClick={() => setIsBrandSidebarOpen(true)}
                  className="bg-white text-black px-8 py-2.5 text-sm hover:bg-opacity-90 transition-all"
                >
                  OUR BRAND PARTNERS
                </button>
                <Link 
                  to="/about" 
                  className="border border-white text-white px-8 py-2.5 text-sm hover:bg-white hover:bg-opacity-10 transition-all"
                >
                  ABOUT US
                </Link>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative animate-fadeIn animation-delay-200">
              <img 
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-[600px] h-auto object-contain"
              />
            </div>
          </div>
        ) : (
          <div className="relative h-[72vh]">
            {renderVideoContent(slide.content)}
            
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center pl-[100px] text-white">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold mb-4 text-left">{slide.overlay.title}</h2>
                <p className="text-lg mb-6 text-left">{slide.overlay.description}</p>
                <div className="flex justify-start gap-6">
                  <button 
                    onClick={() => setIsBrandSidebarOpen(true)}
                    className="bg-white text-black px-8 py-2.5 text-sm hover:bg-opacity-90 transition-all"
                  >
                    OUR BRAND PARTNERS
                  </button>
                  <Link 
                    to="/about" 
                    className="border border-white text-white px-8 py-2.5 text-sm hover:bg-white hover:bg-opacity-10 transition-all"
                  >
                    ABOUT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full">
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

      {/* Hero Section */}
      <div className="w-full h-[80vh] bg-[#00B5C8] relative">
        {/* Main Content with Slider */}
        <div className="h-full pt-20">
          <Slider {...settings} className="h-[calc(100%-5rem)]">
            {slides.map((slide, index) => renderSlide(slide, index))}
          </Slider>
        </div>

        {/* Slider Styles */}
        <style>
          {`
            .slick-dots {
              bottom: 25px;
            }
            .slick-dots li button:before {
              color: white;
              font-size: 12px;
              opacity: 0.5;
            }
            .slick-dots li.slick-active button:before {
              color: white;
              opacity: 1;
            }
            .animate-fadeIn {
              animation: fadeIn 0.8s ease-out forwards;
            }
            .animation-delay-200 {
              animation-delay: 200ms;
            }
            .animation-delay-400 {
              animation-delay: 400ms;
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </div>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Brand Partners Sidebar */}
      <BrandPartners 
        isOpen={isBrandSidebarOpen} 
        onClose={() => setIsBrandSidebarOpen(false)} 
      />
    </div>
  );
};

export default Homepage;