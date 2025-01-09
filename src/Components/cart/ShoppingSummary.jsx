import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const ShoppingCartItem = ({ item }) => {
  return (
    <div className='flex items-center bg-red justify-between  py-4 border-b border-gray-200'>
      <div className='flex items-center gap-4 mb-3'>
        <img
          src={item.image}
          alt={item.name}
          className='w-16 h-16 object-cover rounded-md'
        />
        <div>
          <h3 className='text-sm font-medium text-[#1C1917]'>{item.name}</h3>
          <div className='flex items-center gap-2 mt-5 '>
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
      <div className='flex flex-col items-end mb-3'>
        <button className='text-sm font-medium text-[#1C1917] '>
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
        className='w-full h-[185px] object-cover'
      />
      <button className='absolute top-3 right-5 bg-black text-white text-xs py-1 px-3 rounded-md'>
        + Add
      </button>
      <p
        className='absolute bottom-2 left-2 text-xs px-2 py-0.5 rounded-md text-[#FFFFFF]'
        style={{
          backgroundColor: '#1E1E1E',
          opacity: '0.4',
          backdropFilter: 'blur(4px)',
        }}
      >
        RM{item.price.toFixed(2)}
      </p>
    </div>
  );
};

const ShoppingSummary = ({ items, total, onCheckout, allitems }) => {
  return (
    <div className='w-[480px] h-[calc(100vh-78.5px)] bg-default fixed top-[78.5px] right-0 z-50 overflow-y-auto'>
      <div className='p-7 border-gray-200'>
        <h2 className='text-left text-[#78716C] font-inter font-medium text-[16px] leading-[22.4px] md:text-[18px] md:leading-[25.2px]'>
          Shopping summary
        </h2>
      </div>

      <div className='px-7'>
        {items.map((item, index) => (
          <ShoppingCartItem key={index} item={item} />
        ))}
      </div>

      <div className='px-7 mt-7 '>
        <a
          href='#'
          className=' text-sm font-medium underline decoration-solid underline-offset-2  block text-center pb-8 border-b border-gray-200 decoration-skip-ink-auto leading-[19.6px] text-[#78716C]'
        >
          Continue Shopping
        </a>
      </div>

      <div className='pl-7 mt-6'>
        <h3 className='text-left text-sm pb-6 font-medium text-[#78716C] leading-[19.6px] decoration-skip-ink-none'>
          You might also like
        </h3>

        <Swiper spaceBetween={20} slidesPerView={2.4}>
          {allitems.map((item, index) => (
            <SwiperSlide key={index}>
              <YouMightLikeItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='px-7 py-5 mt-5 border-t border-gray-200'>
        <div className='flex justify-between text-[16px] font-medium text-[#1C1917] leading-[22.4px] font-inter'>
          <span>Subtotal</span>
          <span className='text-right'>RM{total.toFixed(2)}</span>
        </div>

        <p className='text-[12px] font-medium leading-[16.8px] text-left text-[#78716C] font-inter mt-2'>
          Tax included.{' '}
          <a href='#' className='underline'>
            Shipping
          </a>{' '}
          calculated at checkout.
        </p>

        <button
          className='w-full bg-[#000000] text-white py-3 mt-6 text-[14px] font-medium  '
          onClick={onCheckout}
        >
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default ShoppingSummary;
