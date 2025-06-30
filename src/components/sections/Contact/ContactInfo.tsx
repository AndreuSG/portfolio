import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslations } from '../../../translations';

export const ContactInfo: React.FC = () => {
  const translations = useTranslations();

  const contactInfo = [
    {
      icon: Mail,
      label: translations.contact.info.email,
      value: 'andreu.s.g30@gmail.com',
      link: 'mailto:andreu.s.g30@gmail.com',
    },
    {
      icon: Phone,
      label: translations.contact.info.phone,
      value: '+34 674 53 19 46',
      link: 'tel:+34674531946',
    },
    {
      icon: MapPin,
      label: translations.contact.info.location,
      value: 'Barcelona, Spain',
      link: '#',
    },
  ];

  return (
    <>
      <h3 className="text-2xl font-bold mb-6">{translations.contact.info.title}</h3>
      <div className="space-y-6 mb-10">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black-100 border border-gray-800">
              <item.icon className="text-purple" size={20} />
            </div>
            <div>
              <h4 className="text-lg font-semibold">{item.label}</h4>
              <a 
                href={item.link} 
                className="text-gray-400 hover:text-purple transition-colors"
              >
                {item.value}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};