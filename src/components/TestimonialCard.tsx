import React from 'react';
import { Star } from 'lucide-react';
interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
}
export function TestimonialCard({
  name,
  location,
  text,
  rating
}: TestimonialCardProps) {
  const handleMouseEnter = () => {
    const scrollContainer = document.querySelector('.animate-scroll') as HTMLElement;
    if (scrollContainer) {
      scrollContainer.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    const scrollContainer = document.querySelector('.animate-scroll') as HTMLElement;
    if (scrollContainer) {
      scrollContainer.style.animationPlayState = 'running';
    }
  };

  return <div 
    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer" 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} size={20} className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} />)}
      </div>
      <p className="text-gray-600 mb-6 italic">"{text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
    </div>;
}