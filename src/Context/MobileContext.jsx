import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SCREEN_SIZES } from "../Constants/ScreenSizes";
// Define screen size breakpoint
// const SCREEN_SIZES = { MOBILE: 768 };

// Create Context
export const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Update `isMobile` based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= SCREEN_SIZES.MOBILE);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};

MobileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
