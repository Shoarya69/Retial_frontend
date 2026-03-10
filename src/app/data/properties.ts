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
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Beautiful modern apartment in the heart of the city with stunning views and contemporary design.",
    amenities: ["24/7 Security","Gym","Swimming Pool","Parking","Wi-Fi","Air Conditioning"],
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
      "https://images.unsplash.com/photo-1560448075-bb4caa6c59a2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Compact studio apartment perfect for singles or couples near metro access.",
    amenities: ["Security","Parking","Wi-Fi","Air Conditioning"],
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
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Large family home with garden and modern interiors.",
    amenities: ["24/7 Security","Gym","Garden","Parking","Power Backup","Club House"],
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
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Sea facing luxury apartment with premium interiors.",
    amenities: ["24/7 Security","Swimming Pool","Gym","Spa","Parking","Concierge"],
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
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Affordable and clean apartment for professionals.",
    amenities: ["Security","Parking","Lift","Water Supply"],
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
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753051-83c7d2b98e1f?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Luxury penthouse with private terrace and skyline views.",
    amenities: ["24/7 Security","Private Terrace","Gym","Pool","Home Theater","Smart Home"],
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
      "https://images.unsplash.com/photo-1600585154207-46c28c7b7f82?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Duplex apartment with garden access and spacious design.",
    amenities: ["Security","Garden","Parking","Club House","Children's Play Area"],
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
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Corporate ready studio apartment in the business district.",
    amenities: ["24/7 Security","Wi-Fi","Gym","Parking","Concierge","Business Center"],
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
