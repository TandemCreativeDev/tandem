"use server";

import { z } from "zod";

// Define the shape of the geolocation data using Zod
const GeoLocationSchema = z.object({
  country_code: z.string().optional(),
  country_name: z.string().optional(),
  city: z.string().optional(),
  postal: z.number().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  IPv4: z.string().optional(),
  state: z.string().optional(),
});

export type GeoLocation = z.infer<typeof GeoLocationSchema>;

export type LocationResult = {
  locationName: string;
  timeZoneOffset: number;
  error?: string;
};

export async function getLocationData(): Promise<LocationResult> {
  try {
    // Import the capitals data
    const stateCapitals = (await import("@/data/state_capitals.json")).default;
    const countryCapitals = (await import("@/data/country_capitals.json")).default;
    
    // Fetch user's geolocation
    const response = await fetch("https://geolocation-db.com/json", {
      // Ensure fresh data and don't cache
      cache: "no-store",
      next: { revalidate: 0 }
    });
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const rawData = await response.json();
    
    // Validate the data with Zod
    const result = GeoLocationSchema.safeParse(rawData);
    
    if (!result.success) {
      throw new Error(`Invalid data format: ${result.error.message}`);
    }
    
    const data = result.data;
    let locationName = data.city || "Unknown";
    
    // For US, use state capitals
    if (data.country_code === "US" && data.state) {
      locationName = stateCapitals[data.state] || data.city || "Unknown";
    } 
    // For other countries, use country capitals
    else if (data.country_name) {
      locationName = countryCapitals[data.country_name] || data.city || "Unknown";
    }
    
    // Calculate approximate timezone offset based on longitude
    // This is a rough estimate - each 15 degrees is about 1 hour
    const timeZoneOffset = data.longitude ? Math.round(data.longitude / 15) : 0;
    
    return {
      locationName,
      timeZoneOffset
    };
  } catch (error) {
    console.error("Error fetching location data:", error);
    
    // Return a default value with error information
    return {
      locationName: "London", // Default fallback
      timeZoneOffset: 0,
      error: error instanceof Error ? error.message : "Unknown error occurred"
    };
  }
}
