import { useState, useEffect } from 'react';
function Timer() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds === 0) {
        clearTimeout(timer);
        return;
      }

      setSeconds((count) => {
        return count - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <>
      <div className="w-16 h-16 text-2xl font-medium bg-white rounded-full flex justify-center items-center">
        {seconds}
      </div>
    </>
  );
}

export default Timer;
