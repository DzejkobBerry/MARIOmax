import React, { useState } from 'react';
import { ChevronRight, Home as HomeIcon, Hammer, PaintBucket, Star, Phone, Mail, MapPin, Camera, Eye } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { ContactForm } from '../components/ContactForm';
import { GalleryCard } from '../components/GalleryCard';
import { GalleryModal } from '../components/GalleryModal';
import { ScrollToTop } from '../components/ScrollToTop';

export function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (imageData) => {
    setSelectedImage(imageData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="home" className="relative bg-blue-700 text-white">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
        }}></div>
        <div className="container mx-auto px-4 py-24 md:py-40 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professionele Bouw- en Timmerwerken
            </h1>
            <p className="text-xl mb-8">
              Kwaliteit en vakmanschap voor al uw bouw- en timmerprojecten in
              Zaandam en omgeving.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
                Neem Contact Op
              </a>
              <a href="#services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-md font-medium transition-colors">
                Onze Diensten
              </a>
            </div>
          </div>
        </div>
        
        {/* Gallery Modal */}
        <GalleryModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          imageData={selectedImage}
          category={
            selectedImage?.title === 'Houtconstructies' ? 'houtconstructies' :
            selectedImage?.title === 'Andere werken' ? 'andere' :
            selectedImage?.title === 'PVC-vloeren op terrassen' ? 'pvc' :
            selectedImage?.title === 'Bouw van bouwunits' ? 'bouwunits' :
            selectedImage?.title === 'Montage van gevelplanken' ? 'gevelplanken' :
            selectedImage?.title === 'Isolatie en houtconstructies' ? 'isolatie' :
            'general'
          }
        />
        
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-15 translate-y-32 -translate-x-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Over <span className="text-blue-600">MARIOmax</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Uw betrouwbare partner voor professionele bouw- en timmerwerken in Zaandam en omgeving
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <img 
                src="/images/other/stolarz.jpg" 
                alt="MARIOmax vakman aan het werk" 
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300" 
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Onze Missie</h3>
                <p className="text-gray-600 leading-relaxed">
                  MARIOmax is een ervaren bouw- en timmerbedrijf dat kwaliteit, betrouwbaarheid en vakmanschap 
                  levert bij elk project. Van kleine renovaties tot grotere bouwprojecten - wij staan garant 
                  voor een professioneel resultaat.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Waarom Kiezen Voor Ons?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Met jarenlange ervaring in de bouwsector bieden wij hoogwaardige diensten aan voor 
                  zowel particuliere als zakelijke klanten in Zaandam en omgeving.
                </p>
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">15+</h4>
              <p className="text-gray-600">Jaar Ervaring</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hammer className="text-blue-600" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">100%</h4>
              <p className="text-gray-600">Gecertificeerd</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">100km</h4>
              <p className="text-gray-600">Vanuit Zaandam</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="text-blue-600" size={32} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">500+</h4>
              <p className="text-gray-600">Tevreden Klanten</p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Klaar om uw project te starten?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Neem vandaag nog contact met ons op voor een vrijblijvende offerte en ontdek wat wij voor u kunnen betekenen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105 duration-200">
                  Neem Contact Op
                </a>
                <a href="#services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105 duration-200">
                  Bekijk Onze Diensten
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-15 translate-y-32 -translate-x-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Onze <span className="text-blue-600">Diensten</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bij MARIOmax bieden wij een breed scala aan bouw- en
              timmerdiensten. Ontdek hieronder wat wij voor u kunnen betekenen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Algemene Bouw" 
              description="Complete construction projects from foundation to roof. New builds, extensions and structural modifications with craftsmanship and precision." 
              icon={<HomeIcon className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Timmerwerken" 
              description="Professional carpentry and joinery work. Custom cabinets, stairs, paneling and all wooden constructions inside and outside." 
              icon={<Hammer className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Ramen Plaatsen" 
              description="Professional installation and replacement of windows. PVC, wood and aluminum frames for optimal insulation and security." 
              icon={<PaintBucket className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Deuren Plaatsen" 
              description="Expert installation of interior and exterior doors. Custom fitting, security doors and decorative solutions for every home." 
              icon={<Star className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Vensterbanken & Afwerking" 
              description="Installation of interior and exterior window sills. Natural stone, composite and wooden sills custom made and professionally installed." 
              icon={<Hammer className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Renovatie & Vloeren" 
              description="Complete renovations and flooring solutions. Laminate, hardwood, tiles and decorative finishes for every room in your home." 
              icon={<PaintBucket className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -translate-y-48 -translate-x-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-15 translate-y-32 translate-x-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Galerie <span className="text-blue-600">Onze Werken</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bekijk onze uitgevoerde projecten en deel uw eigen ervaringen. Upload foto's van uw project en inspireer andere klanten.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* First row */}
            <GalleryCard 
              imageUrl="/images/houtconstructies/houtconstructie1.jpg"
              title="Houtconstructies"
              description="Houtconstructies als onderbouw voor gipsplaten en scheidingswanden."
              onClick={() => {
                const imageData = {
                  imageUrl: "/images/houtconstructies/houtconstructie1.jpg",
                  title: "Houtconstructies",
                  description: "Houtconstructies als onderbouw voor gipsplaten en scheidingswanden."
                };
                handleImageClick(imageData);
              }}
            />
            
            <GalleryCard 
              imageUrl="/images/isolatie-houtconstructies/isolatie1.jpg"
              title="Isolatie en houtconstructies"
              description="Isolatie en houtconstructies voor gevelbekleding met houten planken."
              onClick={() => handleImageClick({
                imageUrl: "/images/isolatie-houtconstructies/isolatie1.jpg",
                title: "Isolatie en houtconstructies",
                description: "Isolatie en houtconstructies voor gevelbekleding met houten planken."
              })}
            />
            
            <GalleryCard 
              imageUrl="/images/pvc-vloeren-terrassen/pvc1.jpg"
              title="PVC-vloeren op terrassen"
              description="Duurzame PVC-vloeren aangelegd op terrassen, stijlvol en onderhoudsvriendelijk."
              onClick={() => handleImageClick({
                imageUrl: "/images/pvc-vloeren-terrassen/pvc1.jpg",
                title: "PVC-vloeren op terrassen",
                description: "Duurzame PVC-vloeren aangelegd op terrassen, stijlvol en onderhoudsvriendelijk."
              })}
            />
            
            {/* Second row */}
            <GalleryCard 
              imageUrl="/images/bouw-van-bouwunits/bouwunit1.jpg"
              title="Bouw van bouwunits"
              description="Van vloerinstallatie, montage van buitenmuren en dakconstructies, tot isolatie, plafondplaten en montage van scheidingswanden."
              onClick={() => handleImageClick({
                imageUrl: "/images/bouw-van-bouwunits/bouwunit1.jpg",
                title: "Bouw van bouwunits",
                description: "Van vloerinstallatie, montage van buitenmuren en dakconstructies, tot isolatie, plafondplaten en montage van scheidingswanden."
              })}
            />
            <GalleryCard 
              imageUrl="/images/montage-van-gevelplanken/gevelplank1.jpg"
              title="Montage van gevelplanken"
              description="Professionele montage van houten gevelplanken voor een duurzame en stijlvolle afwerking."
              onClick={() => handleImageClick({
                imageUrl: "/images/montage-van-gevelplanken/gevelplank1.jpg",
                title: "Montage van gevelplanken",
                description: "Professionele montage van houten gevelplanken voor een duurzame en stijlvolle afwerking."
              })}
            />
            <GalleryCard 
              imageUrl="/images/andere-werken/andere1.jpg"
              title="Andere werken"
              description="Schilderen van muren en ramen, en leggen van vloerpanelen"
              onClick={() => handleImageClick({
                imageUrl: "/images/andere-werken/andere1.jpg",
                title: "Andere werken",
                description: "Schilderen van muren en ramen, en leggen van vloerpanelen"
              })}
            />
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="flex justify-center items-center mb-4">
                <Camera className="text-blue-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bekijk Meer Van Onze Werken</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Wilt u meer zdjęcia van onze projecten zien? Klik op de knop hieronder om onze volledige galerij te bekijken 
                en ontdek de kwaliteit en het vakmanschap dat wij leveren bij elk project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const imageData = {
                      imageUrl: "/images/houtconstructies/houtconstructie1.jpg",
                      title: "Houtconstructies",
                      description: "Houtconstructies als onderbouw voor gipsplaten en scheidingswanden."
                    };
                    setSelectedImage(imageData);
                    setIsModalOpen(true);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105 duration-200"
                >
                  Bekijk Alle Foto's
                </button>
                <a 
                  href="#contact" 
                  className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors transform hover:scale-105 duration-200"
                >
                  Vraag Offerte Aan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-15 translate-y-32 -translate-x-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Wat Onze <span className="text-blue-600">Klanten Zeggen</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ontdek waarom meer dan 500+ tevreden klanten voor MARIOmax hebben gekozen.
              Lees hun ervaringen en zie waarom wij de beste keuze zijn voor uw project.
            </p>
          </div>
          
          {/* Auto-scrolling testimonials */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex animate-scroll space-x-6 hover:pause" style={{
                 animation: 'scroll 60s linear infinite',
                 width: 'calc(400px * 10)'
               }}>
                <TestimonialCard 
                  name="Jan van der Berg" 
                  location="Zaandam" 
                  rating={5} 
                  text="Uitstekend werk geleverd bij de verbouwing van onze keuken. Professioneel, netjes en binnen budget. Zeker een aanrader!" 
                />
                <TestimonialCard 
                  name="Maria Jansen" 
                  location="Amsterdam" 
                  rating={5} 
                  text="MARIOmax heeft onze badkamer volledig gerenoveerd. Het resultaat overtrof onze verwachtingen. Vakmanschap van hoge kwaliteit!" 
                />
                <TestimonialCard 
                  name="Peter de Vries" 
                  location="Purmerend" 
                  rating={5} 
                  text="Snelle service en eerlijke prijzen. De nieuwe ramen en deuren zijn perfect geïnstalleerd. Zeer tevreden met het eindresultaat." 
                />
                <TestimonialCard 
                  name="Saskia Bakker" 
                  location="Haarlem" 
                  rating={5} 
                  text="Fantastische ervaring! De timmerwerken zijn vakkundig uitgevoerd en het team was zeer vriendelijk en betrouwbaar." 
                />
                <TestimonialCard 
                  name="Dirk Hendriks" 
                  location="Alkmaar" 
                  rating={5} 
                  text="Onze zolderkamer is prachtig verbouwd. Goede communicatie, kwaliteit en nette afwerking. Absoluut tevreden!" 
                />
                <TestimonialCard 
                  name="Linda van Dijk" 
                  location="Hoorn" 
                  rating={5} 
                  text="Professionele aanpak van A tot Z. De nieuwe vensterbanken zijn perfect geplaatst. Uitstekende service!" 
                />
                <TestimonialCard 
                  name="Kees Vermeulen" 
                  location="Volendam" 
                  rating={5} 
                  text="Kleine reparaties snel en netjes uitgevoerd. Eerlijke prijzen en betrouwbare service. Zeker een aanrader!" 
                />
                <TestimonialCard 
                  name="Anouk Peters" 
                  location="Edam" 
                  rating={5} 
                  text="De panelen in onze woonkamer zijn prachtig afgewerkt. Vakmanschap van topkwaliteit en zeer tevreden met het resultaat!" 
                />
                <TestimonialCard 
                  name="Rob van Leeuwen" 
                  location="Monnickendam" 
                  rating={5} 
                  text="Uitstekende service bij de renovatie van onze hal. Professioneel team en perfecte afwerking binnen de afgesproken tijd." 
                />
                <TestimonialCard 
                  name="Ingrid Smit" 
                  location="Krommenie" 
                  rating={5} 
                  text="MARIOmax heeft onze verwachtingen overtroffen! Kwaliteit, betrouwbaarheid en vakmanschap in één. Zeer aanbevolen!" 
                />
              </div>
            </div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
          </div>
          
          {/* Statistics */}
           <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-white/95 transition-all duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-800 transition-colors duration-300">500+</div>
                <div className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300">Tevreden Klanten</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-white/95 transition-all duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-800 transition-colors duration-300">98%</div>
                <div className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300">Tevredenheid</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-white/95 transition-all duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-800 transition-colors duration-300">5★</div>
                <div className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300">Gemiddelde Score</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-white/95 transition-all duration-300 cursor-pointer group">
                <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-800 transition-colors duration-300">24/7</div>
                <div className="text-gray-600 group-hover:text-blue-700 transition-colors duration-300">Bereikbaarheid</div>
              </div>
            </div>
        </div>
        
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes scroll {
               0% {
                 transform: translateX(0);
               }
               100% {
                 transform: translateX(calc(-400px * 5));
               }
             }
             .animate-scroll {
               animation: scroll 60s linear infinite;
             }
             .animate-scroll:hover {
               animation-play-state: paused;
             }
          `
        }} />
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -translate-y-48 -translate-x-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-15 translate-y-32 translate-x-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Neem <span className="text-blue-600">Contact Op</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Heeft u een project in gedachten? Neem vrijblijvend contact met ons op voor een 
              <span className="font-semibold text-blue-700">persoonlijk advies</span> en 
              <span className="font-semibold text-blue-700">offerte op maat</span>.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100">
                <span className="text-blue-700 font-medium">✓ Gratis advies</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100">
                <span className="text-blue-700 font-medium">✓ Snelle reactie</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100">
                <span className="text-blue-700 font-medium">✓ Vakmanschap</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-blue-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Stuur ons een bericht</h3>
                  <p className="text-gray-600">We nemen binnen 24 uur contact met u op</p>
                </div>
                <ContactForm />
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 group hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Telefoon</h3>
                      <p className="text-gray-500 text-sm">Direct contact</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 mb-2">+31 6 18 79 33 75</p>
                  <p className="text-gray-600 bg-blue-50 px-3 py-2 rounded-lg text-sm">
                    📞 Bereikbaar van maandag t/m vrijdag van 08:00 - 18:00
                  </p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 group hover:scale-105">
                   <div className="flex items-center mb-4">
                     <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                       <Mail className="text-white" size={24} />
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">E-mail</h3>
                       <p className="text-gray-500 text-sm">Schriftelijk contact</p>
                     </div>
                   </div>
                   <p className="text-lg font-semibold text-gray-700 mb-2">contact@mariomax.nl</p>
                   <p className="text-gray-600 bg-blue-50 px-3 py-2 rounded-lg text-sm">
                     ⚡ Wij reageren binnen 24 uur op uw e-mail
                   </p>
                 </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 group hover:scale-105">
                   <div className="flex items-center mb-4">
                     <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                       <MapPin className="text-white" size={24} />
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Werkgebied</h3>
                       <p className="text-gray-500 text-sm">Onze locatie</p>
                     </div>
                   </div>
                   <p className="text-lg font-semibold text-gray-700 mb-2">Zaandam en omgeving</p>
                   <p className="text-gray-600 bg-blue-50 px-3 py-2 rounded-lg text-sm">
                     🚗 Werkzaam binnen een straal van 100 km
                   </p>
                 </div>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 group">
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Vind ons op de kaart</h4>
                  </div>
                  <div className="relative overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-300">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38394.49932861029!2d4.7886!3d52.4389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5fb4b7c3b8b1d%3A0x2b3b4b4b4b4b4b4b!2sZaandam!5e0!3m2!1snl!2snl!4v1234567890123" 
                      width="100%" 
                      height="180" 
                      style={{
                        border: 0
                      }} 
                      allowFullScreen 
                      loading="lazy" 
                      title="MARIOmax location" 
                      className="rounded-xl"
                    ></iframe>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}