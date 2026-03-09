import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-white border-t mt-16" style={{ backgroundColor: '#0F172A', color: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8" style={{ color: '#2563EB' }} />
              <span className="text-xl">RentalHub</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner in finding the perfect rental property. We make renting simple, transparent, and stress-free.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-75" style={{ color: '#2563EB' }}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-75" style={{ color: '#2563EB' }}>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-75" style={{ color: '#2563EB' }}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-75" style={{ color: '#2563EB' }}>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/listings" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Property Rentals</li>
              <li className="text-gray-300">Property Management</li>
              <li className="text-gray-300">Tenant Screening</li>
              <li className="text-gray-300">Maintenance Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: '#2563EB' }} />
                <span className="text-gray-300 text-sm">
                  123 Business District, Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5" style={{ color: '#2563EB' }} />
                <a href="tel:+91XXXXXXXXXX" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 XXXXXXXXXX
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5" style={{ color: '#2563EB' }} />
                <a href="mailto:info@rentalhub.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@rentalhub.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RentalHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
