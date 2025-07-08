import React from 'react';

const ProfileHeader = () => {
  return (
    <div className="flex items-start space-x-4 sm:space-x-6 mb-8 sm:mb-12">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-lg sm:text-xl font-bold text-gray-600">EH</span>
      </div>
      <div className="flex-1">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Ervin Howell</h1>
        <p className="text-gray-500 text-sm sm:text-base">ervinhowell@gmail.com</p>
      </div>
    </div>
  );
};

export default ProfileHeader;