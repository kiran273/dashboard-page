import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ showProfile = true }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-slate-800 text-white px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">S</span>
          </div>
          <span className="font-semibold text-sm sm:text-base">SWIFT</span>
        </div>
        {showProfile && (
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => navigate('/profile')}
              className="flex items-center space-x-1 sm:space-x-2 hover:bg-slate-700 px-1 sm:px-2 py-1 rounded transition-colors"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">EH</span>
              </div>
              <span className="text-xs sm:text-sm hidden xs:inline">Ervin Howell</span>
            </button>
          </div>
        )}
        {!showProfile && (
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">EH</span>
            </div>
            <span className="text-xs sm:text-sm hidden xs:inline">Ervin Howell</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;