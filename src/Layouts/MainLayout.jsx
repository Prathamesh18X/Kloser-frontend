import React from "react";
import PropTypes from "prop-types"; // Import prop-types
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">{children}</main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
