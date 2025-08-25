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
  category?: string;
}

const allGalleryImages: { [key: string]: ImageData[] } = {
  isolatie: [
    {
      imageUrl: "/images/isolatie-houtconstructies/isolatie1.jpg",
      title: "Andere werken",
      description: "Schilderen van muren en ramen, en leggen van vloerpanelen"
    },
    {
      imageUrl: "/images/isolatie-houtconstructies/isolatie2.jpg",
      title: "Andere werken",
      description: "Schilderen van muren en ramen, en leggen van vloerpanelen"
    },
    {
      imageUrl: "/images/isolatie-houtconstructies/isolatie3.jpg",
      title: "Andere werken",
      description: "Schilderen van muren en ramen, en leggen van vloerpanelen"
    }
  ],
  pvc: [
    {
      imageUrl: "/images/pvc-vloeren-terrassen/pvc1.jpg",
      title: "PVC-vloeren op terrassen",
      description: "Duurzame PVC-vloeren aangelegd op terrassen, stijlvol en onderhoudsvriendelijk."
    },
    {
      imageUrl: "/images/pvc-vloeren-terrassen/pvc2.jpg",
      title: "PVC-vloeren op terrassen",
      description: "Duurzame PVC-vloeren aangelegd op terrassen, stijlvol en onderhoudsvriendelijk."
    }
  ],
  houtconstructies: [
    {
      imageUrl: "/images/houtconstructies/houtconstructie1.jpg",
      title: "Houtconstructies",
      description: "Houtconstructies als onderbouw voor gipsplaten en scheidingswanden."
    },
    {
      imageUrl: "/images/houtconstructies/houtconstructie2.jpg",
      title: "Houtconstructies",
      description: "Houtconstructies als onderbouw voor gipsplaten en scheidingswanden."
    },
    {
      imageUrl: "/images/houtconstructies/houtconstructie3.jpg",
      title: "Houtconstructies",
      description: "Houtconstructies als onderbouw voor gipsplaten en scheidingswanden."
    },
    {
      imageUrl: "/images/houtconstructies/houtconstructie4.jpg",
      title: "Houtconstructies",
      description: "Houtconstructies als onderbouw voor gipsplaten en scheidingswanden."
    },
    {
      imageUrl: "/images/houtconstructies/houtconstructie5.jpg",
      title: "Houtconstructies",
      description: "Houtconstructies als onderbouw voor gipsplaten en scheidingswanden."
    },
    {
      imageUrl: "/images/houtconstructies/houtconstructie6.jpg",
      title: "Houtconstructies",
      description: "Houtconstructies als onderbouw voor gipsplaten en scheidingswanden."
    },
    {
      imageUrl: "/images/houtconstructies/houtconstructie7.jpg",
      title: "Houtconstructies",
      description: "Houtconstructies als onderbouw voor gipsplaten en scheidingswanden."
    }
  ],
  bouwunits: [
    {
      imageUrl: "/images/bouw-van-bouwunits/bouwunit1.jpg",
      title: "Bouw van bouwunits",
      description: "Van vloerinstallatie, montage van buitenmuren en dakconstructies, tot isolatie, plafondplaten en montage van scheidingswanden."
    },
    {
      imageUrl: "/images/bouw-van-bouwunits/bouwunit2.jpg",
      title: "Bouw van bouwunits",
      description: "Van vloerinstallatie, montage van buitenmuren en dakconstructies, tot isolatie, plafondplaten en montage van scheidingswanden."
    },
    {
      imageUrl: "/images/bouw-van-bouwunits/bouwunit3.jpg",
      title: "Bouw van bouwunits",
      description: "Van vloerinstallatie, montage van buitenmuren en dakconstructies, tot isolatie, plafondplaten en montage van scheidingswanden."
    },
    {
      imageUrl: "/images/bouw-van-bouwunits/bouwunit4.jpg",
      title: "Bouw van bouwunits",
      description: "Van vloerinstallatie, montage van buitenmuren en dakconstructies, tot isolatie, plafondplaten en montage van scheidingswanden."
    },
    {
      imageUrl: "/images/bouw-van-bouwunits/bouwunit5.jpg",
      title: "Bouw van bouwunits",
      description: "Van vloerinstallatie, montage van buitenmuren en dakconstructies, tot isolatie, plafondplaten en montage van scheidingswanden."
    },
    {
      imageUrl: "/images/bouw-van-bouwunits/bouwunit6.jpg",
      title: "Bouw van bouwunits",
      description: "Van vloerinstallatie, montage van buitenmuren en dakconstructies, tot isolatie, plafondplaten en montage van scheidingswanden."
    },
    {
      imageUrl: "/images/bouw-van-bouwunits/bouwunit7.jpg",
      title: "Bouw van bouwunits",
      description: "Van vloerinstallatie, montage van buitenmuren en dakconstructies, tot isolatie, plafondplaten en montage van scheidingswanden."
    }
  ],
  gevelplanken: [
    {
      imageUrl: "/images/montage-van-gevelplanken/gevelplank1.jpg",
      title: "Montage van gevelplanken",
      description: "Professionele montage van houten gevelplanken voor een duurzame en stijlvolle afwerking."
    },
    {
      imageUrl: "/images/montage-van-gevelplanken/gevelplank2.jpg",
      title: "Montage van gevelplanken",
      description: "Professionele montage van houten gevelplanken voor een duurzame en stijlvolle afwerking."
    },
    {
      imageUrl: "/images/montage-van-gevelplanken/gevelplank3.jpg",
      title: "Montage van gevelplanken",
      description: "Professionele montage van houten gevelplanken voor een duurzame en stijlvolle afwerking."
    }
  ],
  general: [
    {
      imageUrl: "/images/houtconstructies/houtconstructie1.jpg",
      title: "Houtconstructies",
      description: "Houtconstructies als onderbouw voor gipsplaten en scheidingswanden."
    }
  ]
};

export function GalleryModal({ isOpen, onClose, imageData, category = 'general' }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get images for the specific category
  const galleryImages = allGalleryImages[category] || allGalleryImages.general;

  useEffect(() => {
    if (imageData) {
      const index = galleryImages.findIndex(img => img.imageUrl === imageData.imageUrl);
      setCurrentIndex(index >= 0 ? index : 0);
    }
  }, [imageData, galleryImages]);

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