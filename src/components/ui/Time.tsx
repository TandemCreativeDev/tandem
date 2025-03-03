"use client";

import { useState, useEffect } from "react";
import stateCapitals from "@/data/state_capitals.json";
import countryCapitals from "@/data/country_capitals.json";
import { getTimezoneForLocation, formatTimeForTimezone } from "@/utils/timezoneHelper";

const DEFAULT_TIMEZONE = "Europe/London";

export default function Time() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [location, setLocation] = useState<string>("Loading...");
  const [timezone, setTimezone] = useState<string>(DEFAULT_TIMEZONE);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await fetch("https://geolocation-db.com/json/");
        
        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Location API response:", data);
        
        let detectedLocation = "London";
        
        if (data.country_code === "US" && data.state) {
          const stateKey = data.state as keyof typeof stateCapitals;
          if (stateCapitals[stateKey]) {
            detectedLocation = stateCapitals[stateKey];
          } else {
            console.warn(`State capital not found for: ${data.state}`);
          }
        } else if (data.country_name) {
          const countryKey = data.country_name as keyof typeof countryCapitals;
          if (countryCapitals[countryKey]) {
            detectedLocation = countryCapitals[countryKey];
          } else {
            console.warn(`Country capital not found for: ${data.country_name}`);
          }
        }
        
        setLocation(detectedLocation);
        
        const detectedTimezone = getTimezoneForLocation(detectedLocation);
        setTimezone(detectedTimezone);
        console.log(`Location: ${detectedLocation}, Timezone: ${detectedTimezone}`);

        if (data.error) {
          setError(data.error);
          console.warn("Location data warning:", data.error);
        }
      } catch (err) {
        console.error("Failed to fetch location data:", err);
        setError("Failed to load location data");
        setLocation("London");
        setTimezone(DEFAULT_TIMEZONE);
      }
    };

    fetchLocationData();

    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = formatTimeForTimezone(now, timezone);
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="flex justify-start gap-5">
      <p>{location}</p>
      <p>{currentTime}</p>
      {error && <p className="text-red-500 text-xs hidden">Error: {error}</p>}
    </div>
  );
}
