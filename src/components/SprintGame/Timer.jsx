import { useState, useEffect } from 'react';

function Timer({ start, end }) {
  const [seconds, setSeconds] = useState(60); //1 minute timer;

  useEffect(() => {
    if (start) {
      const timerEl = document.querySelector('.timer');
      const timer = setTimeout(() => {
        if (seconds === 0) {
          end(true);
          clearTimeout(timer);
          return;
        }
        if (seconds < 10) {
          timerEl.classList.add('animate-pulse');
          if (seconds % 2 === 0) {
            timerEl.classList.remove('bg-white');
            timerEl.classList.add('bg-danger');
          } else {
            timerEl.classList.add('bg-white');
            timerEl.classList.remove('animate-pulse');
          }
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
      <div className="timer duration-700 w-16 h-16 text-2xl font-medium bg-white rounded-full flex justify-center items-center">
        {seconds}
      </div>
    </>
  );
}

export default Timer;
