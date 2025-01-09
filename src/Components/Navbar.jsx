import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Chip } from '@nextui-org/react';
// import sun from '../../public/assets/sun.svg';
// import moon from '../../public/assets/moon.svg';
import cart from '../../public/assets/cart.svg';
import fullLogo from '../../public/assets/kloserFullLogo.svg';
import halfLogo from '../../public/assets/kLogo.svg';
import { useScreenSize } from '../States/useZustandStore';
import { trendingTags } from '../Constants/APIsData';

const Navbar = () => {
  const { isMobile } = useScreenSize();
  const [searchText, setSearchText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const [recentSearches, setRecentSearches] = useState([
    'iPhone charger',
    'Type C cable',
  ]);

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
    <nav className='container mx-auto text-white w-full top-0 z-50 bg-default'>
      <div className='mx-auto flex items-center justify-between pb-2 py-4 px-16'>
        <div className='flex items-center space-x-4'>
          <Link to='/' className='text-2xl font-bold text-black '>
            {isMobile ? (
              <Button
                isIconOnly
                size='lg'
                className='bg-black flex items-center'
              >
                <img src={halfLogo} alt='Kloser Logo' />
              </Button>
            ) : (
              <img src={fullLogo} alt='Kloser Logo' className='h-10' />
            )}
          </Link>

          {/* {!isMobile && (
            <div className='flex items-center space-x-4'>
              <Button
                isIconOnly
                auto
                light
                className='rounded-lg flex items-center justify-center w-8 h-8 hover:bg-gray-300'
                // onClick={enableLightMode}
                aria-label='Enable Light Mode'
              >
                <img src={sun} alt='sun' />
              </Button>
              <Button
                isIconOnly
                auto
                light
                className='rounded-lg flex items-center justify-center w-8 h-8 hover:bg-gray-300'
                // onClick={enableDarkMode}
                aria-label='Enable Dark Mode'
              >
                <img src={moon} alt='moon' />
              </Button>
            </div>
          )} */}
        </div>

        <div className='relative w-[400px]  h-[40px] max-w-lg mx-auto'>
          <Input
            clearable
            value={searchText}
            onChange={handleSearchChange}
            placeholder={`${
              showDropdown ? 'Start typing' : 'Search product...'
            }`}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            className='w-full text-black focus:bg-gray-200 focus:outline-none rounded-lg'
            size='md'
          />
          {showDropdown && (
            <div
              className='absolute justify-evenly mt-2 bg-default border shadow-lg rounded-lg z-50'
              style={{
                width: '500px', // Keep the dropdown width as is
                left: '50%', // Move dropdown to the center horizontally
                transform: 'translateX(-50%)', // Center-align dropdown relative to the parent
              }}
            >
              {/* Recent Searches Section */}
              <div className='px-4 py-2'>
                <div className='flex justify-between items-center'>
                  <h4 className='text-sm font-bold text-gray-700'>
                    Recent Searches
                  </h4>
                  <Button
                    auto
                    light
                    color='white'
                    onClick={handleClearSearches}
                    size='sm'
                    className=' text-gray-600 hover:underline'
                  >
                    Clear
                  </Button>
                </div>
                <div className='flex flex-wrap mt-2 gap-2'>
                  {recentSearches.map((search, index) => (
                    <Chip
                      key={index}
                      className={{
                        closeButton: 'bg-gray-600 ',
                      }}
                      onClick={() => handleSelectSearch(search)}
                      onClose={() => handleSelectSearch(search)}
                    >
                      <span className=' text-gray-600 text-sm'>{search}</span>{' '}
                      {/* <span>
                        <CloseRoundedIcon className="text-gray-600" />
                      </span> */}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Trending Tags Section */}
              <div className='px-4 py-2 border-t'>
                <h4 className='text-sm font-bold text-gray-700'>Trending</h4>
                <div className='flex flex-wrap mt-2 gap-4'>
                  {trendingTags.map((tag, index) => (
                    <div
                      key={index}
                      className='flex  items-center justify-center w-[full] p-1 border rounded-lg cursor-pointer hover:shadow-lg'
                      onClick={() => handleSelectSearch(tag.title)}
                    >
                      <img
                        src={tag.image}
                        alt={tag.title}
                        className='w-12 h-12 rounded-[10%] object-cover mb-1'
                      />
                      <span className='text-xs text-gray-700 font-medium px-2'>
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
          <div className='flex space-x-1'>
            <div className='flex items-center justify-center w-6 h-6'>
              <svg
                width='6'
                height='6'
                viewBox='0 0 6 6'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='3' cy='3' r='3' fill='#DC2626' />
              </svg>
            </div>
            <div className='text-gray-800'> 2 </div>
            <Link to='/cart' className='hover:text-gray-300'>
              <img src={cart} alt='cart' className='h-6 w-6' />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
