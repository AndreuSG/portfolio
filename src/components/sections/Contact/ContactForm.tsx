import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { useTranslations } from '../../../translations';

export const ContactForm: React.FC = () => {
  const translations = useTranslations();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(translations.contact.form.successMessage);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">{translations.contact.form.title}</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <User className="absolute top-3 left-3 text-gray-400" size={18} />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={translations.contact.form.name}
            required
            className="w-full pl-10 pr-4 py-3 bg-black-100 border border-gray-800 rounded-lg focus:border-purple focus:outline-none transition-colors"
          />
        </div>
        
        <div className="relative">
          <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={translations.contact.form.email}
            required
            className="w-full pl-10 pr-4 py-3 bg-black-100 border border-gray-800 rounded-lg focus:border-purple focus:outline-none transition-colors"
          />
        </div>
        
        <div className="relative">
          <MessageSquare className="absolute top-3 left-3 text-gray-400" size={18} />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={translations.contact.form.subject}
            required
            className="w-full pl-10 pr-4 py-3 bg-black-100 border border-gray-800 rounded-lg focus:border-purple focus:outline-none transition-colors"
          />
        </div>
        
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={translations.contact.form.message}
            required
            rows={5}
            className="w-full px-4 py-3 bg-black-100 border border-gray-800 rounded-lg focus:border-purple focus:outline-none transition-colors"
          ></textarea>
        </div>
        
        <button type="submit" className="btn-primary w-full flex items-center justify-center">
          <Send size={18} className="mr-2" />
          {translations.contact.form.send}
        </button>
      </form>
    </div>
  );
};