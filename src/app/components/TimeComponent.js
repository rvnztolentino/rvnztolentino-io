"use client"

import { useEffect, useState } from 'react';

const TimeComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-dark-gray">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default TimeComponent;
