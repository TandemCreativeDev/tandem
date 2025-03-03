"use client";

import timezoneMappings from "@/data/timezone_mappings.json";

/**
 * Finds the IANA timezone for a given city or location
 * @param location The name of the city/location to find timezone for
 * @returns IANA timezone string (e.g. "America/New_York") or default timezone if not found
 */
export function getTimezoneForLocation(location: string): string {
  const DEFAULT_TIMEZONE = "Europe/London";

  if (!location) {
    return DEFAULT_TIMEZONE;
  }

  const normalisedLocation = location.trim();

  for (const [timezone, locations] of Object.entries(timezoneMappings)) {
    if (locations.includes(normalisedLocation)) {
      return timezone;
    }
  }

  // try a fuzzy match
  for (const [timezone, locations] of Object.entries(timezoneMappings)) {
    for (const mappedLocation of locations) {
      if (
        normalisedLocation.includes(mappedLocation) ||
        mappedLocation.includes(normalisedLocation)
      ) {
        return timezone;
      }
    }
  }

  console.warn(
    `No timezone mapping found for location: ${location}, using default`
  );
  return DEFAULT_TIMEZONE;
}

/**
 * Formats time string based on a location's timezone
 * @param date The date to format
 * @param timezone IANA timezone string
 * @returns Formatted time string
 */
export function formatTimeForTimezone(date: Date, timezone: string): string {
  try {
    return date.toLocaleTimeString(undefined, {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  } catch (error) {
    console.error(`Error formatting time for timezone ${timezone}:`, error);

    return date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  }
}
