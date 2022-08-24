import { useState, useEffect } from 'react';

function PreLoader({ startGame }) {
  const [countDown, setCountDown] = useState(3); // 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (countDown === 0) {
        startGame();
        clearTimeout(timer);
        return;
      }

      setCountDown((count) => {
        return count - 1;
      });
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="animate-pulse w-40 h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-white rounded-full flex   justify-center items-center font-medium absolute opacity-100   z-40 bg-success">
      {countDown}
    </div>
  );
}
export default PreLoader;
