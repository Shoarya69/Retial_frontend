import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { PropertyCard } from "../components/PropertyCard";
import { properties } from "../data/properties";
import { SlidersHorizontal } from "lucide-react";

export default function PropertyListings() {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    maxPrice: searchParams.get('maxPrice') || '',
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = [...properties];

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by bedrooms
    if (filters.bedrooms) {
      const bedroomCount = parseInt(filters.bedrooms);
      filtered = filtered.filter(p => p.bedrooms >= bedroomCount);
    }

    // Filter by max price
    if (filters.maxPrice) {
      const maxPrice = parseInt(filters.maxPrice);
      filtered = filtered.filter(p => p.pricePerMonth <= maxPrice);
    }

    setFilteredProperties(filtered);
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ location: '', bedrooms: '', maxPrice: '' });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl mb-2" style={{ color: '#0F172A' }}>
            Available Properties
          </h1>
          <p className="text-gray-600">
            Showing {filteredProperties.length} of {properties.length} properties
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="flex items-center space-x-2" style={{ color: '#0F172A' }}>
                  <SlidersHorizontal className="h-5 w-5" />
                  <span>Filters</span>
                </h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden text-sm"
                  style={{ color: '#2563EB' }}
                >
                  {showFilters ? 'Hide' : 'Show'}
                </button>
              </div>

              <div className={`space-y-6 ${showFilters || 'hidden lg:block'}`}>
                {/* Location Filter */}
                <div>
                  <label className="block mb-2 text-sm" style={{ color: '#0F172A' }}>
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter location"
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ borderColor: '#e5e7eb', '--tw-ring-color': '#2563EB' } as any}
                  />
                </div>

                {/* Bedrooms Filter */}
                <div>
                  <label className="block mb-2 text-sm" style={{ color: '#0F172A' }}>
                    Minimum Bedrooms
                  </label>
                  <select
                    value={filters.bedrooms}
                    onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ borderColor: '#e5e7eb', '--tw-ring-color': '#2563EB' } as any}
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="block mb-2 text-sm" style={{ color: '#0F172A' }}>
                    Maximum Price
                  </label>
                  <input
                    type="number"
                    placeholder="Enter max price"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                    style={{ borderColor: '#e5e7eb', '--tw-ring-color': '#2563EB' } as any}
                  />
                </div>

                {/* Price Range Presets */}
                <div>
                  <label className="block mb-2 text-sm" style={{ color: '#0F172A' }}>
                    Quick Filters
                  </label>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleFilterChange('maxPrice', '25000')}
                      className="w-full px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 transition-colors text-left"
                    >
                      Under ₹25,000
                    </button>
                    <button
                      onClick={() => handleFilterChange('maxPrice', '50000')}
                      className="w-full px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 transition-colors text-left"
                    >
                      Under ₹50,000
                    </button>
                    <button
                      onClick={() => handleFilterChange('maxPrice', '75000')}
                      className="w-full px-4 py-2 border rounded-lg text-sm hover:bg-gray-50 transition-colors text-left"
                    >
                      Under ₹75,000
                    </button>
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={clearFilters}
                  className="w-full px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#2563EB' }}
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="flex-1">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg shadow-md">
                <h3 className="text-xl mb-2" style={{ color: '#0F172A' }}>
                  No Properties Found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters to see more results
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 rounded-lg text-white"
                  style={{ backgroundColor: '#2563EB' }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}