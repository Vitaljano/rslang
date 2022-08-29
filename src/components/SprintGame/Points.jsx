import { useEffect, useState } from 'react';

function Points({ level }) {
  const [points, setPoint] = useState(10);

  useEffect(() => {
    if (level === 1) {
      setPoint(10);
    }
    if (level === 2) {
      setPoint(30);
    }
    if (level === 3) {
      setPoint(40);
    }
    if (level === 4) {
      setPoint(50);
    }
  }, [level]);
  return (
    <div className="w-16 h-16 text-2xl font-medium bg-white rounded-full flex justify-center items-center">
      {points}
    </div>
  );
}

export default Points;
