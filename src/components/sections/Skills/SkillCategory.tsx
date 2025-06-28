import React from 'react';
import { Users, Code, Server, Database } from 'lucide-react';
import { useTranslations } from '../../../translations';

interface SkillCategoryProps {
  category: 'leadership' | 'frontend' | 'backend' | 'devops';
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'leadership': return Users;
    case 'frontend': return Code;
    case 'backend': return Server;
    case 'devops': return Database;
    default: return Code;
  }
};

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  const translations = useTranslations();
  const Icon = getCategoryIcon(category);
  const categoryData = translations.skills[category];

  return (
    <div className="p-4 sm:p-6 border border-gray-800 rounded-xl bg-black-100 hover:shadow-purple transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="text-purple" size={24} />
        <h3 className="text-lg sm:text-xl font-bold">{categoryData.title}</h3>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {categoryData.skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-sm sm:text-base leading-tight">{skill.name}</span>
              <span className="text-xs sm:text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-black-50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-purple rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};