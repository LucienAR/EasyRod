import React from 'react';
import heroImg from '../assets/hero-car.jpg'; // ใช้ภาพจาก assets

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">LIFESTYLE VEHICLE</h1>
        <p className="text-lg md:text-xl mb-6">Discover Origin Line – Designed for Your Offroad Performance</p>
        {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full">
          APPLY NOW
        </button> */}
      </div>
    </div>
  );
};

export default HeroSection;
