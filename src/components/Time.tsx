"use client";
import { useState, useEffect } from "react";
export default function Time() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex justify-start  gap-5">
      <p>London</p>
      <p>{currentTime}</p>
    </div>
  );
}
