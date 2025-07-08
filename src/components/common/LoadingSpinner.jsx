import React from 'react';

const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="loading-spinner"></div>
        <p className="text-gray-600 mt-4">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;