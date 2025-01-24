import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';

const BrandDetails = () => {
  const { brandId } = useParams();

  const getBrandDetails = (id) => {
    const brands = {
      'bolly-fit': {
        name: 'BOLLY FIT',
        logo: '/logo-finial.png',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci turpis, euismod sit amet tristique non, consequat eu arcu. Maecenas eu facilisis turpis. Duis egestas lacus eros, sed pulvinar lorem egestas non. Aliquam tortor tellus, dapibus ut varius ut, laoreet id ex. Vivamus accumsan odio odor, pellentesque fringilla neque ornare ut.

Suspendisse nec lectus eros. Donec fringilla consequat sodales. Morbi suscipit tortor nisi, nec vestibulum urna tincidunt is. Sed rhoncus vehicula odio a placerat. Nulla faucibus eros a magna ultricies, at malesuada orci congue. Morbi et pharetra elit. Nulla maximus vulputate dictum.

Mauris leo felis, facilisis ut facilisis vel, blandit in lorem. Fusce vulputate tellus sem, eget semper magna posuere id. In hac habitasse platea dictumst. Nunc cursus, ex eu lacinia ultricies, nibh eros hendrerit urna, eget convallis ligula dui in turpis.`,
        websiteUrl: 'www.bollyfit.com',
        socialLinks: {
          facebook: 'https://facebook.com/bollyfit',
          twitter: 'https://twitter.com/bollyfit',
          skype: 'bollyfit'
        }
      },
      'bokwa': {
        name: 'BOKWA FITNESS',
        logo: '/bokwa.jpeg',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci turpis, euismod sit amet tristique non, consequat eu arcu. Maecenas eu facilisis turpis. Duis egestas lacus eros, sed pulvinar lorem egestas non. Aliquam tortor tellus, dapibus ut varius ut, laoreet id ex. Vivamus accumsan odio odor, pellentesque fringilla neque ornare ut.

Suspendisse nec lectus eros. Donec fringilla consequat sodales. Morbi suscipit tortor nisi, nec vestibulum urna tincidunt is. Sed rhoncus vehicula odio a placerat. Nulla faucibus eros a magna ultricies, at malesuada orci congue. Morbi et pharetra elit. Nulla maximus vulputate dictum.

Mauris leo felis, facilisis ut facilisis vel, blandit in lorem. Fusce vulputate tellus sem, eget semper magna posuere id. In hac habitasse platea dictumst. Nunc cursus, ex eu lacinia ultricies, nibh eros hendrerit urna, eget convallis ligula dui in turpis.`,
        websiteUrl: 'www.bokwafitness.com',
        socialLinks: {
          facebook: 'https://facebook.com/bokwa',
          twitter: 'https://twitter.com/bokwa',
          skype: 'bokwa'
        }
      },
      'latibo': {
        name: 'LATIBO FIT',
        logo: '/LATIBO_one.png',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci turpis, euismod sit amet tristique non, consequat eu arcu. Maecenas eu facilisis turpis. Duis egestas lacus eros, sed pulvinar lorem egestas non. Aliquam tortor tellus, dapibus ut varius ut, laoreet id ex. Vivamus accumsan odio odor, pellentesque fringilla neque ornare ut.

Suspendisse nec lectus eros. Donec fringilla consequat sodales. Morbi suscipit tortor nisi, nec vestibulum urna tincidunt is. Sed rhoncus vehicula odio a placerat. Nulla faucibus eros a magna ultricies, at malesuada orci congue. Morbi et pharetra elit. Nulla maximus vulputate dictum.

Mauris leo felis, facilisis ut facilisis vel, blandit in lorem. Fusce vulputate tellus sem, eget semper magna posuere id. In hac habitasse platea dictumst. Nunc cursus, ex eu lacinia ultricies, nibh eros hendrerit urna, eget convallis ligula dui in turpis.`,
        websiteUrl: 'www.latibofit.com',
        socialLinks: {
          facebook: 'https://facebook.com/latibo',
          twitter: 'https://twitter.com/latibo',
          skype: 'latibo'
        }
      }
    };
    return brands[id];
  };

  const brand = getBrandDetails(brandId);

  if (!brand) {
    return <div>Brand not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col w-full  ">
      <Navbar />
      
      <div className="flex-grow bg-gray-50">
        <div className="bg-white shadow-lg">
          {/* Header with gradient */}
          <div className="h-48 bg-pink-500 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 w-32 h-32 flex items-center justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>

          <div className="px-4 py-12">
            {/* Brand Title */}
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              About The {brand.name}
            </h1>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href={brand.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3b5998] hover:opacity-80"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href={brand.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1DA1F2] hover:opacity-80"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href={`skype:${brand.socialLinks.skype}?chat`}
                className="text-[#00AFF0] hover:opacity-80"
              >
                <FontAwesomeIcon icon={faSkype} size="2x" />
              </a>
            </div>

            {/* Description */}
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
              {brand.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Website Button */}
            <div className="flex justify-center mb-16">
              <a
                href={`https://${brand.websiteUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white px-12 py-3 rounded-full text-sm font-medium hover:bg-pink-600 transition-colors"
              >
                Websites
              </a>
            </div>

            {/* Privacy Policy */}
            <div>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Privacy policy
              </h2>
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci turpis, euismod sit amet tristique non, consequat eu arcu. Maecenas eu facilisis turpis. Duis egestas lacus eros, sed pulvinar lorem egestas non.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Suspendisse nec lectus eros. Donec fringilla consequat sodales. Morbi suscipit tortor nisi, nec vestibulum urna tincidunt is.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mauris leo felis, facilisis ut facilisis vel, blandit in lorem. Fusce vulputate tellus sem, eget semper magna posuere id. In hac habitasse platea dictumst.
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

export default BrandDetails;
