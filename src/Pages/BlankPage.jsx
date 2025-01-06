import React, { useState } from "react";
import ShoppingSummary from "../Components/cart/ShoppingSummary";
import AddNewAddress from "../Components/cart/AddNewAddress";
import AddNewAddress2 from "../Components/cart/AddNewAddress2";
import VerifyNumber from "../Components/cart/VerifyNumber";
import Checkout from "../Components/cart/Checkout";
import DeliverySelection from "../Components/cart/DeliverySelection";
import PaymentQRCode from "../Components/cart/PaymentQRCode";
 
const App = () => {
  const items = [
    {
      name: "Bio-Cellulose Face Mask",
      image: "https://via.placeholder.com/150",
      quantity: 1,
      price: 199.3,
    },
    {
      name: "Gentle Cleanser",
      image: "https://via.placeholder.com/150",
      quantity: 2,
      price: 399.3,
    },
    {
      name: "Orange Speaker",
      image: "https://via.placeholder.com/150",
      price: 80.2,
    },
  ];
  const deliveryDetails = {
    name: "Ali Bin Ahmad",
    address:
      "123 Jalan Ampang, Apartment A-2-3, Ampang Point, 50450 Kuala Lumpur, Wilayah Persekutuan, Malaysia",
  };
  const deliveryDetails2 = [
    {
      type: "Home",
      name: "Ali Bin Ahmad",
      address:
        "123 Jalan Ampang, Apartment A-2-3, Ampang Point, 50450 Kuala Lumpur, Wilayah Persekutuan, Malaysia",
      phone: "+60 1X-XXX XXXX",
      email: "zango@basicshapes.co",
    },
    {
      type: "Work",
      name: "Ali Bin Ahmad",
      address:
        "Tech Solutions Sdn. Bhd., Level 15, Menara KL Eco City, 3 Jalan Bangsar, 59200 Kuala Lumpur, Wilayah Persekutuan, Malaysia",
      phone: "+60 1X-XXX XXXX",
      email: "zango@basicshapes.co",
    },
  ];
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const handleCancelTransaction = () => {
    console.log("Transaction Cancelled");
  };
 
  return (
<div>
      {/* <ShoppingSummary
        items={items}
        total={total}
        onCheckout={() => alert("Proceeding to checkout")}
      /> */}
      {/* <AddNewAddress totalAmount="598.60" /> */}
      {/* <VerifyNumber totalAmount="598.60" phoneNumber="601234123410" /> */}
      {/* <AddNewAddress2/>  */}
      {/* <Checkout totalAmount="598.60" deliveryDetails={deliveryDetails} /> */}
      {/* <DeliverySelection
  totalAmount="598.60"
  deliveryDetails={deliveryDetails2}
  selectedAddress={0}
  onSelectAddress={(index) => console.log("Selected Address Index:", index)}
  onProceedToPay={() => console.log("Proceed to Payment")}
/>; */}
      {/* <PaymentQRCode
      qrCodeUrl="https://via.placeholder.com/256x256.png?text=QR+Code"
      onCancelTransaction={handleCancelTransaction}
    />  */}
</div>
  );
};
 
export default App;