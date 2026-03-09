import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    propertyName: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `Hello, my name is ${formData.fullName}. I am contacting regarding the property: ${formData.propertyName}. Phone: ${formData.phoneNumber}. Message: ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=916367733285&text=${encodeURIComponent(message)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4" style={{ color: '#0F172A' }}>
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg">
            Have a question? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl mb-6" style={{ color: '#0F172A' }}>
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block mb-2 text-sm" style={{ color: '#0F172A' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e7eb', '--tw-ring-color': '#2563EB' } as any}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block mb-2 text-sm" style={{ color: '#0F172A' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e7eb', '--tw-ring-color': '#2563EB' } as any}
                  placeholder="+91-6367733285"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm" style={{ color: '#0F172A' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e7eb', '--tw-ring-color': '#2563EB' } as any}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="propertyName" className="block mb-2 text-sm" style={{ color: '#0F172A' }}>
                  Property Name
                </label>
                <input
                  type="text"
                  id="propertyName"
                  name="propertyName"
                  value={formData.propertyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#e5e7eb', '--tw-ring-color': '#2563EB' } as any}
                  placeholder="Property you're interested in"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm" style={{ color: '#0F172A' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 resize-none"
                  style={{ borderColor: '#e5e7eb', '--tw-ring-color': '#2563EB' } as any}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#2563EB' }}
              >
                <MessageCircle className="h-5 w-5" />
                <span>Send Message via WhatsApp</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                Clicking submit will open WhatsApp with your message pre-filled
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl mb-6" style={{ color: '#0F172A' }}>
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EFF6FF' }}>
                    <MapPin className="h-6 w-6" style={{ color: '#2563EB' }} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ color: '#0F172A' }}>Office Address</h3>
                    <p className="text-gray-600">
                      123 Business District<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EFF6FF' }}>
                    <Phone className="h-6 w-6" style={{ color: '#2563EB' }} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ color: '#0F172A' }}>Phone</h3>
                    <a href="tel:+916367733285" className="text-gray-600 hover:text-gray-900">
                      +916367733285
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EFF6FF' }}>
                    <Mail className="h-6 w-6" style={{ color: '#2563EB' }} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ color: '#0F172A' }}>Email</h3>
                    <a href="mailto:info@rentalhub.com" className="text-gray-600 hover:text-gray-900">
                      info@rentalhub.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#DCF8E8' }}>
                    <MessageCircle className="h-6 w-6" style={{ color: '#25D366' }} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ color: '#0F172A' }}>WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Chat with us instantly</p>
                    <a
                      href="https://api.whatsapp.com/send?phone=916367733285&text=Hello, I need help with rental properties"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-white"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Chat Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="rounded-xl shadow-md p-8 text-white" style={{ backgroundColor: '#2563EB' }}>
              <h2 className="text-2xl mb-4">Office Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}