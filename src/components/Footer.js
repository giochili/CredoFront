import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-6">
      &copy; {new Date().getFullYear()} My Website. All rights reserved.
    </footer>
  );
};

export default Footer;
