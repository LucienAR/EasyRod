import React from 'react';
import { FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border">
      <div className="relative">
        <img src={car.image} alt={car.title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
          ฟรี! เครื่องฟอกอากาศ
        </div>
        <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
          ราคาพิเศษ
        </div>
        <div className="absolute top-2 right-2 text-white">
          <FaHeart className="text-xl" />
        </div>
      </div>

      <div className="p-4">
        {/* Brand & Model */}
        <h2 className="font-bold text-md mb-1">{car.title}</h2>

        {/* Mileage, Gear, Location */}
        <div className="text-sm text-gray-500 flex flex-wrap gap-2 mb-2">
          <span>{car.mileage} กม.</span>
          <span>• {car.gear}</span>
          <span className="flex items-center">
            • <FaMapMarkerAlt className="mx-1 text-gray-400" /> {car.location}
          </span>
        </div>

        {/* Price */}
        <div className="font-bold text-red-600 text-lg">{car.price.toLocaleString()} บาท</div>
        <div className="text-sm text-gray-500 mt-1">
          {car.monthly.toLocaleString()} บาท/เดือน
        </div>

        {/* Total with tax */}
        <div className="text-xs text-gray-400 mt-1">
          {car.totalPrice.toLocaleString()} บาท ราคาพร้อมภาษี 7% รวมค่าธรรมเนียม
        </div>
      </div>
    </div>
  );
};

export default CarCard;
