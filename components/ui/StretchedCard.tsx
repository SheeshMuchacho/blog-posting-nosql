"use client"

import React from 'react';
import Image from 'next/image';

interface StretchedCardProps {
  image: string;
  heading: string;
  description: string;
  buttonText: string;
  link: string;
}

const StretchedCard: React.FC<StretchedCardProps> = ({
  image,
  heading,
  description,
  buttonText,
  link
}) => {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform border-8 border-[#144272]">
      <div className="flex flex-col md:flex-row h-full">
        
        {/* Image Section */}
        <div className="md:w-1/2 h-48 md:h-auto overflow-hidden relative">
          <Image
            src={image} 
            alt={heading}
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#144272]/10 to-[#2c74b3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-100"></div>
        </div>
        
        {/* Content Section */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white">
          
          {/* Heading */}
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#144272] group-hover:text-[#2c74b3] transition-colors duration-300">
            {heading}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>
          
          {/* Button */}
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#144272] hover:bg-[#2c74b3] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105 transform shadow-md hover:shadow-lg w-fit"
          >
            {buttonText}
            <svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default StretchedCard;