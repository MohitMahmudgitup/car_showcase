"use client";

import { CarProps } from "@/app/types";
import Image from "next/image";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  return (
    <div className="mt-10 w-full sm:w-80 md:w-96 group bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-all relative">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <img
          src="https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/amg-gt-class/2-door/all-vehicles/2024-AMG-GT55-COUPE-AVP-DR.png"
          alt={`${make} ${model}`}
          width={400}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 truncate">
          {make} {model} {year}
        </h2>

        <div className="mt-4 text-sm text-gray-700">
          {/* Car Specifications */}
          <p className="flex justify-between py-1">
            <span className="font-medium">Cylinders:</span> {cylinders}
          </p>
          <p className="flex justify-between py-1">
            <span className="font-medium">Displacement:</span> {displacement}L
          </p>
          <p className="flex justify-between py-1">
            <span className="font-medium">Drive:</span> {drive}
          </p>
          <p className="flex justify-between py-1">
            <span className="font-medium">Fuel Type:</span> {fuel_type}
          </p>
          <p className="flex justify-between py-1">
            <span className="font-medium">Transmission:</span> {transmission}
          </p>
        </div>

        <div className="mt-4 text-sm text-gray-700">
          {/* MPG Information */}
          <p className="flex justify-between py-1">
            <span className="font-medium">City MPG:</span> {city_mpg}
          </p>
          <p className="flex justify-between py-1">
            <span className="font-medium">Highway MPG:</span> {highway_mpg}
          </p>
          <p className="flex justify-between py-1">
            <span className="font-medium">Combined MPG:</span> {combination_mpg}
          </p>
        </div>

        {/* Button that appears on hover */}
        <div className="absolute w-full flex justify-center bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-blue-500 w-80  text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
