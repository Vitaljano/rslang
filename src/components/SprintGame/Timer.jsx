import { useState, useEffect } from 'react';

function Timer({ start, end }) {
  const [seconds, setSeconds] = useState(60); //1 minute timer;

  useEffect(() => {
    if (start) {
      const timer = setTimeout(() => {
        if (seconds === 0) {
          end(true);
          clearTimeout(timer);
          return;
        }

        setSeconds((count) => {
          return count - 1;
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
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
