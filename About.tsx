import React from 'react';
import { Users, Target, Award } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Satan Networking</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're a team of digital marketing experts passionate about helping businesses grow online
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="text-center p-6 rounded-lg bg-gray-800">
            <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-gray-400">Satisfied Clients</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-800">
            <Target className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-800">
            <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            The brilliant minds behind our successful campaigns
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}