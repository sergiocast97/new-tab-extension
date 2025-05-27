import { useState, useEffect } from 'react';

export default function useTime() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  return [date];
}
