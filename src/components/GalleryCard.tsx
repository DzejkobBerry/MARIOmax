import React from 'react';
import { Camera, Upload } from 'lucide-react';

interface GalleryCardProps {
  imageUrl?: string;
  title: string;
  description: string;
  isUploadCard?: boolean;
  onUpload?: () => void;
  onClick?: () => void;
}

export function GalleryCard({ imageUrl, title, description, isUploadCard = false, onUpload, onClick }: GalleryCardProps) {
  if (isUploadCard) {
    return (
      <div 
        onClick={onUpload}
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 h-48 flex items-center justify-center">
          <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center group-hover:bg-blue-300 transition-colors duration-300">
            <Upload className="text-blue-600 group-hover:text-blue-700" size={32} />
          </div>
          <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}