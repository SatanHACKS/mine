import React from 'react';
import { ArrowRight, Zap, Globe, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ignite Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Transform your brand with cutting-edge digital marketing strategies that deliver real results
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine innovative strategies with proven techniques to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Results</h3>
              <p className="text-gray-400">
                Our strategies are designed to deliver quick, measurable results for your business
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Reach</h3>
              <p className="text-gray-400">
                Connect with audiences worldwide through targeted digital campaigns
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Data-Driven</h3>
              <p className="text-gray-400">
                Make informed decisions based on real-time analytics and insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}