import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} EasyRod. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
