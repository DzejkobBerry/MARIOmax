import React from 'react';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}
export function ServiceCard({
  title,
  description,
  icon,
  imageUrl
}: ServiceCardProps) {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-blue-50 rounded-full mr-3">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
        <a href="#contact" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors">
          Meer informatie →
        </a>
      </div>
    </div>;
}