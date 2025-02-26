"use client";

import { useState, useEffect } from "react";

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

// Map of US states to their capitals
const stateCapitals: Record<string, string> = {
  "Alabama": "Montgomery",
  "Alaska": "Juneau",
  "Arizona": "Phoenix",
  "Arkansas": "Little Rock",
  "California": "Sacramento",
  "Colorado": "Denver",
  "Connecticut": "Hartford",
  "Delaware": "Dover",
  "Florida": "Tallahassee",
  "Georgia": "Atlanta",
  "Hawaii": "Honolulu",
  "Idaho": "Boise",
  "Illinois": "Springfield",
  "Indiana": "Indianapolis",
  "Iowa": "Des Moines",
  "Kansas": "Topeka",
  "Kentucky": "Frankfort",
  "Louisiana": "Baton Rouge",
  "Maine": "Augusta",
  "Maryland": "Annapolis",
  "Massachusetts": "Boston",
  "Michigan": "Lansing",
  "Minnesota": "Saint Paul",
  "Mississippi": "Jackson",
  "Missouri": "Jefferson City",
  "Montana": "Helena",
  "Nebraska": "Lincoln",
  "Nevada": "Carson City",
  "New Hampshire": "Concord",
  "New Jersey": "Trenton",
  "New Mexico": "Santa Fe",
  "New York": "Albany",
  "North Carolina": "Raleigh",
  "North Dakota": "Bismarck",
  "Ohio": "Columbus",
  "Oklahoma": "Oklahoma City",
  "Oregon": "Salem",
  "Pennsylvania": "Harrisburg",
  "Rhode Island": "Providence",
  "South Carolina": "Columbia",
  "South Dakota": "Pierre",
  "Tennessee": "Nashville",
  "Texas": "Austin",
  "Utah": "Salt Lake City",
  "Vermont": "Montpelier",
  "Virginia": "Richmond",
  "Washington": "Olympia",
  "West Virginia": "Charleston",
  "Wisconsin": "Madison",
  "Wyoming": "Cheyenne",
  "District of Columbia": "Washington D.C."
};

// Map of countries to their capitals
const countryCapitals: Record<string, string> = {
  "United States": "Washington D.C.",
  "United Kingdom": "London",
  "France": "Paris",
  "Germany": "Berlin",
  "Italy": "Rome",
  "Spain": "Madrid",
  "Canada": "Ottawa",
  "Australia": "Canberra",
  "Japan": "Tokyo",
  "China": "Beijing",
  "India": "New Delhi",
  "Brazil": "Brasília",
  "Russia": "Moscow",
  // Add more as needed
};

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
          locationName = stateCapitals[data.state] || data.city;
        } 
        // For other countries, use country capitals
        else if (data.country_name && countryCapitals[data.country_name]) {
          locationName = countryCapitals[data.country_name];
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
