import { useContext } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "@nextui-org/react";
import sun from "../../public/assets/sun.svg";
import moon from "../../public/assets/moon.svg";
import cart from "../../public/assets/cart.svg";
import fullLogo from "../../public/assets/kloserFullLogo.svg";
import halfLogo from "../../public/assets/kLogo.svg";
import { MobileContext } from "../Context/MobileContext";

const Navbar = () => {
  const isMobile = useContext(MobileContext);

  // const [darkMode, setDarkMode] = useState(false);

  // const enableLightMode = () => {
  //   setDarkMode(false);
  //   document.documentElement.classList.remove("dark");
  // };

  // const enableDarkMode = () => {
  //   setDarkMode(true);
  //   document.documentElement.classList.add("dark");
  // };

  return (
    <nav className="text-white shadow-md sticky top-0 z-50 bg-white ">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-black ">
            {isMobile ? (
              <Button
                isIconOnly
                size="lg"
                className="bg-black flex items-center"
              >
                <img src={halfLogo} alt="Kloser Logo" />
              </Button>
            ) : (
              <img src={fullLogo} alt="Kloser Logo" className="h-10" />
            )}
          </Link>

          {!isMobile && (
            <div className="flex items-center space-x-4">
              <Button
                isIconOnly
                auto
                light
                className="rounded-lg flex items-center justify-center w-8 h-8 hover:bg-gray-300"
                // onClick={enableLightMode}
                aria-label="Enable Light Mode"
              >
                <img src={sun} alt="sun" />
              </Button>
              <Button
                isIconOnly
                auto
                light
                className="rounded-lg flex items-center justify-center w-8 h-8 hover:bg-gray-300"
                // onClick={enableDarkMode}
                aria-label="Enable Dark Mode"
              >
                <img src={moon} alt="moon" />
              </Button>
            </div>
          )}
        </div>

        <div className="flex-grow mx-4 max-w-lg">
          <Input
            clearable
            color="default"
            placeholder="Search product..."
            className="w-full text-black focus:bg-gray-200 focus:outline-none rounded-lg"
            // variant={`${darkMode ? "bordered" : "light"}`}
            size="lg"
          />
        </div>

        {!isMobile && (
          <Link to="/cart" className="hover:text-gray-300">
            <img src={cart} alt="cart" className="h-6 w-6" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
