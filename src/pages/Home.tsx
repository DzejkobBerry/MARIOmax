import React, { useState } from 'react';
import { ChevronRight, Home as HomeIcon, Hammer, PaintBucket, Star, Phone, Mail, MapPin, Camera, Eye } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { ContactForm } from '../components/ContactForm';
import { GalleryCard } from '../components/GalleryCard';
import { GalleryModal } from '../components/GalleryModal';

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
      <section className="relative bg-blue-700 text-white">
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
        />
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
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Onze Diensten
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bij MARIOmax bieden wij een breed scala aan bouw- en
              timmerdiensten. Ontdek hieronder wat wij voor u kunnen betekenen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Algemene Bouwwerkzaamheden" 
              description="Volledige bouwprojecten van fundament tot dak. Nieuwbouw, uitbreidingen en structurele aanpassingen met vakmanschap en precisie." 
              icon={<HomeIcon className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Timmerwerk en Schrijnwerk" 
              description="Professioneel timmerwerk en schrijnwerk. Maatwerk kasten, trappen, lambrisering en alle houten constructies binnen en buiten." 
              icon={<Hammer className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Ramen & Deuren" 
              description="Installatie en vervanging van ramen en deuren. Kunststof, hout en aluminium frames voor optimale isolatie en veiligheid." 
              icon={<PaintBucket className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Ramen & Vensterbanken" 
              description="Montage van binnen- en buitenvensterbanken. Natuursteen, composiet en houten vensterbanken op maat gemaakt en geïnstalleerd." 
              icon={<Star className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Kleine Reparaties" 
              description="Kleine reparaties en onderhoudswerkzaamheden. Van het ophangen van schilderijen tot het repareren van kleine gebreken in huis." 
              icon={<Hammer className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Panelen & Afwerking" 
              description="Installatie van wandpanelen, plafondpanelen en decoratieve afwerkingen. Laminaat, PVC en houten panelen voor elke ruimte." 
              icon={<PaintBucket className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Galerie Onze Werken
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Bekijk onze uitgevoerde projecten en deel uw eigen ervaringen. Upload foto's van uw project en inspireer andere klanten.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* First row */}
            <GalleryCard 
              imageUrl="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              title="Keuken Renovatie"
              description="Volledige keukenrenovatie in Zaandam - Modern design met hoogwaardige afwerking"
              onClick={() => handleImageClick({
                imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
                title: "Keuken Renovatie",
                description: "Volledige keukenrenovatie in Zaandam - Modern design met hoogwaardige afwerking"
              })}
            />
            
            <GalleryCard 
              imageUrl="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              title="Maatwerk Kasten"
              description="Op maat gemaakte inbouwkasten en timmerwerk in Alkmaar"
              onClick={() => handleImageClick({
                imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
                title: "Maatwerk Kasten",
                description: "Op maat gemaakte inbouwkasten en timmerwerk in Alkmaar"
              })}
            />
            
            <GalleryCard 
              imageUrl="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              title="Badkamer Verbouwing"
              description="Luxe badkamer met natuursteen en maatwerk timmerwerk in Amsterdam"
              onClick={() => handleImageClick({
                imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
                title: "Badkamer Verbouwing",
                description: "Luxe badkamer met natuursteen en maatwerk timmerwerk in Amsterdam"
              })}
            />
            
            {/* Second row */}
            <GalleryCard 
              imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              title="Ramen & Deuren"
              description="Nieuwe kunststof ramen en voordeur installatie in Purmerend"
              onClick={() => handleImageClick({
                imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
                title: "Ramen & Deuren",
                description: "Nieuwe kunststof ramen en voordeur installatie in Purmerend"
              })}
            />
            <GalleryCard 
              imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              title="Vensterbanken"
              description="Natuursteen vensterbanken op maat geplaatst in Haarlem"
              onClick={() => handleImageClick({
                imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
                title: "Vensterbanken",
                description: "Natuursteen vensterbanken op maat geplaatst in Haarlem"
              })}
            />
            <GalleryCard 
              imageUrl="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              title="Maatwerk Kasten"
              description="Op maat gemaakte inbouwkasten en timmerwerk in Alkmaar"
              onClick={() => handleImageClick({
                imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
                title: "Maatwerk Kasten",
                description: "Op maat gemaakte inbouwkasten en timmerwerk in Alkmaar"
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
                    const galleryImages = [
                      {
                        imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
                        title: "Keuken Renovatie",
                        description: "Volledige keukenrenovatie in Zaandam - Modern design met hoogwaardige afwerking"
                      }
                    ];
                    setSelectedImage(galleryImages[0]);
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Wat Onze Klanten Zeggen
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
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

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Onze Diensten
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bij MARIOmax bieden wij een breed scala aan bouw- en
              timmerdiensten. Ontdek hieronder wat wij voor u kunnen betekenen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Algemene Bouwwerkzaamheden" 
              description="Volledige bouwprojecten van fundament tot dak. Nieuwbouw, uitbreidingen en structurele aanpassingen met vakmanschap en precisie." 
              icon={<HomeIcon className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Timmerwerk en Schrijnwerk" 
              description="Professioneel timmerwerk en schrijnwerk. Maatwerk kasten, trappen, lambrisering en alle houten constructies binnen en buiten." 
              icon={<Hammer className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Ramen & Deuren" 
              description="Installatie en vervanging van ramen en deuren. Kunststof, hout en aluminium frames voor optimale isolatie en veiligheid." 
              icon={<PaintBucket className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Ramen & Vensterbanken" 
              description="Montage van binnen- en buitenvensterbanken. Natuursteen, composiet en houten vensterbanken op maat gemaakt en geïnstalleerd." 
              icon={<Star className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Kleine Reparaties" 
              description="Kleine reparaties en onderhoudswerkzaamheden. Van het ophangen van schilderijen tot het repareren van kleine gebreken in huis." 
              icon={<Hammer className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
            <ServiceCard 
              title="Panelen & Afwerking" 
              description="Installatie van wandpanelen, plafondpanelen en decoratieve afwerkingen. Laminaat, PVC en houten panelen voor elke ruimte." 
              icon={<PaintBucket className="text-blue-600" size={24} />} 
              imageUrl="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Neem Contact Op
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Heeft u een project in gedachten? Neem vrijblijvend contact met ons
              op voor een persoonlijk advies en offerte op maat.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ContactForm />
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Phone className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Telefoon</h3>
                </div>
                <p className="text-gray-600">+31 6 18 79 33 75</p>
                <p className="text-sm text-gray-500 mt-1">
                  Bereikbaar van maandag t/m vrijdag van 08:00 - 18:00
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Mail className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">E-mail</h3>
                </div>
                <p className="text-gray-600">contact@mariomax.nl</p>
                <p className="text-sm text-gray-500 mt-1">
                  Wij reageren binnen 24 uur op uw e-mail
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <MapPin className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Locatie</h3>
                </div>
                <p className="text-gray-600">Zaandam en omgeving</p>
                <p className="text-sm text-gray-500 mt-1">
                  Werkzaam binnen een straal van 100 km
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38394.49932861029!2d4.7886!3d52.4389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5fb4b7c3b8b1d%3A0x2b3b4b4b4b4b4b4b!2sZaandam!5e0!3m2!1snl!2snl!4v1234567890123" 
                  width="100%" 
                  height="200" 
                  style={{
                    border: 0
                  }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="MARIOmax location" 
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}