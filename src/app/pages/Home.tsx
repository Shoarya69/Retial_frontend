import { Link } from "react-router";
import { Search, Shield, Home as HomeIcon, Users, Star, Award, TrendingUp, MessageCircle } from "lucide-react";
import { PropertyCard } from "../components/PropertyCard";
import { properties, testimonials } from "../data/properties";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export default function Home() {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchBedrooms, setSearchBedrooms] = useState("");
  const [searchMaxPrice, setSearchMaxPrice] = useState("");

  const featuredProperties = properties.filter(p => p.featured).slice(0, 3);
  const latestListings = properties.slice(0, 4);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to listings with filters
    const params = new URLSearchParams();
    if (searchLocation) params.append('location', searchLocation);
    if (searchBedrooms) params.append('bedrooms', searchBedrooms);
    if (searchMaxPrice) params.append('maxPrice', searchMaxPrice);
    window.location.href = `/listings?${params.toString()}`;
  };

  const handleContactWhatsApp = () => {
    const message = "Hello, I would like to inquire about your rental properties.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=916367733285&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center" style={{ backgroundColor: '#0F172A' }}>
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://source.unsplash.com/1920x1080/?luxury,apartment,interior"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            Find Your Perfect Rental Home
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover amazing properties in your preferred location at the best prices
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-2xl p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Location"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: '#e5e7eb', '--tw-ring-color': '#2563EB' } as any}
              />
              <select
                value={searchBedrooms}
                onChange={(e) => setSearchBedrooms(e.target.value)}
                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: '#e5e7eb', '--tw-ring-color': '#2563EB' } as any}
              >
                <option value="">Bedrooms</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
              <input
                type="number"
                placeholder="Max Price"
                value={searchMaxPrice}
                onChange={(e) => setSearchMaxPrice(e.target.value)}
                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: '#e5e7eb', '--tw-ring-color': '#2563EB' } as any}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg text-white flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#2563EB' }}
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#0F172A' }}>
            Featured Properties
          </h2>
          <p className="text-gray-600">Handpicked premium properties just for you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#0F172A' }}>
              Why Choose RentalHub
            </h2>
            <p className="text-gray-600">We make renting simple, transparent, and stress-free</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EFF6FF' }}>
                <Shield className="h-8 w-8" style={{ color: '#2563EB' }} />
              </div>
              <h3 className="mb-2">Verified Properties</h3>
              <p className="text-gray-600 text-sm">All properties are thoroughly verified for your safety</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                <Award className="h-8 w-8" style={{ color: '#F59E0B' }} />
              </div>
              <h3 className="mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">Competitive pricing with no hidden charges</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EFF6FF' }}>
                <Users className="h-8 w-8" style={{ color: '#2563EB' }} />
              </div>
              <h3 className="mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Dedicated team to help you every step</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                <TrendingUp className="h-8 w-8" style={{ color: '#F59E0B' }} />
              </div>
              <h3 className="mb-2">Easy Process</h3>
              <p className="text-gray-600 text-sm">Simple and quick rental process</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#0F172A' }}>
            Latest Listings
          </h2>
          <p className="text-gray-600">Fresh properties added to our collection</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestListings.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/listings"
            className="inline-block px-8 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#2563EB' }}
          >
            View All Properties
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ color: '#0F172A' }}>
              What Our Customers Say
            </h2>
            <p className="text-gray-600">Real experiences from real people</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" style={{ color: '#F59E0B' }} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p style={{ color: '#0F172A' }}>{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: '#2563EB' }}>
        <div className="max-w-4xl mx-auto px-4">
          <HomeIcon className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today and let our experts help you find the perfect rental property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/listings"
              className="px-8 py-3 rounded-lg bg-white hover:bg-gray-100 transition-colors"
              style={{ color: '#2563EB' }}
            >
              Browse Properties
            </Link>
            <button
              onClick={handleContactWhatsApp}
              className="px-8 py-3 rounded-lg border-2 border-white text-white hover:bg-white transition-colors flex items-center justify-center space-x-2"
              style={{ '--hover-color': '#2563EB' } as any}
              onMouseEnter={(e) => e.currentTarget.style.color = '#2563EB'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contact on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}