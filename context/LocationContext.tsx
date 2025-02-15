import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { Coordinates } from "@/app/utils/interfaces";

// Create the context
const LocationContext = createContext<any>(null);

// Create a provider component
export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState<Coordinates>({ latitude: null, longitude: null });
  const [restaurants, setRestaurants] = useState([]);

  const LocationFetch = async (location?: string) => {
    if (location) {
      // User entered a location
      try {
        const geoResponse = await axios.get("https://nominatim.openstreetmap.org/search", {
          params: {
            q: location,
            format: "json",
            limit: 1,
          },
        });
        const { lat, lon } = geoResponse.data[0];
        setCoordinates({ latitude: parseFloat(lat), longitude: parseFloat(lon) });
        setLocation(location); // Update the location to user input
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    } else {
      // If no location is provided, use geolocation to fetch location
      if (typeof window !== "undefined" && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await axios.get("https://nominatim.openstreetmap.org/reverse", {
            params: {
              format: "json",
              lat: latitude,
              lon: longitude,
            },
          });
          const data = response.data;
          if (response.status === 200) {
            let address = data.display_name
              .split(",")
              .filter((part: string) => !/\d{5,}/.test(part)) // Removes parts with 5 or more digits
              .join(",");
            setLocation(address);
            setCoordinates({ latitude, longitude });
          } else {
            console.log("Geolocation not supported or running on the server");
          }
        });
      }
    }
    fetchRestaurants();
  };

  const fetchRestaurants = async () => {
    if (coordinates.latitude && coordinates.longitude) {
      try {
        const response = await axios.get("https://api.example.com/restaurants", {
          params: {
            lat: coordinates.latitude,
            lon: coordinates.longitude,
          },
        });
        setRestaurants(response.data); // Set the fetched restaurants data
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    }
  };

  return (
    <LocationContext.Provider value={{ location, LocationFetch, coordinates, restaurants }}>
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook to use the location context
export const useLocation = () => {
  return useContext(LocationContext);
};
