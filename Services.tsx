import React from 'react';
import { Search, Share2, PenTool, BarChart3, Mail, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: 'SEO Optimization',
      description: 'Boost your website\'s visibility and rank higher in search engine results.'
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: 'Social Media Marketing',
      description: 'Engage with your audience and build brand awareness across social platforms.'
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: 'Content Creation',
      description: 'Compelling content that tells your story and connects with your audience.'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your marketing campaigns.'
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Marketing',
      description: 'Strategic email campaigns that convert leads into customers.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Custom websites that drive results and enhance user experience.'
    }
  ];

  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-gray-800 hover:bg-gray-750 transition-all transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}