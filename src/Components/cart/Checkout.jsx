import { FaLocationDot } from 'react-icons/fa6'; // Delivery icon
import { MdOutlineArrowForwardIos } from 'react-icons/md'; // Forward arrow
import { TbTruckDelivery } from 'react-icons/tb'; // Shipping icon

const Checkout = ({ totalAmount, deliveryDetails }) => {
  return (
    <div className='w-[400px] h-screen bg-white shadow-lg fixed top-0 right-0 z-50 flex flex-col'>
      <div className='flex justify-between items-center px-6 py-4'>
        <button className='text-gray-600 text-xl'>
          <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='28' height='28' rx='8' fill='#E7E5E4' />
            <path
              d='M18.6668 14H9.3335'
              stroke='#78716C'
              strokeWidth='1.33333'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14.0002 18.6666L9.3335 14L14.0002 9.33331'
              stroke='#78716C'
              strokeWidth='1.33333'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <h2 className='text-base font-medium text-gray-800'>Check out</h2>
        <div className='text-right text-gray-800 text-sm font-medium'>
          <span className='block'>Order Total</span>
          <span className='font-semibold'>RM598.60</span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className='flex-1 px-6 py-4 space-y-3 overflow-y-auto'>
        {/* Delivery Information */}
        <div className='border border-gray-200 rounded-lg p-4 shadow-sm flex justify-between items-start'>
          <div className='flex items-start space-x-3'>
            <svg
              width='46'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54926 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54926 14 5.07539 14 6.66669Z'
                stroke='black'
                strokeWidth='1.33333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z'
                stroke='black'
                strokeWidth='1.33333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <div>
              <p className='text-sm text-gray-800'>
                <span className='font-medium'>Deliver to</span>
                <span className='ml-1 bg-gray-100 px-2 py-0.5 rounded text-gray-600 truncate'>
                  Ali Bin Ahmad...
                </span>
              </p>
              <p className='text-sm text-gray-600 mt-1 leading-tight'>
                {deliveryDetails.address}
              </p>
            </div>
          </div>
          <button className='flex items-center space-x-1 text-sm text-blue-500 font-medium'>
            <span>Change</span>
            <MdOutlineArrowForwardIos className='text-sm' />
          </button>
        </div>

        {/* Shipping Information */}
        <div className='flex justify-between items-center border border-gray-300 rounded-lg px-4 py-2'>
          <div className='flex items-center space-x-2'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.667 2H0.666992V10.6667H10.667V2Z'
                stroke='black'
                strokeWidth='1.33333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10.667 5.33331H13.3337L15.3337 7.33331V10.6666H10.667V5.33331Z'
                stroke='black'
                strokeWidth='1.33333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3.66667 14C4.58714 14 5.33333 13.2538 5.33333 12.3334C5.33333 11.4129 4.58714 10.6667 3.66667 10.6667C2.74619 10.6667 2 11.4129 2 12.3334C2 13.2538 2.74619 14 3.66667 14Z'
                stroke='black'
                strokeWidth='1.33333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12.3337 14C13.2541 14 14.0003 13.2538 14.0003 12.3334C14.0003 11.4129 13.2541 10.6667 12.3337 10.6667C11.4132 10.6667 10.667 11.4129 10.667 12.3334C10.667 13.2538 11.4132 14 12.3337 14Z'
                stroke='black'
                strokeWidth='1.33333'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <p className='text-sm text-gray-800'>
              <span className='font-medium'>Shipping</span>
              <span className='ml-1 bg-gray-100 px-2 py-0.5 rounded text-gray-600 truncate'>
                Free Standard...
              </span>
            </p>
          </div>
          <span className='bg-green-100 text-green-600 px-2 py-0.5 text-sm font-medium rounded'>
            Free
          </span>
        </div>
      </div>

      {/* Payment Button */}
      <div className='px-6 py-6 '>
        <button className='w-full py-3 bg-black text-white text-sm font-medium flex justify-center items-center'>
          <span className='mr-2'>PAY WITH</span>
          <img
            src='../../public/assets/PayNet_logo.png'
            alt='PayNet'
            className='h-5'
          />
        </button>
      </div>
    </div>
  );
};

export default Checkout;
