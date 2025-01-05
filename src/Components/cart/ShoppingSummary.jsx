import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const ShoppingCartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div>
          <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <button className="text-gray-500 text-sm">-</button>
            <span className="text-sm">{item.quantity}</span>
            <button className="text-gray-500 text-sm">+</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-sm font-medium text-gray-900">
          RM{item.price.toFixed(2)}
        </p>
        <button className="text-gray-400 text-sm mt-2">×</button>
      </div>
    </div>
  );
};

const YouMightLikeItem = ({ item }) => {
  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden w-full">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-24 object-cover"
      />
      <button className="absolute top-2 right-2 bg-black text-white text-xs py-1 px-3 rounded-md">
        + Add
      </button>
      <p className="absolute bottom-2 left-2 text-xs bg-white bg-opacity-70 px-2 py-0.5 rounded-md">
        RM{item.price.toFixed(2)}
      </p>
    </div>
  );
};

const ShoppingSummary = ({ items, total, onCheckout }) => {
  return (
    <div className="w-[360px] h-screen bg-white shadow-lg fixed top-0 right-0 z-50 overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Shopping Summary</h2>
      </div>

      {/* Items */}
      <div className="px-6">
        {items.map((item, index) => (
          <ShoppingCartItem key={index} item={item} />
        ))}
      </div>

      {/* Continue Shopping */}
      <div className="px-6 mt-4">
        <a
          href="#"
          className="text-sm text-gray-600 underline hover:text-gray-800"
        >
          Continue Shopping
        </a>
      </div>

      {/* You Might Also Like */}
      <div className="px-6 mt-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">
          You might also like
        </h3>
        <Swiper spaceBetween={15} slidesPerView={2.2}>
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <YouMightLikeItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Checkout */}
      <div className="px-6 py-6 mt-6 border-t border-gray-200">
        <div className="flex justify-between text-sm font-medium text-gray-900">
          <span>Subtotal</span>
          <span>RM{total.toFixed(2)}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Tax included.{" "}
          <a href="#" className="underline">
            Shipping
          </a>{" "}
          calculated at checkout.
        </p>
        <button
          className="w-full bg-black text-white py-3 mt-6 rounded-md text-sm font-semibold"
          onClick={onCheckout}
        >
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default ShoppingSummary;
