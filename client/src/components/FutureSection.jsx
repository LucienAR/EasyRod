import React from 'react';
import futureImg from '../assets/future-car.jpg';

const FutureSection = () => {
  return (
    <div className="px-4 py-16 md:flex gap-8 items-center max-w-6xl mx-auto">
      <img src={futureImg} alt="Future Car" className="w-full md:w-1/2 rounded-xl" />
      <div className="mt-6 md:mt-0 md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">THE FUTURE</h2>
        <p className="text-gray-700 leading-relaxed">
          ROADSTER GLOBAL TREND “E-“ PREFIX SIGNIFIES A WITH STOP/START<br /><br />
          In the past, the car Square than any on time. Let’s face it, the future of
          automobility is changing fast. Now more than ever, your vehicle reflects your
          lifestyle. Discover our latest innovations and experience the future of driving.
        </p>
      </div>
    </div>
  );
};

export default FutureSection;
