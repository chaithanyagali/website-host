import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Building Dreams,<br />Creating Homes
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Discover luxury living with our premium residential and commercial properties. 
            Experience excellence in every square foot.
          </p>
          <div className="flex space-x-4">
            <a 
              href="/properties" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              View Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}