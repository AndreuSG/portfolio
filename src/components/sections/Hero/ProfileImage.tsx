import React from 'react';
import profileImg from '../../../assets/img/A.png';

export const ProfileImage: React.FC = () => {
  return (
    <img 
      src={profileImg} 
      alt="Codiara Logo" 
      className="w-16 h-16 object-cover rounded-lg mb-6 border-2 border-purple"
    />
  );
};