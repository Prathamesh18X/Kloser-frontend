import { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
// import { FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import sun from "../../public/assets/sun.svg";
import moon from "../../public/assets/moon.svg";
import cart from "../../public/assets/cart.svg";
import logo from "../../public/assets/kloserLogo.svg";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const enableLightMode = () => {
    setDarkMode(false);
    document.documentElement.classList.remove("dark");
  };

  const enableDarkMode = () => {
    setDarkMode(true);
    document.documentElement.classList.add("dark");
  };

  return (
    <nav className="text-white shadow-md sticky top-0 z-50 dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          {/* <div className="flex items-center space-x-1">
            <Button
              isIconOnly
              auto
              dark
              color="default"
              className={`bg-black text-white text-3xl font-bold rounded-lg flex items-center justify-center w-12 h-12 ${
                darkMode ? "filter invert" : ""
              }`}
              onClick={enableLightMode}
              aria-label="logo"
              size="lg"
            >
              <span className="dark:text-gray-200">K</span>
            </Button>
            <Link
              to="/"
              className="text-2xl text-black font-bold dark:text-white"
            >
              Kloser
            </Link>
          </div> */}
          <div>
            <img src={logo} alt="kloser" to="/" />
          </div>
          <div className="flex items-center space-x-2">
            <Button
              isIconOnly
              auto
              light
              className={`${
                darkMode ? "bg-gray-800" : "bg-gray-200"
              } rounded-lg flex items-center justify-center w-8 h-8 hover:bg-gray-300`}
              onClick={enableLightMode}
              aria-label="Enable Light Mode"
            >
              <img src={sun} alt="sun" />
            </Button>
            <Button
              isIconOnly
              auto
              light
              className={`${
                darkMode ? "bg-gray-600" : "bg-white"
              } rounded-lg flex items-center justify-center w-8 h-8 hover:bg-gray-300`}
              onClick={enableDarkMode}
              aria-label="Enable Dark Mode"
            >
              <img
                src={moon}
                alt="moon"
                className={` ${darkMode ? "filter invert" : ""}`}
              />
            </Button>
          </div>
        </div>

        <div className="flex-grow mx-4 max-w-lg">
          <Input
            clearable
            color="default"
            placeholder="Search products..."
            className="w-full text-black focus:bg-gray-200 focus:outline-none"
            variant={`${darkMode ? "bordered" : "light"}`}
            size="lg"
          />
        </div>

        <div>
          <Link to="/cart" className="hover:text-gray-300">
            <img
              src={cart}
              alt="cart"
              className={` ${darkMode ? "filter invert" : ""}`}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
