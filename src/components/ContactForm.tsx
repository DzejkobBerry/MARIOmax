import React, { useState } from 'react';
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // In a real application, you would send this data to your backend
  };
  if (isSubmitted) {
    return <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-8 text-center shadow-lg">
        <div className="mb-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✓</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-green-700 mb-3">
          Bedankt voor uw bericht!
        </h3>
        <p className="text-green-600 mb-6 text-lg">
          We nemen binnen 24 uur contact met u op.
        </p>
        <button onClick={() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }} className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          📝 Nieuw bericht
        </button>
      </div>;
  }
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group">
          <label htmlFor="name" className="block text-gray-700 mb-2 font-semibold group-focus-within:text-blue-600 transition-colors">
            👤 Naam *
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300" 
            placeholder="Uw volledige naam"
            required 
          />
        </div>
        <div className="group">
          <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold group-focus-within:text-blue-600 transition-colors">
            ✉️ Email *
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300" 
            placeholder="uw.email@voorbeeld.nl"
            required 
          />
        </div>
      </div>
      
      <div className="group">
        <label htmlFor="phone" className="block text-gray-700 mb-2 font-semibold group-focus-within:text-blue-600 transition-colors">
          📞 Telefoon
        </label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300" 
          placeholder="06 12 34 56 78"
        />
      </div>
      
      <div className="group">
        <label htmlFor="subject" className="block text-gray-700 mb-2 font-semibold group-focus-within:text-blue-600 transition-colors">
          🏗️ Onderwerp *
        </label>
        <select 
          id="subject" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300 bg-white" 
          required
        >
          <option value="">Selecteer een onderwerp</option>
          <option value="Algemene bouwwerkzaamheden">🏠 Algemene bouwwerkzaamheden</option>
          <option value="Timmerwerk en schrijnwerk">🔨 Timmerwerk en schrijnwerk</option>
          <option value="Ramen, deuren en vensterbanken">🪟 Ramen, deuren en vensterbanken</option>
          <option value="Kleine renovaties">🔧 Kleine renovaties</option>
          <option value="Overig">💬 Overig</option>
        </select>
      </div>
      
      <div className="group">
        <label htmlFor="message" className="block text-gray-700 mb-2 font-semibold group-focus-within:text-blue-600 transition-colors">
          💭 Bericht *
        </label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          rows={5} 
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300 resize-none" 
          placeholder="Beschrijf uw project of vraag in detail..."
          required
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
      >
        🚀 Verstuur Bericht
      </button>
      
      <p className="text-center text-sm text-gray-500 mt-4">
        ✓ Gratis advies • ✓ Binnen 24 uur reactie • ✓ Geen verplichtingen
      </p>
    </form>;
}