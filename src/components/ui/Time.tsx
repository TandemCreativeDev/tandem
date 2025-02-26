"use client";

import { useState, useEffect } from "react";
export default function Time() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Set initial time immediately
    setCurrentTime(new Date().toLocaleTimeString());
    
    // Update every second instead of every 100ms
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex justify-start gap-5">
      <p>London</p>
      <p>{currentTime}</p>
    </div>
  );
}
