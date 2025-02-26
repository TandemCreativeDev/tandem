"use client";

import { useState, useEffect } from "react";
import stateCapitalsData from "@/data/state_capitals.json";
import countryCapitalsData from "@/data/country_capitals.json";

// Type definitions for the imported JSON data
type StateCapitals = Record<string, string>;
type CountryCapitals = Record<string, string>;

// Type assertion for the imported data
const stateCapitals = stateCapitalsData as StateCapitals;
const countryCapitals = countryCapitalsData as CountryCapitals;

interface GeoLocation {
  country_code: string;
  country_name: string;
  city: string;
  postal: number;
  latitude: number;
  longitude: number;
  IPv4: string;
  state: string;
}

export default function Time() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [location, setLocation] = useState<string>("Loading...");
  const [timeZoneOffset, setTimeZoneOffset] = useState<number>(0);

  useEffect(() => {
    // Fetch user's geolocation
    fetch("https://geolocation-db.com/json")
      .then(response => response.json())
      .then((data: GeoLocation) => {
        let locationName = data.city || "Unknown";
        
        // For US, use state capitals
        if (data.country_code === "US" && data.state) {
          const stateKey = data.state as keyof typeof stateCapitals;
          locationName = stateCapitals[stateKey] || data.city;
        } 
        // For other countries, use country capitals
        else if (data.country_name) {
          const countryKey = data.country_name as keyof typeof countryCapitals;
          locationName = countryCapitals[countryKey] || data.city;
        }
        
        setLocation(locationName);
        
        // Calculate approximate timezone offset based on longitude
        // This is a rough estimate - each 15 degrees is about 1 hour
        const estimatedOffset = Math.round(data.longitude / 15);
        setTimeZoneOffset(estimatedOffset);
      })
      .catch(error => {
        console.error("Error fetching location:", error);
        setLocation("London"); // Default fallback
      });

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
    </div>
  );
}
