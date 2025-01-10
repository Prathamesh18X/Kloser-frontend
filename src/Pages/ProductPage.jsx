import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
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
//COMPONENT
import ShoppingSummary from '../Components/cart/ShoppingSummary';
import AddNewAddress from '../Components/cart/AddNewAddress';
import AddNewAddress2 from '../Components/cart/AddNewAddress2';
import VerifyNumber from '../Components/cart/VerifyNumber';
import Checkout from '../Components/cart/Checkout';
import DeliverySelection from '../Components/cart/DeliverySelection';
import PaymentQRCode from '../Components/cart/PaymentQRCode';
import { useProductDetails } from '../States/useZustandStore';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductPage = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  const { selectedProduct } = useProductDetails();
  const [currentStep, setCurrentStep] = useState(0);

  const items = [
    {
      name: 'Oroh Shoes',
      image:
        'https://i.pinimg.com/736x/6b/10/f7/6b10f7c5b48ffbe5ae04627db55bf3da.jpg',
      quantity: 1,
      price: 1499.99,
      description:
        'Know someone who loves to travel in style? Tag them below and let them be inspired.',
    },
    {
      name: 'Oroh Shoes',
      image:
        'https://i.pinimg.com/736x/1c/17/78/1c1778c1c064e47f5dbf07f8834d8e2b.jpg',
      quantity: 1,
      price: 1599.99,
      description:
        'Know someone who loves to travel in style? Tag them below and let them be inspired.',
    },
  ];
  const allitems = [
    {
      name: 'Oroh Shoes',
      image:
        'https://i.pinimg.com/736x/6b/10/f7/6b10f7c5b48ffbe5ae04627db55bf3da.jpg',
      quantity: 1,
      price: 1499.99,
      description:
        'Know someone who loves to travel in style? Tag them below and let them be inspired.',
    },
    {
      name: 'Oroh Shoes',
      image:
        'https://i.pinimg.com/736x/1c/17/78/1c1778c1c064e47f5dbf07f8834d8e2b.jpg',
      quantity: 1,
      price: 1599.99,
      description:
        'Know someone who loves to travel in style? Tag them below and let them be inspired.',
    },
    {
      name: 'Oroh Shoes',
      image:
        'https://i.pinimg.com/736x/f7/7e/9f/f77e9ff496cf48819349fffe7ee30b85.jpg',
      quantity: 1,
      price: 1699.99,
      description:
        'Know someone who loves to travel in style? Tag them below and let them be inspired.',
    },
    {
      name: 'Oroh Shoes',
      image:
        'https://i.pinimg.com/736x/ab/75/fa/ab75fa8792904597f43c764090948ea6.jpg',
      quantity: 1,
      price: 1799.99,
      description:
        'Know someone who loves to travel in style? Tag them below and let them be inspired.',
    },
    {
      name: 'Oroh Shoes',
      image:
        'https://i.pinimg.com/736x/8f/a6/63/8fa663204bc2ae5b292539c20e9c836e.jpg',
      quantity: 1,
      price: 1899.99,
      description:
        'Know someone who loves to travel in style? Tag them below and let them be inspired.',
    },
    {
      name: 'Oroh Shoes',
      image:
        'https://i.pinimg.com/736x/1e/6e/e4/1e6ee4f9bdbcdadb0f1d870367486732.jpg',
      quantity: 1,
      price: 1999.99,
      description:
        'Of Spanish passion and Indian vibrance… Our collection of reds brings the essence of Spanish design to your festive ensembles.',
    },
    {
      name: 'Oroh Shoes',
      image:
        'https://i.pinimg.com/736x/7c/0d/1d/7c0d1dc02a52bde4f03ef63f4140c72c.jpg',
      quantity: 1,
      price: 2099.99,
      description:
        'Leather that’s a cut above the rest. Drop a comment and let us know: Which color of Jerez steals your heart? 🖤💙🧡 Shop Today!',
    },
    {
      name: 'Oroh Shoes',
      image:
        'https://i.pinimg.com/736x/fb/23/2a/fb232a16537eb07031b6419b66fab488.jpg',
      quantity: 1,
      price: 2199.99,
      description:
        'Lorca — the ultimate statement pair of flats is yours for the taking. So what are you waiting for? Shop now! 🛒👠',
    },
    {
      name: 'The Oroh Life',
      image:
        'https://i.pinimg.com/736x/93/c5/80/93c580985edb194e30488337c4decdcc.jpg',
      quantity: 1,
      price: 2299.99,
      description:
        'The golden rule of fashion? Black and gold never go out of style.',
    },
    {
      name: 'OROH Jaca Metallic Moccasins',
      image:
        'https://i.pinimg.com/736x/a3/dd/7b/a3dd7bf6c442787583ac5e97d3635e2c.jpg',
      quantity: 1,
      price: 2399.99,
      description:
        'Gold leather moccasins in plain metallic base. - Aza Fashions',
    },
    {
      name: 'Oroh Shoes Design Inspiration',
      image:
        'https://i.pinimg.com/736x/68/7b/d9/687bd9d58321aa5a30a20ba96e8210f3.jpg',
      quantity: 1,
      price: 2499.99,
      description:
        'Indulge in the fine shoe craft – envisioned in Alicante, Spain, and crafted by skilled artisans in Agra, India. Step up your style and step out in confidence with OROH. Check out our collection from our website. 👠🛒',
    },
    {
      name: 'Adela, The Oroh Life',
      image:
        'https://i.pinimg.com/736x/eb/b4/56/ebb456266efb2ddadfcffcba5c6f6b4b.jpg',
      quantity: 1,
      price: 2599.99,
      description:
        'Shriya Saran takes center stage in OROH boots for SHE India’s milestone 5th-anniversary cover shoot. #OnDisplay: Adela',
    },
    {
      name: 'Oroh Heels',
      image:
        'https://i.pinimg.com/736x/fb/23/2a/fb232a16537eb07031b6419b66fab488.jpg',
      quantity: 1,
      price: 2699.99,
      description:
        'Add some sparkle to your step with our eye-catchy sandals featuring a hint of gold and a nod to Spanish heritage. ✨ Product in pic: Tarifa Get it now from our website!',
    },
  ];

  const deliveryDetails = {
    name: 'Ali Bin Ahmad',
    address:
      '123 Jalan Ampang, Apartment A-2-3, Ampang Point, 50450 Kuala Lumpur, Wilayah Persekutuan, Malaysia',
  };

  const deliveryDetails2 = [
    {
      type: 'Home',
      name: 'Ali Bin Ahmad',
      address:
        '123 Jalan Ampang, Apartment A-2-3, Ampang Point, 50450 Kuala Lumpur, Wilayah Persekutuan, Malaysia',
      phone: '+60 1X-XXX XXXX',
      email: 'zango@basicshapes.co',
    },
    {
      type: 'Work',
      name: 'Ali Bin Ahmad',
      address:
        'Tech Solutions Sdn. Bhd., Level 15, Menara KL Eco City, 3 Jalan Bangsar, 59200 Kuala Lumpur, Wilayah Persekutuan, Malaysia',
      phone: '+60 1X-XXX XXXX',
      email: 'zango@basicshapes.co',
    },
  ];

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleChangeDelivery = () => {
    setCurrentStep(6); // Transition to step 6
  };

  const handlePayWith = () => {
    setCurrentStep(7); // Transition to step 7
  };

  const handleCancelTransaction = () => {
    console.log('Transaction Cancelled');
  };

  return (
    <div className='flex w-full h-[100vh] gap-4 px-6 py-8 '>
      {/* Left Section: Main Image + Small Images */}
      <div className='flex-[0.65] h-full overflow-hidden overflow-y-scroll scrollbar-none custom-scrollbar pr-6'>
        <div className='flex flex-col gap-4 '>
          {/* Back Button */}

          <div className=' relative flex'>
            {/* Left Section */}
            <div
              onClick={() => navigate('/')}
              className='absolute top-0 left-0 mt-2 mr-2 flex items-center cursor-pointer'
            >
              <ArrowBackIosRoundedIcon fontSize='small' />

              <span className='ml-2 text-sm font-semibold'>Back</span>
            </div>
            <div className='w-1/3 flex align-items-center gap-2'>
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                className='mt-auto flex gap-2'
              >
                <SwiperSlide>
                  <Card shadow='sm' className='h-[86px] w-[86px]'>
                    <Image
                      removeWrapper
                      src='https://i.pinimg.com/736x/1e/6e/e4/1e6ee4f9bdbcdadb0f1d870367486732.jpg'
                      alt='Product 1'
                      // className='rounded-lg'
                    />
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card shadow='sm' className='h-[86px] w-[86px]'>
                    <Image
                      removeWrapper
                      src='https://i.pinimg.com/736x/7c/0d/1d/7c0d1dc02a52bde4f03ef63f4140c72c.jpg'
                      alt='Product 2'
                      // className='rounded-lg'
                      className='h-full w-full'
                    />
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card shadow='sm' className='h-[86px] w-[86px]'>
                    <Image
                      removeWrapper
                      src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='Product 3'
                      className='h-full w-full'
                      // className='rounded-lg'
                    />
                  </Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card shadow='sm' className='h-[86px] w-[86px]'>
                    <Image
                      removeWrapper
                      src='https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3'
                      alt='Product 3'
                      className='h-full w-full'
                      // className='rounded-lg'
                    />
                  </Card>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Right Section */}
            <div className='w-2/3 pl-4 h-[680px]'>
              <Card shadow='md' className='h-full'>
                <Image
                  removeWrapper
                  src={selectedProduct?.imageUrl}
                  alt='Main Product'
                  className='rounded-lg'
                />
              </Card>
            </div>
          </div>
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
                <Card className='shadow-md overflow-hidden'>
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
      {/* Right Section: Product Info */}
      <div className='flex-[0.35] h-full sticky top-8'>
        <Card
          shadow='md'
          className='bg-[#E7E5E4] rounded-md p-6 w-full max-w-lg mx-auto'
        >
          {/* Breadcrumbs */}
          <div className='text-sm text-gray-500 mb-4'>
            <a href='#' className='hover:underline'>
              Home
            </a>{' '}
            /{' '}
            <span className='text-gray-800 font-semibold'>
              {selectedProduct?.headerTitle || 'Gentle Cleanser'}
            </span>
          </div>

          {/* Product Details */}
          <div>
            <h1 className='text-2xl font-bold text-gray-800'>
              Gentle Cleanser
            </h1>
            <p className='text-gray-500 text-sm font-medium mb-4'>
              A Soothing & Conditioning Cleanser (120ml / 4FL. OZ.)
            </p>
            <div className='flex items-center'>
              <span className='line-through text-gray-400 text-lg mr-2'>
                RM199.50
              </span>
              <span className='text-xl font-semibold text-gray-800'>
                RM99.00
              </span>
              <span className='text-black ml-2 font-semibold  text-md'>
                | Net Wt. 4fl. oz.(120ml)
              </span>
            </div>
            <p className='text-sm text-gray-600 mb-6'>
              Tax included. Shipping calculated at checkout.
            </p>

            {/* Quantity Selector */}
            <div className='flex items-center gap-4 mb-6'>
              <button
                className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200'
                // onClick={handleDecrement}
              >
                <img src={decrementBtn} alt='Decrement' />
              </button>
              <span className='text-lg font-semibold'>{1}</span>
              <button
                className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200'
                // onClick={handleIncrement}
              >
                <img src={incrementBtn} alt='Increment' />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              className='bg-black text-white text-sm font-semibold py-2 px-4 w-[40%] hover:bg-gray-800'
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              ADD TO CART
            </button>

            {/* Product Description */}
            <div className='mt-6 text-gray-600 text-sm'>
              <p className='mb-4'>
                Youthful skin is just a few suds away, suitable for normal to
                dry skin types. Our Gentle Cleanser combines the power of
                Japanese Yuzu Extract and Grape Leaf Extract to help promote
                anti-aging and brighten complexion. It is perfect to also
                effectively help cleanse impurities built-up on skin such as
                makeup, dirt, while leaving you with supple, baby-soft skin.
              </p>
              <ul className='list-disc pl-5 space-y-0'>
                <li>Brightening Complexion & Anti-Aging.</li>
                <li>Gentle Cleansing.</li>
                <li>Skin Revitalization.</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      {currentStep > 0 && (
        <div>
          <div
            className='fixed inset-0 bg-black bg-opacity-50 z-40'
            onClick={() => setCurrentStep(0)}
          ></div>
          <div className='fixed inset-0 z-50 flex justify-center items-center'>
            {currentStep === 1 && (
              <ShoppingSummary
                items={items}
                allitems={allitems}
                total={total}
                onCheckout={handleNextStep}
              />
            )}
            {currentStep === 2 && (
              <AddNewAddress totalAmount='598.60' onNext={handleNextStep} />
            )}
            {currentStep === 3 && (
              <VerifyNumber
                totalAmount='598.60'
                phoneNumber='601234123410'
                onNext={handleNextStep}
              />
            )}
            {currentStep === 4 && <AddNewAddress2 onNext={handleNextStep} />}
            {currentStep === 5 && (
              <Checkout
                totalAmount='598.60'
                deliveryDetails={deliveryDetails}
                onChangeDelivery={handleChangeDelivery} // Pass handler for "Change" button
                onPayWith={handlePayWith} // Pass handler for "PAY WITH" button
              />
            )}
            {currentStep === 6 && (
              <DeliverySelection
                totalAmount='598.60'
                deliveryDetails={deliveryDetails2}
                selectedAddress={0}
                onSelectAddress={(index) =>
                  console.log('Selected Address Index:', index)
                }
                onProceedToPay={handleNextStep}
              />
            )}
            {currentStep === 7 && (
              <PaymentQRCode
                qrCodeUrl='https://via.placeholder.com/256x256.png?text=QR+Code'
                onCancelTransaction={handleCancelTransaction}
              />
            )}
          </div>
        </div>
      )}{' '}
    </div>
  );
};

export default ProductPage;
