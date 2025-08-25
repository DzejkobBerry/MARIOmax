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
    return <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-green-700 mb-2">
          Bedankt voor uw bericht!
        </h3>
        <p className="text-green-600">
          We nemen zo snel mogelijk contact met u op.
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
      }} className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
          Nieuw bericht
        </button>
      </div>;
  }
  return <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-1">
            Naam *
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email *
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 mb-1">
          Telefoon
        </label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 mb-1">
          Onderwerp *
        </label>
        <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
          <option value="">Selecteer een onderwerp</option>
          <option value="Algemene bouwwerkzaamheden">
            Algemene bouwwerkzaamheden
          </option>
          <option value="Timmerwerk en schrijnwerk">
            Timmerwerk en schrijnwerk
          </option>
          <option value="Ramen, deuren en vensterbanken">
            Ramen, deuren en vensterbanken
          </option>
          <option value="Kleine renovaties">Kleine renovaties</option>
          <option value="Overig">Overig</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 mb-1">
          Bericht *
        </label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors w-full">
        Verstuur Bericht
      </button>
    </form>;
}