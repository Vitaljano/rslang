import { useState, useEffect } from 'react';

function PreLoader({ startGame, preLoader }) {
  const [countDown, setCountDown] = useState(3); // 3 seconds

  useEffect(() => {
    const prev = localStorage.getItem('totalGames');
    localStorage.setItem('totalGames', Number(prev) + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    if (countDown === 0) {
      startGame(true);
      preLoader(false);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [countDown]);
  return (
    <div className="animate-preloader w-40 h-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-white rounded-full flex   justify-center items-center font-medium absolute opacity-100   z-40 bg-success">
      {countDown}
    </div>
  );
}
export default PreLoader;
