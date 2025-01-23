import { Loader } from 'lucide-react';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="flex items-center justify-center bg-white rounded-full p-6 shadow-lg animate-bounce">
        <Loader className="animate-spin h-16 w-16 text-blue-500" />
      </div>
      <p className="mt-6 text-lg font-medium text-gray-600 tracking-wide animate-pulse">
        Loading<span className="animate-pulse">...</span>
      </p>
    </div>
  );
};

export default LoadingSpinner;
