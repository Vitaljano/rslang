import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center space-x-2 mt-5">
      <div className="w-20 h-20  animate-spin rounded-full border-dashed border-4 "></div>
    </div>
  );
};

export default Loader;
