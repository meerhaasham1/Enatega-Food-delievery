import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Restaurant } from "./Restaurant";
import { useState } from "react";
import { useLocation } from "@/context/LocationContext";

export const Main = () => {
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [userLocation, setUserLocation] = useState("");  // State to store user's manually entered location
  const { LocationFetch, coordinates } = useLocation();

  const handleShowRestaurants = () => {
    if (userLocation) {
      LocationFetch();  // Fetch location based on user's manually entered address
      setShowRestaurants(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-indigo-600 p-6">
      {/* Watermark text */}
      <div className="absolute top-1/3 text-center text-5xl text-white opacity-15 font-bold">
        <p>Find Your Favorite Restaurants</p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-lg w-full mx-auto bg-white rounded-xl shadow-lg p-6 space-y-4 md:space-y-0 md:space-x-6">
        
        {/* Address Input Section */}
        <div className="flex items-center w-full md:w-1/2 bg-gray-100 rounded-lg p-3">
          <i className="pi pi-map-marker text-2xl text-gray-700 mr-4"></i>
          <InputText
            value={userLocation}
            onChange={(e) => setUserLocation(e.target.value)}  // Update state as user types
            placeholder="Enter your delivery address"
            className="w-full border-none focus:outline-none text-gray-800 p-3"
          />
        </div>

        {/* Share Location Button (Red) */}
        <Button
          icon="pi pi-location"
          label="Share Location"
          className="mt-4 md:mt-0 w-full md:w-auto bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full shadow-lg"
          onClick={LocationFetch}
        />
      </div>

      {/* Find Restaurants Button */}
      <Button
        label="Find Restaurants"
        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-3 px-10 rounded-full shadow-xl"
        onClick={handleShowRestaurants}
      />

      {/* Restaurant Grid */}
      {showRestaurants && coordinates.longitude && coordinates.latitude && (
        <div className="mt-12 w-full max-w-4xl p-8 bg-white bg-opacity-90 rounded-lg shadow-xl">
          <Restaurant coors={coordinates} />
        </div>
      )}
    </div>
  );
};
