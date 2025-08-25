import React, { lazy } from 'react';
import { ChevronRight, Home as HomeIcon, Hammer, PaintBucket, Star, Phone, Mail, MapPin } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { ContactForm } from '../components/ContactForm';
export function Home() {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
      }}></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
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
      </section>
      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="MARIOmax werkplaats" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Over MARIOmax
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                MARIOmax is een ervaren bouw- en timmerbedrijf gevestigd in
                Zaandam. Met jarenlange ervaring in de bouwsector bieden wij
                hoogwaardige diensten aan voor zowel particuliere als zakelijke
                klanten.
              </p>
              <p className="text-gray-600 mb-6">
                Onze missie is om kwaliteit, betrouwbaarheid en vakmanschap te
                leveren bij elk project. Of het nu gaat om kleine renovaties of
                grotere bouwprojecten, wij staan garant voor een professioneel
                resultaat.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <ChevronRight size={20} className="text-blue-600 mr-2" />
                  <span>Meer dan 15 jaar ervaring in de bouwsector</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight size={20} className="text-blue-600 mr-2" />
                  <span>Gecertificeerde vakmensen</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight size={20} className="text-blue-600 mr-2" />
                  <span>
                    Werkzaam binnen een straal van 100 km rond Zaandam
                  </span>
                </li>
                <li className="flex items-center text-gray-600">
                  <ChevronRight size={20} className="text-blue-600 mr-2" />
                  <span>Klanttevredenheid staat voorop</span>
                </li>
              </ul>
              <a href="#services" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Ontdek Onze Diensten
              </a>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title="Algemene Bouwwerkzaamheden" description="Van fundament tot dak, wij verzorgen alle aspecten van algemene bouwwerkzaamheden met precisie en vakmanschap." icon={<HomeIcon className="text-blue-600" size={24} />} imageUrl="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" />
            <ServiceCard title="Timmerwerk en Schrijnwerk" description="Specialistisch timmerwerk voor zowel binnen als buiten, met oog voor detail en duurzame materialen." icon={<div className="text-blue-600" size={24} />} imageUrl="https://images.unsplash.com/photo-1601564267677-a36d03ec2be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" />
            <ServiceCard title="Ramen, Deuren en Vensterbanken" description="Professionele installatie van ramen, deuren en vensterbanken voor een betere isolatie en uitstraling van uw woning." icon={<Hammer className="text-blue-600" size={24} />} imageUrl="https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" />
            <ServiceCard title="Kleine Renovaties" description="Van laminaatvloeren tot wandpanelen en kleine reparaties, wij maken uw renovatieprojecten compleet." icon={<PaintBucket className="text-blue-600" size={24} />} imageUrl="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" />
          </div>
          <div className="mt-12 text-center">
            <a href="#gallery" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
              Bekijk Ons Portfolio
            </a>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Ons Portfolio
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bekijk enkele van onze afgeronde projecten. Elk project toont ons
              vakmanschap en toewijding aan kwaliteit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(item => <div key={item} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img src={`https://source.unsplash.com/random/600x400?construction,carpentry&sig=${item}`} alt={`Project ${item}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              </div>)}
          </div>
          <div className="mt-12 text-center">
            <a href="#gallery" className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors">
              Bekijk Meer Projecten
            </a>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Wat Onze Klanten Zeggen
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ontdek waarom onze klanten tevreden zijn met onze diensten en
              werkwijze.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard name="Jan de Vries" role="Huiseigenaar" quote="MARIOmax heeft onze keuken volledig gerenoveerd. Zeer tevreden met het resultaat en de professionele aanpak." rating={5} />
            <TestimonialCard name="Laura Jansen" role="Interieurontwerper" quote="Al jaren werk ik samen met MARIOmax voor mijn klantprojecten. Hun timmerwerk is van topkwaliteit en ze denken altijd mee." rating={5} />
            <TestimonialCard name="Peter Bakker" role="Projectmanager" quote="Voor ons kantoorpand heeft MARIOmax alle interne verbouwingen verzorgd. Op tijd, binnen budget en met uitstekende kwaliteit." rating={4} />
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Neem Contact Op
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Heeft u een vraag of wilt u een offerte aanvragen? Neem contact
              met ons op en we reageren zo snel mogelijk.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ContactForm />
            </div>
            <div>
              <div className="bg-gray-100 p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Contactgegevens
                </h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center text-gray-600">
                    <Phone size={20} className="text-blue-600 mr-3" />
                    <span>+31 6 12345678</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Mail size={20} className="text-blue-600 mr-3" />
                    <span>info@mariomax.nl</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <MapPin size={20} className="text-blue-600 mr-3 mt-1" />
                    <span>
                      Zaandam, Nederland
                      <br />
                      Werkgebied: binnen 100 km
                    </span>
                  </li>
                </ul>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Locatie
                </h3>
                <div className="w-full h-64 bg-gray-300 rounded-lg">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38857.35077413403!2d4.789511637535392!3d52.44169248377881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5fbfd65154877%3A0x4039d80b220c7b0!2sZaandam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1631107273271!5m2!1sen!2sus" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" title="MARIOmax location" className="rounded-lg"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}