import { Link } from "react-router";
import { Bed, Bath, Square, MapPin, MessageCircle } from "lucide-react";
import { Property } from "../data/properties";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const handleWhatsApp = () => {
    const message = `Hello, I am interested in the property: ${property.name}. Is this property available?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=91XXXXXXXXXX&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <Link to={`/property/${property.id}`} className="block relative h-48 overflow-hidden">
        <ImageWithFallback
          src={`https://source.unsplash.com/800x600/?${property.images[0]}`}
          alt={property.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        {property.featured && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-sm" style={{ backgroundColor: '#F59E0B' }}>
            Featured
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link to={`/property/${property.id}`}>
          <h3 className="mb-2 hover:opacity-75 transition-opacity" style={{ color: '#0F172A' }}>
            {property.name}
          </h3>
        </Link>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="mb-4">
          <span className="text-2xl" style={{ color: '#2563EB' }}>
            ₹{property.pricePerMonth.toLocaleString()}
          </span>
          <span className="text-gray-500 text-sm">/month</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b">
          <div className="flex items-center text-gray-600">
            <Bed className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Square className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.areaSqft} sqft</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/property/${property.id}`}
            className="px-4 py-2 rounded-lg text-center transition-colors text-white"
            style={{ backgroundColor: '#2563EB' }}
          >
            View Details
          </Link>
          <button
            onClick={handleWhatsApp}
            className="px-4 py-2 rounded-lg flex items-center justify-center space-x-1 transition-colors"
            style={{ backgroundColor: '#25D366', color: 'white' }}
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
