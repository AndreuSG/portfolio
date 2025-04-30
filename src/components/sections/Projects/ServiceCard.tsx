import React from 'react';
import { Globe, Cloud, Laptop, Code, Shield, Users } from 'lucide-react';
import { useTranslations } from '../../../translations';

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    features: string[];
    benefits: string[];
  };
}

const getServiceIcon = (id: number) => {
  switch (id) {
    case 1: return Globe;
    case 2: return Cloud;
    case 3: return Laptop;
    case 4: return Users;
    default: return Globe;
  }
};

export const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const translations = useTranslations();
  const ServiceIcon = getServiceIcon(service.id);

  return (
    <div className="group p-6 bg-black-50 border border-gray-800 rounded-xl hover:border-purple transition-all duration-500">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-purple/10 flex items-center justify-center">
          <ServiceIcon className="text-purple" size={24} />
        </div>
        <h3 className="text-xl font-bold">{service.title}</h3>
      </div>
      
      <p className="text-gray-300 mb-6">{service.description}</p>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-3">{translations.services.features}</h4>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-400">
              <Code size={16} className="text-purple" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold mb-3">{translations.services.benefits}</h4>
        <ul className="space-y-2">
          {service.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-400">
              <Shield size={16} className="text-purple" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-800">
        <a 
          href="#contact" 
          className="btn-primary w-full text-center"
        >
          {translations.services.getStarted}
        </a>
      </div>
    </div>
  );
};