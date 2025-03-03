"use client";

import { useState, useEffect } from "react";

import stateCapitals from "@/data/state_capitals.json";
import countryCapitals from "@/data/country_capitals.json";
import getTimeOffset from "@/utils/getTimeOffset";

export default function Time() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [location, setLocation] = useState<string>("Loading...");
  const [timeZoneOffset, setTimeZoneOffset] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Use the server action to get location data
    const fetchLocationData = async () => {
      try {
        const response = await fetch("https://geolocation-db.com/json/");
        const data = await response.json();

        if (data.country_code === "US" && data.state) {
          const stateKey = data.state as keyof typeof stateCapitals;
          setLocation(stateCapitals[stateKey]);
        } else {
          const countryKey = data.country_name as keyof typeof countryCapitals;
          setLocation(countryCapitals[countryKey]);
        }

        setTimeZoneOffset(getTimeOffset(data.longitude));

        if (data.error) {
          setError(data.error);
          console.warn("Location data warning:", data.error);
        }
      } catch (err) {
        console.error("Failed to fetch location data:", err);
        setError("Failed to load location data");
        setLocation("London");
      }
    };

    fetchLocationData();

    // Update time every 100ms
    const interval = setInterval(() => {
      const now = new Date();

      // Apply timezone offset if available
      if (timeZoneOffset !== 0) {
        // Get UTC time and add the estimated offset
        const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
        const offsetTime = new Date(utcTime + 3600000 * timeZoneOffset);
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
      {error && <p className="text-red-500 text-xs hidden">Error: {error}</p>}
    </div>
  );
}
