import { Link } from "react-router";
import { Target, Heart, Users, Award, TrendingUp, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">
              About RentalHub
            </h1>
            <p className="text-xl text-gray-300">
              Your trusted partner in finding the perfect rental home. We're committed to making the rental process simple, transparent, and stress-free for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6" style={{ color: '#0F172A' }}>
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  RentalHub was founded with a simple mission: to revolutionize the rental property market by making it more accessible, transparent, and efficient for both tenants and property owners.
                </p>
                <p>
                  We understand the challenges that come with finding the perfect rental home - from endless property searches to complicated paperwork and unreliable listings. That's why we created a platform that puts your needs first.
                </p>
                <p>
                  Today, we're proud to serve thousands of satisfied customers across Mumbai and surrounding areas, helping them find their dream rental homes with ease and confidence.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4" style={{ color: '#0F172A' }}>
              Meet Our Founder
            </h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src="/abc.png"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl mb-2" style={{ color: '#0F172A' }}>
                  Rajesh Sharma
                </h3>
                <p className="mb-4" style={{ color: '#2563EB' }}>
                  Founder & CEO
                </p>
                <p className="text-gray-600 leading-relaxed">
                  "Having experienced the frustrations of property hunting firsthand, I founded RentalHub to create a better way. Our goal is to bring trust, transparency, and efficiency to the rental market. We believe everyone deserves to find a place they can truly call home, and we're here to make that happen."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4" style={{ color: '#0F172A' }}>
              Our Mission & Values
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EFF6FF' }}>
                <Target className="h-8 w-8" style={{ color: '#2563EB' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: '#0F172A' }}>
                Our Mission
              </h3>
              <p className="text-gray-600">
                To simplify the rental process and help people find their perfect home with confidence and ease.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                <Heart className="h-8 w-8" style={{ color: '#F59E0B' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: '#0F172A' }}>
                Customer First
              </h3>
              <p className="text-gray-600">
                We prioritize your needs and satisfaction above all else, ensuring a seamless experience.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EFF6FF' }}>
                <Shield className="h-8 w-8" style={{ color: '#2563EB' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: '#0F172A' }}>
                Trust & Transparency
              </h3>
              <p className="text-gray-600">
                Every property is verified, and all information is accurate and up-to-date.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                <Users className="h-8 w-8" style={{ color: '#F59E0B' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: '#0F172A' }}>
                Community Focus
              </h3>
              <p className="text-gray-600">
                We build lasting relationships with our customers and contribute to stronger communities.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EFF6FF' }}>
                <TrendingUp className="h-8 w-8" style={{ color: '#2563EB' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: '#0F172A' }}>
                Innovation
              </h3>
              <p className="text-gray-600">
                We constantly improve our services using the latest technology and best practices.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                <Award className="h-8 w-8" style={{ color: '#F59E0B' }} />
              </div>
              <h3 className="text-xl mb-3" style={{ color: '#0F172A' }}>
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service and customer interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: '#2563EB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl mb-2">500+</div>
              <div className="text-blue-100">Properties Listed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">2000+</div>
              <div className="text-blue-100">Happy Tenants</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">150+</div>
              <div className="text-blue-100">Property Owners</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4" style={{ color: '#0F172A' }}>
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join thousands of satisfied customers who found their dream rental properties with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/listings"
              className="px-8 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#2563EB' }}
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg border-2 hover:bg-gray-50 transition-colors"
              style={{ borderColor: '#2563EB', color: '#2563EB' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}