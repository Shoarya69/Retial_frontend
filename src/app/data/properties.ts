export interface Property {
  id: string;
  name: string;
  location: string;
  pricePerMonth: number;
  bedrooms: number;
  bathrooms: number;
  areaSqft: number;
  images: string[];
  description: string;
  amenities: string[];
  featured: boolean;
  mapUrl?: string;
  owner: {
    name: string;
    phone: string;
    email: string;
  };
}

export const properties: Property[] = [
  {
    id: "1",
    name: "Luxury Apartment Downtown",
    location: "Downtown, Mumbai",
    pricePerMonth: 45000,
    bedrooms: 3,
    bathrooms: 2,
    areaSqft: 1500,
    images: [
      "luxury-apartment-living",
      "modern-apartment-interior",
      "luxury-bedroom"
    ],
    description: "Beautiful modern apartment in the heart of the city with stunning views and contemporary design. Features include spacious living area, modern kitchen with premium appliances, and large windows with natural light.",
    amenities: ["24/7 Security", "Gym", "Swimming Pool", "Parking", "Wi-Fi", "Air Conditioning"],
    featured: true,
    owner: {
      name: "Rajesh Kumar",
      phone: "+919876543210",
      email: "rajesh@properties.com"
    }
  },
  {
    id: "2",
    name: "Cozy Studio Near Metro",
    location: "Andheri West, Mumbai",
    pricePerMonth: 18000,
    bedrooms: 1,
    bathrooms: 1,
    areaSqft: 600,
    images: [
      "studio-apartment",
      "modern-kitchen",
      "cozy-bedroom"
    ],
    description: "Compact and efficient studio apartment perfect for singles or couples. Located just 5 minutes walk from metro station with easy access to shopping and dining.",
    amenities: ["Security", "Parking", "Wi-Fi", "Air Conditioning"],
    featured: false,
    owner: {
      name: "Priya Sharma",
      phone: "+919876543211",
      email: "priya@properties.com"
    }
  },
  {
    id: "3",
    name: "Spacious Family Home",
    location: "Bandra East, Mumbai",
    pricePerMonth: 65000,
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 2200,
    images: [
      "family-home-exterior",
      "spacious-living-room",
      "modern-dining-room"
    ],
    description: "Perfect family home with large backyard and modern amenities. Features include spacious bedrooms, dedicated study room, and a beautiful terrace garden.",
    amenities: ["24/7 Security", "Gym", "Garden", "Parking", "Power Backup", "Club House"],
    featured: true,
    owner: {
      name: "Amit Patel",
      phone: "+919876543212",
      email: "amit@properties.com"
    }
  },
  {
    id: "4",
    name: "Modern 2BHK with Sea View",
    location: "Worli, Mumbai",
    pricePerMonth: 55000,
    bedrooms: 2,
    bathrooms: 2,
    areaSqft: 1200,
    images: [
      "sea-view-apartment",
      "modern-balcony",
      "luxury-bathroom"
    ],
    description: "Stunning sea-facing apartment with panoramic views. Premium furnishings and modern interiors with access to world-class amenities.",
    amenities: ["24/7 Security", "Swimming Pool", "Gym", "Spa", "Parking", "Concierge"],
    featured: true,
    owner: {
      name: "Neha Desai",
      phone: "+919876543213",
      email: "neha@properties.com"
    }
  },
  {
    id: "5",
    name: "Affordable 1BHK",
    location: "Goregaon East, Mumbai",
    pricePerMonth: 22000,
    bedrooms: 1,
    bathrooms: 1,
    areaSqft: 650,
    images: [
      "affordable-apartment",
      "compact-living",
      "simple-bedroom"
    ],
    description: "Well-maintained and affordable apartment ideal for working professionals. Close to IT parks and shopping centers.",
    amenities: ["Security", "Parking", "Lift", "Water Supply"],
    featured: false,
    owner: {
      name: "Suresh Menon",
      phone: "+919876543214",
      email: "suresh@properties.com"
    }
  },
  {
    id: "6",
    name: "Penthouse with Terrace",
    location: "Powai, Mumbai",
    pricePerMonth: 85000,
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3000,
    images: [
      "penthouse-terrace",
      "luxury-penthouse-interior",
      "rooftop-lounge"
    ],
    description: "Exclusive penthouse with private terrace and premium finishes throughout. Perfect for those seeking luxury and privacy.",
    amenities: ["24/7 Security", "Private Terrace", "Gym", "Pool", "Home Theater", "Smart Home"],
    featured: true,
    owner: {
      name: "Vikram Singh",
      phone: "+919876543215",
      email: "vikram@properties.com"
    }
  },
  {
    id: "7",
    name: "Garden View Duplex",
    location: "Juhu, Mumbai",
    pricePerMonth: 72000,
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 1900,
    images: [
      "duplex-garden",
      "modern-duplex-stairs",
      "garden-view-room"
    ],
    description: "Beautiful duplex with private garden access. Spacious interiors with modern design and premium amenities.",
    amenities: ["Security", "Garden", "Parking", "Club House", "Children's Play Area"],
    featured: false,
    owner: {
      name: "Kavita Roy",
      phone: "+919876543216",
      email: "kavita@properties.com"
    }
  },
  {
    id: "8",
    name: "Corporate Studio",
    location: "BKC, Mumbai",
    pricePerMonth: 35000,
    bedrooms: 1,
    bathrooms: 1,
    areaSqft: 550,
    images: [
      "corporate-studio",
      "business-district-view",
      "modern-workspace"
    ],
    description: "Fully furnished studio in the business district. Perfect for corporate professionals with all modern conveniences.",
    amenities: ["24/7 Security", "Wi-Fi", "Gym", "Parking", "Concierge", "Business Center"],
    featured: false,
    owner: {
      name: "Anand Iyer",
      phone: "+919876543217",
      email: "anand@properties.com"
    }
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Happy Tenant",
    content: "Finding the perfect apartment was so easy! The team was professional and responsive. Highly recommend their services.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Owner",
    content: "They helped me find great tenants quickly. The process was smooth and hassle-free. Excellent service!",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Malhotra",
    role: "Satisfied Customer",
    content: "Amazing experience! Got a beautiful apartment in my preferred location at a great price. Thank you!",
    rating: 5
  }
];
