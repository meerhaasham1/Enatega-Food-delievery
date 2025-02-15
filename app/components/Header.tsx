import React from "react";
import Image from "next/image";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { useLocation } from "@/context/LocationContext";

export const Header = () => {
  const { location } = useLocation(); // Get location from context
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-6 bg-blue-600 shadow-md w-full">
      {/* Logo and Title */}
      <div className="flex items-center text-white font-bold text-2xl mb-4 md:mb-0 mx-10">
        <Image
          src="/logo.svg"
          alt="Enatega Logo"
          width={40}
          height={20}
          className="text-white"
          priority={false}
        />
        <span className="mx-2 text-3xl">ENATEGA</span>
      </div>

      {/* Location Dropdown */}
      <div className="mx-4 w-full max-w-xs sm:max-w-md whitespace-nowrap">
        <i className="pi pi-map-marker mr-2 text-white"></i>{" "}
        <Dropdown
          value={location} // Pass the current location value here
          placeholder="Select Location"
          options={[{ label: location, value: location }]} // Populate dropdown with location
          className="w-full border-none focus:outline-none bg-gray-100 px-4 py-2 rounded-lg"
        />
      </div>

      {/* Buttons and Cart Icon */}
      <div className="flex items-center space-x-6 mx-10">
        <Button
          label="Login"
          className="border-2 border-white bg-transparent text-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out"
        />
        <Button
          label="Sign Up"
          className="border-2 border-white bg-green-400 text-white px-7 py-3 rounded-full hover:bg-green-500 hover:text-black transition duration-300 ease-in-out"
        />
        <i
          className="pi pi-shopping-bag text-white hover:text-green-500"
          style={{ fontSize: "1.5rem" }}
        ></i>
      </div>
    </header>
  );
};
