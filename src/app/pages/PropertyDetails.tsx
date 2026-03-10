import { useParams, Link } from "react-router";
import { properties } from "../data/properties";
import { Bed, Bath, Square, MapPin, Mail, Phone, User, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4" style={{ color: '#0F172A' }}>Property Not Found</h2>
          <Link to="/listings" className="text-white px-6 py-2 rounded-lg inline-block" style={{ backgroundColor: '#2563EB' }}>
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppInquiry = () => {
    const message = `Hello, I want more details about the property: ${property.name} located in ${property.location}. Is it available?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=916367733285&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleOwnerWhatsApp = () => {
    const message = `Hello ${property.owner.name}, I am interested in your property: ${property.name}. Can we discuss?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${property.owner.phone.replace('+', '')}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/listings" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Listings</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-96">
                <ImageWithFallback
                  src={`${property.images[currentImageIndex]}`}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" style={{ color: '#0F172A' }} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" style={{ color: '#0F172A' }} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {property.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-3 gap-2 p-4">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-24 rounded-lg overflow-hidden ${
                      index === currentImageIndex ? 'ring-2' : ''
                    }`}
                    style={index === currentImageIndex ? { '--tw-ring-color': '#2563EB' } as any : {}}
                  >
                    <ImageWithFallback
                      src={`${image}`}
                      alt={`${property.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl mb-2" style={{ color: '#0F172A' }}>
                    {property.name}
                  </h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl mb-1" style={{ color: '#2563EB' }}>
                    ₹{property.pricePerMonth.toLocaleString()}
                  </div>
                  <div className="text-gray-500">/month</div>
                </div>
              </div>

              {/* Property Features */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y">
                <div className="text-center">
                  <Bed className="h-8 w-8 mx-auto mb-2" style={{ color: '#2563EB' }} />
                  <div className="text-sm text-gray-600">Bedrooms</div>
                  <div style={{ color: '#0F172A' }}>{property.bedrooms}</div>
                </div>
                <div className="text-center">
                  <Bath className="h-8 w-8 mx-auto mb-2" style={{ color: '#2563EB' }} />
                  <div className="text-sm text-gray-600">Bathrooms</div>
                  <div style={{ color: '#0F172A' }}>{property.bathrooms}</div>
                </div>
                <div className="text-center">
                  <Square className="h-8 w-8 mx-auto mb-2" style={{ color: '#2563EB' }} />
                  <div className="text-sm text-gray-600">Area</div>
                  <div style={{ color: '#0F172A' }}>{property.areaSqft} sqft</div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h2 className="text-xl mb-3" style={{ color: '#0F172A' }}>Description</h2>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="mt-6">
                <h2 className="text-xl mb-3" style={{ color: '#0F172A' }}>Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2563EB' }} />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Location */}
              <div className="mt-6">
                <h2 className="text-xl mb-3" style={{ color: '#0F172A' }}>Location</h2>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-gray-400" />
                  <span className="ml-2 text-gray-500">Map view of {property.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24 space-y-6">
              {/* WhatsApp Inquiry */}
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full py-3 rounded-lg text-white flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle className="h-5 w-5" />
                <span>Ask About This Property</span>
              </button>

              {/* Owner Contact Card */}
              <div className="border rounded-lg p-4">
                <h3 className="mb-4" style={{ color: '#0F172A' }}>Property Owner</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EFF6FF' }}>
                      <User className="h-6 w-6" style={{ color: '#2563EB' }} />
                    </div>
                    <div>
                      <div style={{ color: '#0F172A' }}>{property.owner.name}</div>
                      <div className="text-sm text-gray-500">Owner</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="h-5 w-5" />
                    <a href={`tel:${property.owner.phone}`} className="hover:text-gray-900">
                      {property.owner.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="h-5 w-5" />
                    <a href={`mailto:${property.owner.email}`} className="hover:text-gray-900">
                      {property.owner.email}
                    </a>
                  </div>

                  <button
                    onClick={handleOwnerWhatsApp}
                    className="w-full mt-4 py-2 border rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
                    style={{ borderColor: '#25D366', color: '#25D366' }}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Contact Owner</span>
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="border rounded-lg p-4">
                <h3 className="mb-3" style={{ color: '#0F172A' }}>Quick Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property ID:</span>
                    <span style={{ color: '#0F172A' }}>#{property.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span style={{ color: '#0F172A' }}>
                      {property.bedrooms > 1 ? `${property.bedrooms}BHK` : 'Studio'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="text-green-600">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}