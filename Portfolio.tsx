import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Global Tech Solutions',
      category: 'Digital Marketing Campaign',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      description: 'Increased online presence by 200% through targeted marketing'
    },
    {
      title: 'Eco Friendly Fashion',
      category: 'Social Media Marketing',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
      description: 'Boosted engagement rates by 150% across all platforms'
    },
    {
      title: 'Smart Home Hub',
      category: 'SEO Optimization',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80',
      description: 'Achieved #1 ranking for key industry terms'
    },
    {
      title: 'Fitness Revolution',
      category: 'Content Marketing',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80',
      description: 'Generated 500k+ organic views through content strategy'
    },
    {
      title: 'Gourmet Delivery',
      category: 'Email Marketing',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80',
      description: 'Increased conversion rate by 75% through email campaigns'
    },
    {
      title: 'Urban Living',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80',
      description: 'Redesigned website leading to 300% increase in leads'
    }
  ];

  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-gray-800 hover:transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-red-500 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}