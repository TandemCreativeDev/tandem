"use client";

import { useState, useEffect } from "react";
import { getLocationData } from "@/actions/getLocationData";

export default function Time() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [location, setLocation] = useState<string>("Loading...");
  const [timeZoneOffset, setTimeZoneOffset] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Use the server action to get location data
    const fetchLocationData = async () => {
      try {
        const result = await getLocationData();
        
        setLocation(result.locationName);
        setTimeZoneOffset(result.timeZoneOffset);
        
        if (result.error) {
          setError(result.error);
          console.warn("Location data warning:", result.error);
        }
      } catch (err) {
        console.error("Failed to fetch location data:", err);
        setError("Failed to load location data");
        setLocation("London"); // Default fallback
      }
    };

    fetchLocationData();

    // Update time every 100ms
    const interval = setInterval(() => {
      const now = new Date();
      
      // Apply timezone offset if available
      if (timeZoneOffset !== 0) {
        // Get UTC time and add the estimated offset
        const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
        const offsetTime = new Date(utcTime + (3600000 * timeZoneOffset));
        setCurrentTime(offsetTime.toLocaleTimeString());
      } else {
        // Just use local time if no offset available
        setCurrentTime(now.toLocaleTimeString());
      }
    }, 100);

    return () => clearInterval(interval);
  }, [timeZoneOffset]);

  return (
    <div className="flex justify-start gap-5">
      <p>{location}</p>
      <p>{currentTime}</p>
      {error && (
        <p className="text-red-500 text-xs hidden">Error: {error}</p>
      )}
    </div>
  );
}
