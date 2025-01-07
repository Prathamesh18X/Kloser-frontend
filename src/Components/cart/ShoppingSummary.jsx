import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const ShoppingCartItem = ({ item }) => {
  return (
    <div className='flex items-center justify-between py-4 border-b border-gray-200'>
      <div className='flex items-center gap-4'>
        <img
          src={item.image}
          alt={item.name}
          className='w-16 h-16 object-cover rounded-md'
        />
        <div>
          <h3 className='text-sm font-medium text-gray-900'>{item.name}</h3>
          <div className='flex items-center gap-2 mt-5'>
            <button className='text-gray-500 text-sm'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_436_588)'>
                  <path
                    d='M7.99992 14.6666C11.6818 14.6666 14.6666 11.6819 14.6666 7.99998C14.6666 4.31808 11.6818 1.33331 7.99992 1.33331C4.31802 1.33331 1.33325 4.31808 1.33325 7.99998C1.33325 11.6819 4.31802 14.6666 7.99992 14.6666Z'
                    stroke='black'
                    stroke-width='1.33333'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M5.33325 8H10.6666'
                    stroke='black'
                    stroke-width='1.33333'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_436_588'>
                    <rect width='16' height='16' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <span className='text-sm'>{item.quantity}</span>
            <button className='text-gray-500 text-sm'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_436_583)'>
                  <path
                    d='M7.99992 14.6666C11.6818 14.6666 14.6666 11.6819 14.6666 7.99998C14.6666 4.31808 11.6818 1.33331 7.99992 1.33331C4.31802 1.33331 1.33325 4.31808 1.33325 7.99998C1.33325 11.6819 4.31802 14.6666 7.99992 14.6666Z'
                    stroke='black'
                    stroke-width='1.33333'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8 5.33331V10.6666'
                    stroke='black'
                    stroke-width='1.33333'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M5.33325 8H10.6666'
                    stroke='black'
                    stroke-width='1.33333'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_436_583'>
                    <rect width='16' height='16' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-end '>
        <button className='text-gray-400 text-sm mb-5 '>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0_436_576)'>
              <path
                d='M7.99992 14.6666C11.6818 14.6666 14.6666 11.6819 14.6666 7.99998C14.6666 4.31808 11.6818 1.33331 7.99992 1.33331C4.31802 1.33331 1.33325 4.31808 1.33325 7.99998C1.33325 11.6819 4.31802 14.6666 7.99992 14.6666Z'
                fill='#D6D3D1'
                stroke='#D4D4D4'
                stroke-width='1.33333'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M10 6L6 10'
                stroke='black'
                stroke-width='1.33333'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M6 6L10 10'
                stroke='black'
                stroke-width='1.33333'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </g>
            <defs>
              <clipPath id='clip0_436_576'>
                <rect width='16' height='16' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </button>
        <p className='text-sm font-medium text-gray-900 mt-5'>
          RM{item.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

const YouMightLikeItem = ({ item }) => {
  return (
    <div className='relative bg-gray-100 rounded-lg overflow-hidden w-full'>
      <img
        src={item.image}
        alt={item.name}
        className='w-full h-34 object-cover'
      />
      <button className='absolute top-2 right-2 bg-black text-white text-xs py-1 px-3 rounded-md'>
        + Add
      </button>
      <p className='absolute bottom-2 left-2 text-xs bg-white bg-opacity-70 px-2 py-0.5 rounded-md'>
        RM{item.price.toFixed(2)}
      </p>
    </div>
  );
};

const ShoppingSummary = ({ items, total, onCheckout }) => {
  return (
    <div className='w-[460px] h-screen bg-white shadow-lg fixed top-0 right-0 z-50 overflow-y-auto'>
      {/* Header */}
      <div className='p-6 border-gray-200'>
        <h2 className='text-left text-gray-600 font-inter font-medium text-[16px] leading-[22.4px] md:text-[18px] md:leading-[25.2px]'>
          Shopping Summary
        </h2>
      </div>

      {/* Items */}
      <div className='px-6'>
        {items.map((item, index) => (
          <ShoppingCartItem key={index} item={item} />
        ))}
      </div>

      {/* Continue Shopping */}
      <div className='px-6 mt-4 '>
        <a
          href='#'
          className='text-sm text-gray-600 underline hover:text-gray-800 block text-center border-b border-gray-200 pb-5'
        >
          Continue Shopping
        </a>
      </div>

      {/* You Might Also Like */}
      <div className='px-6 mt-6'>
        <h3 className='text-sm font-medium text-gray-600 mb-4'>
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
      <div className='px-6 py-6 mt-6 border-t border-gray-200'>
        <div className='flex justify-between text-sm font-medium text-gray-900'>
          <span>Subtotal</span>
          <span>RM{total.toFixed(2)}</span>
        </div>
        <p className='text-xs text-gray-500 mt-2'>
          Tax included.{' '}
          <a href='#' className='underline'>
            Shipping
          </a>{' '}
          calculated at checkout.
        </p>
        <button
          className='w-full bg-black text-white py-3 mt-6  text-sm font-semibold'
          onClick={onCheckout}
        >
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default ShoppingSummary;
