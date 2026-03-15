"use client";

import { useState, useEffect } from "react";
import { formatTimeForTimezone } from "@/utils/timezoneHelper";

export default function Time() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(formatTimeForTimezone(now, "Europe/London"));
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
