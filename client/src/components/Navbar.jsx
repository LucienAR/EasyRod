import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo และเมนูฝั่งซ้าย */}
        <div className="flex items-center gap-14 w-full">
          {/* โลโก้ใหญ่ขึ้น */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-24" />
          </Link>

          {/* เมนู */}
          <div className="flex items-center gap-10 text-xl font-bold text-gray-800">
            <Link to="/" className="hover:text-yellow-500">Home</Link>
            <Link to="/shop" className="hover:text-yellow-500">Shop</Link>
            <Link to="/product" className="hover:text-yellow-500">Product</Link>
            <Link to="/news" className="hover:text-yellow-500">News</Link>
            <Link to="/page" className="hover:text-yellow-500">Page</Link>
            <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
          </div>
        </div>

        {/* ปุ่ม Login */}
        <button className="bg-yellow-400 text-lg px-6 py-3 rounded-full font-bold hover:bg-yellow-500">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
