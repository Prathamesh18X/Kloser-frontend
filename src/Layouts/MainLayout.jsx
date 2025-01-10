import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useScreenSize } from '../States/useZustandStore';
import { SCREEN_SIZES } from '../Constants/ScreenSizes';

const MainLayout = ({ children }) => {
  const setMobile = useScreenSize((state) => state.setMobile);
  const setTablet = useScreenSize((state) => state.setTablet);
  const setDesktop = useScreenSize((state) => state.setDesktop);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setMobile(width <= SCREEN_SIZES.MOBILE);
      setTablet(width > SCREEN_SIZES.MOBILE && width <= SCREEN_SIZES.TABLET);
      setDesktop(width > SCREEN_SIZES.TABLET);
    };

    // Initial check and event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [setMobile, setTablet, setDesktop]);

  return (
    <div className=' mx-auto flex flex-col min-h-screen bg-default'>
      <Navbar />
      <main className='container mx-auto flex-grow w-full px-4 sm:px-10 md:px-14'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
