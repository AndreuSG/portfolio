import React from 'react';

export const ProfileSection: React.FC = () => {
  return (
    <div className="relative mb-12 group">
      <div className="absolute -inset-1 bg-gradient-purple rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
      <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-purple">
        <img 
          src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Profile" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
};