import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} E-Commerce Inc. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="hover:text-blue-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
