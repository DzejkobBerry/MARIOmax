import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageData {
  imageUrl: string;
  title: string;
  description: string;
}

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageData: ImageData | null;
}

const galleryImages: ImageData[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Keuken Renovatie",
    description: "Volledige keukenrenovatie in Zaandam - Modern design met hoogwaardige afwerking"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Maatwerk Kasten",
    description: "Op maat gemaakte inbouwkasten en timmerwerk in Alkmaar"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Badkamer Verbouwing",
    description: "Luxe badkamer met natuursteen en maatwerk timmerwerk in Amsterdam"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Ramen & Deuren",
    description: "Nieuwe kunststof ramen en voordeur installatie in Purmerend"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Vensterbanken",
    description: "Natuursteen vensterbanken op maat geplaatst in Haarlem"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Maatwerk Kasten",
    description: "Op maat gemaakte inbouwkasten en timmerwerk in Alkmaar"
  }
];

export function GalleryModal({ isOpen, onClose, imageData }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageData) {
      const index = galleryImages.findIndex(img => img.imageUrl === imageData.imageUrl);
      setCurrentIndex(index >= 0 ? index : 0);
    }
  }, [imageData]);

  if (!isOpen) return null;

  const currentImage = galleryImages[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{currentImage.title}</h2>
            <p className="text-sm text-gray-500">{currentIndex + 1} van {galleryImages.length}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={currentImage.imageUrl}
            alt={currentImage.title}
            className="w-full h-96 object-cover"
          />
          
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Description */}
        <div className="p-6">
          <p className="text-gray-600 mb-4">{currentImage.description}</p>
          
          {/* Thumbnail gallery */}
          <div className="grid grid-cols-6 gap-2">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
                  index === currentIndex 
                    ? 'ring-2 ring-blue-500 opacity-100' 
                    : 'hover:opacity-80 opacity-60'
                }`}
                onClick={() => goToImage(index)}
              >
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}