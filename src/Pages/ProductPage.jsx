import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  // Text,
  ButtonGroup,
  Breadcrumbs,
  BreadcrumbItem,
} from '@nextui-org/react';
import Masonry from '@mui/lab/Masonry';
import { cardData } from '../Constants/APIsData';
import { useScreenSize } from '../States/useZustandStore';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import incrementBtn from '../../public/assets/incrementBtn.svg';
import decrementBtn from '../../public/assets/decrementBtn.svg';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  return (
    <div className='container mx-auto px-6 py-8'>
      {/* Back Button */}
      <div
        onClick={() => navigate('/')}
        className='mb-4 flex items-center cursor-pointer'
      >
        <ArrowBackIosRoundedIcon fontSize='small' />
        <span className='ml-2 text-sm font-semibold'>Back</span>
      </div>

      {/* Main Section */}
      <div className='flex flex-wrap gap-6'>
        {/* Main Product Image Card */}
        <div className='flex-1 max-w-lg'>
          <Card shadow='md' className='relative overflow-hidden'>
            <Image
              removeWrapper
              src='https://images.unsplash.com/photo-1732209988927-396f5103ede8?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Main Product'
              className='object-cover w-full h-auto'
            />
          </Card>
        </div>

        {/* Product Info Section */}
        <Card
          shadow='md'
          className={`bg-[#E7E5E4] flex-1 max-w-lg ${
            isMobile ? 'mt-6' : 'mt-0'
          } flex flex-col justify-between`}
        >
          <div className='p-6'>
            {/* Breadcrumbs */}
            <CardHeader className='flex-col items-start'>
              <Breadcrumbs
                className='text-sm text-gray-500'
                itemClasses={{
                  separator: 'px-1',
                }}
                separator='/'
              >
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Gentle Cleanser</BreadcrumbItem>
              </Breadcrumbs>
            </CardHeader>

            {/* Product Details */}
            <h1 className='text-3xl font-bold mb-2'>Gentle Cleanser</h1>
            <p className='text-gray-500 text-sm uppercase font-medium mb-4'>
              A Soothing & Conditioning Cleanser (120ml / 4FL. OZ.)
            </p>
            <div className='flex items-center mb-4'>
              <span className='line-through text-gray-400 text-lg mr-4'>
                RM199.50
              </span>
              <span className='text-xl font-semibold text-gray-500'>
                RM99.00  |  Net Wt. 4fl. oz.(120ml)
              </span>
            </div>
            <p className='text-sm font-medium text-black mb-6'>
              Tax included. Shipping calculated at checkout.
            </p>

            {/* Quantity Selector */}
            <div className='flex items-center mb-6'>
              <ButtonGroup>
                <Button
                  variant='light'
                  isIconOnly
                  disableRipple
                  disableAnimation
                  size='sm'
                  auto
                  className='hover:bg-white'
                >
                  <img src={decrementBtn} alt='Decrement' />
                </Button>
                <Button variant='light' size='sm' auto>
                  <span className='text-lg font-semibold'>1</span>
                </Button>
                <Button
                  variant='light'
                  isIconOnly
                  disableRipple
                  disableAnimation
                  size='sm'
                  auto
                  className='hover:bg-white'
                >
                  <img src={incrementBtn} alt='Increment' />
                </Button>
              </ButtonGroup>
            </div>

            {/* Add to Cart Button */}
            <Button
              className='bg-black text-white hover:bg-gray-800 w-full'
              size='md'
              radius='none'
              icon={<AddShoppingCartRoundedIcon />}
            >
              ADD TO CART
            </Button>

            {/* Product Description */}
            <p className='text-gray-600 mt-6'>
              Youthful skin is just a few suds away, suitable for normal to dry
              skin types. Our Gentle Cleanser combines the power of Japanese
              Yuzu Extract and Grape Leaf Extract to help promote anti-aging and
              brighten complexion. It is perfect to also effectively help
              cleanse impurities built-up on skin such as makeup, dirt, while
              leaving you with supple, baby-soft skin.
            </p>
            <ul className='list-disc pl-6 mt-4 text-gray-600 text-sm'>
              <li>Brightening Complexion & Anti-Aging.</li>
              <li>Gentle Cleansing.</li>
              <li>Skin Revitalization.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Masonry Section */}
      <div className='mt-12'>
        <span className='text-lg font-semibold mb-4'>Similar Products</span>
        <Masonry
          columns={{ xs: 1, sm: 2, md: 3 }}
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
              <Card className='relative shadow-md overflow-hidden'>
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
      </div>
    </div>
  );
};

export default ProductPage;
