import React from "react";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import FutureSection from "../components/FutureSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchSection />
      <FutureSection />
      <Footer />
    </>
  );
};

export default Home;
