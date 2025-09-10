import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-4 border-t-cyan-400 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-4 border-r-blue-400 rounded-full animate-spin animation-delay-75"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;