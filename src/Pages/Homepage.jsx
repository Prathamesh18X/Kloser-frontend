import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { useScreenSize, useProductDetails } from '../States/useZustandStore';
import Carousel from 'react-material-ui-carousel';

import Masonry from '@mui/lab/Masonry';
import star from '../../public/assets/star.svg';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {
  cardData,
  carouselItems,
  breakpointColumnsObj,
} from '../Constants/APIsData';

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [selectedSort, setSelectedSort] = useState('Price low to high');

  const { isMobile } = useScreenSize();
  const { selectedProduct, setSelectedProduct } = useProductDetails();
  const navigate = useNavigate();
  console.log('selectedProduct', selectedProduct);

  const categories = ['All Category', 'Electronics', 'Fashion', 'Beauty'];
  const sortingOptions = [
    'Price low to high',
    'Price high to low',
    'Newest Arrivals',
  ];
  return (
    <>
      <div className=' mx-auto py-6 text-center'>
        <div className='sm:flex h-[360px] justify-between items-center bg-gray-100 sm:py-10 sm:px-6 md:py-6 md:px-4  gap-6'>
          <Card
            className='bg-[#E7E5E4] shadow-md p-4 rounded-lg flex justify-between  sm:mb-0 mb-6'
            style={{
              width: `${isMobile ? '100%' : '270px'}`,
              height: `${isMobile ? '100%' : '360px'}`,
            }}
          >
            <CardHeader className='flex items-center space-x-4'>
              <img src={star} alt='star' />
              <h2 className='text-sm font-bold text-black'>Store Name</h2>
            </CardHeader>

            <div className=' text-gray-600 md:py-6 px-4'>
              <p className='text-sm text-left'>
                Store Name is your shopping destination for fashion, home,
                beauty, kids&apos; clothes and more. Browse the latest
                collections and find quality pieces at affordable
              </p>
            </div>

            <CardFooter className='p-0 flex justify-start md:mt-6'>
              <Button
                className='bg-black text-white hover:bg-gray-800'
                radius='full'
                size={isMobile ? 'md' : 'sm'}
              >
                All collections
              </Button>
            </CardFooter>
          </Card>

          <div className={`${isMobile ? 'hidden' : ''}flex-grow sm:mb-0 mb-6`}>
            <Carousel
              animation='fade'
              indicators={true}
              IndicatorIcon={null}
              indicatorContainerProps={{
                style: {
                  zIndex: 1,
                  position: 'absolute',
                  bottom: '10px',
                  left: '30px',
                  display: 'flex',
                  justifyContent: 'left',
                  padding: '20px',
                },
              }}
              indicatorIconButtonProps={{
                style: {
                  width: '24px',
                  margin: '4px',
                  height: '6px',
                  borderRadius: '4px',
                  backgroundColor: 'white',
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  backgroundColor: 'orange',
                },
              }}
            >
              {carouselItems.map((item, index) => (
                <div key={index}>
                  <Card className='relative shadow-md overflow-hidden'>
                    <CardHeader className='absolute text-left z-10 top-2 left-2 flex-col items-start'>
                      <h4 className='text-white font-medium text-2xl w-[70%]'>
                        {item.title}
                      </h4>
                    </CardHeader>
                    <div className='max-h-[370px] max-w-[full]'>
                      <Image
                        removeWrapper
                        alt='Card background'
                        className='z-0 w-full h-auto object-cover'
                        src={item.image}
                        width={400}
                        height={500}
                      />
                    </div>
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>

          <Card className={` relative shadow-md overflow-hidden `}>
            <CardHeader className='absolute z-10 top-2 left-2 flex-col items-start'>
              <span className='text-tiny text-white/60 uppercase font-bold'>
                {`heading`}
              </span>
              <h4 className='text-white font-medium text-large'>
                {`subheading`}
              </h4>
            </CardHeader>
            <div
              className={`max-h-[370px] max-w-[${isMobile ? '100%' : '400px'}]`}
            >
              <Image
                removeWrapper
                alt='Card background'
                className='z-0 w-full h-auto object-cover'
                src={
                  'https://images.unsplash.com/photo-1731570338144-8439b3c94a55?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                width={500}
                height={370}
              />
            </div>
            <CardFooter className='absolute z-10 bottom-0 left-0 flex-col items-start'>
              <div className='flex align-center justify-between space-x-2 w-full'>
                <p className='font-bold text-lg text-white'>Feature products</p>
                <Button
                  className='bg-black/70 text-white hover:bg-black/90'
                  radius='full'
                  size='sm'
                >
                  <span className='text-white font-bold'>{'View'}</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className='flex justify-between items-center mx-6 my-4 gap-3'>
        <div className='relative'>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant={'bordered'}
                bordered
                className='text-gray-600 border-gray-300'
              >
                {selectedCategory}
                <KeyboardArrowDownRoundedIcon className=' text-gray-500' />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              variant='bordered'
              aria-label='Category Options'
              onAction={(key) => setSelectedCategory(key)}
              selectedKeys={[selectedCategory]}
            >
              {categories.map((category, index) => (
                <DropdownItem key={index}>{category}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className='relative'>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant={'bordered'}
                bordered
                className='text-gray-600 border-gray-300'
              >
                {selectedSort}
                <KeyboardArrowDownRoundedIcon className=' text-gray-500' />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              variant='bordered'
              aria-label='Sorting Options'
              onAction={(key) => setSelectedSort(key)}
              selectedKeys={[selectedSort]}
            >
              {sortingOptions.map((option, index) => (
                <DropdownItem key={index}>{option}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <Masonry
        columns={breakpointColumnsObj}
        spacing={isMobile ? 2 : 4}
        sx={{
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto',
          maxWidth: '100%',
        }}
      >
        {cardData.map((card) => (
          <div key={card.id}>
            <Card
              className='relative shadow-md overflow-hidden'
              isPressable={true}
              onPress={() => {
                setSelectedProduct(card);
                navigate('/productpage');
              }}
              style={{
                width: '100%',
                margin: '0 auto',
              }}
            >
              <CardHeader className='absolute z-10 top-2 left-2 flex-col items-start'>
                <span className='text-tiny text-white/60 uppercase font-bold'>
                  {card.headerSubtitle}
                </span>
                <h4 className='text-white font-medium text-large'>
                  {card.headerTitle}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt='Card background'
                className='z-0 w-full h-auto object-cover'
                src={card.imageUrl}
                width={card.imageSize.width}
                height={card.imageSize.height}
              />
              <CardFooter
                className={`absolute z-10 ${
                  isMobile ? 'bottom-1 left-1' : 'bottom-2 left-2'
                } flex-col items-start`}
              >
                <Button
                  className='bg-black/50 text-white hover:bg-black/90'
                  radius='sm'
                  size='sm'
                >
                  <span className='text-white text-[10px] font-semibold'>
                    {card.buttonText}
                  </span>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Masonry>
    </>
  );
};

export default Homepage;
