import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Chip } from "@nextui-org/react";
import sun from "../../public/assets/sun.svg";
import moon from "../../public/assets/moon.svg";
import cart from "../../public/assets/cart.svg";
import fullLogo from "../../public/assets/kloserFullLogo.svg";
import halfLogo from "../../public/assets/kLogo.svg";
import { MobileContext } from "../Context/MobileContext";
import { trendingTags } from "../Constants/APIsData";

const Navbar = () => {
  const isMobile = useContext(MobileContext);

  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Example Data
  const [recentSearches, setRecentSearches] = useState([
    "iPhone charger",
    "Type C cable",
  ]);

  // Handlers
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setShowDropdown(true);
  };

  const handleClearSearches = () => {
    setRecentSearches([]);
  };

  const handleSelectSearch = (search) => {
    setSearchText(search);
    setShowDropdown(false);
  };
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

        <div className="relative w-full max-w-lg mx-auto">
          <Input
            clearable
            value={searchText}
            onChange={handleSearchChange}
            placeholder={`${
              showDropdown ? "Start typing" : "Search product..."
            }`}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            className="w-full text-black focus:bg-gray-200 focus:outline-none rounded-lg"
            size="lg"
          />
          {showDropdown && (
            <div className="absolute w-full mt-2 bg-white border shadow-lg rounded-lg z-50">
              {/* Recent Searches Section */}
              <div className="px-4 py-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-gray-700">
                    Recent Searches
                  </h4>
                  <Button
                    auto
                    light
                    color="white"
                    onClick={handleClearSearches}
                    size="sm"
                    className=" text-gray-600 hover:underline"
                  >
                    Clear
                  </Button>
                </div>
                <div className="flex flex-wrap mt-2 gap-2">
                  {recentSearches.map((search, index) => (
                    <Chip
                      key={index}
                      className={{
                        closeButton: "bg-gray-600 ",
                      }}
                      onClick={() => handleSelectSearch(search)}
                      onClose={() => handleSelectSearch(search)}
                    >
                      <span className=" text-gray-600 text-sm">{search}</span>{" "}
                      {/* <span>
                        <CloseRoundedIcon className="text-gray-600" />
                      </span> */}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Trending Tags Section */}
              <div className="px-4 py-2 border-t">
                <h4 className="text-sm font-bold text-gray-700">Trending</h4>
                <div className="flex flex-wrap mt-2 gap-4">
                  {trendingTags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex  items-center justify-center w-[full] p-1 border rounded-lg cursor-pointer hover:shadow-lg"
                      onClick={() => handleSelectSearch(tag.title)}
                    >
                      <img
                        src={tag.image}
                        alt={tag.title}
                        className="w-12 h-12 rounded-[10%] object-cover mb-1"
                      />
                      <span className="text-xs text-gray-700 font-medium px-2">
                        {tag.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
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
