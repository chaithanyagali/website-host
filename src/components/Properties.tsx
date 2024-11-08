import React from 'react';
import { MapPin, Home, Ruler, BedDouble } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: "Luxury Villa Estate",
    location: "Beverly Hills, CA",
    price: "$5,900,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    beds: 5,
    baths: 6,
    sqft: 6500,
  },
  {
    id: 4,
    title: "Luxury Villa Estate",
    location: "Beverly Hills, CA",
    price: "$5,900,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    beds: 5,
    baths: 6,
    sqft: 6500,
  },
  {
    id: 2,
    title: "Luxury Villa Estate",
    location: "Beverly Hills, CA",
    price: "$5,900,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    beds: 5,
    baths: 6,
    sqft: 6500,
  },
  {
    id: 3,
    title: "Luxury Villa Estate",
    location: "Beverly Hills, CA",
    price: "$5,900,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    beds: 5,
    baths: 6,
    sqft: 6500,
  }
  // Add other properties with unique image URLs...
];

export default function Properties() {
  const navigate = useNavigate();

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of premium properties designed to exceed your expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              onClick={() => navigate(`/property/${property.id}`)}
              className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                  {property.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  {property.location}
                </div>

                <div className="grid grid-cols-3 gap-4 border-t pt-4">
                  <div className="flex items-center">
                    <BedDouble className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Home className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Ruler className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
