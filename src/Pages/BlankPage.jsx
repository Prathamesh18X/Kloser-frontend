// App.jsx
import React, { useState } from 'react';
import ShoppingSummary from '../Components/cart/ShoppingSummary';
import AddNewAddress from '../Components/cart/AddNewAddress';
import AddNewAddress2 from '../Components/cart/AddNewAddress2';
import VerifyNumber from '../Components/cart/VerifyNumber';
import Checkout from '../Components/cart/Checkout';
import DeliverySelection from '../Components/cart/DeliverySelection';
import PaymentQRCode from '../Components/cart/PaymentQRCode';
import Navbar from '../Components/Navbar';
const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

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
    <div>
      {currentStep > 0 && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-40'></div>
      )}
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
  );
};

export default App;
