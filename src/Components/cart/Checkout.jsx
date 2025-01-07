import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

const Checkout = ({
  totalAmount,
  deliveryDetails,
  onChangeDelivery,
  onPayWith,
}) => {
  return (
    <div className='w-[460px] h-screen bg-default shadow-lg fixed top-0 right-0 z-50 flex flex-col'>
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
          <span className='font-semibold'>RM{totalAmount}</span>
        </div>
      </div>

      <div className='flex-1 px-6 py-4 space-y-3 overflow-y-auto'>
        <div className='border border-gray-200 rounded-lg p-4 shadow-sm flex justify-between items-start'>
          <div className='flex items-start space-x-3'>
            <FaLocationDot className='text-xl text-gray-600' />
            <div>
              <p className='text-sm text-gray-800'>
                <span className='font-medium'>Deliver to</span>
                <span className='ml-1 bg-gray-200 px-2 py-0.5 rounded text-gray-600 truncate'>
                  {deliveryDetails.name}
                </span>
              </p>
              <p className='text-sm text-gray-600 mt-1 leading-tight'>
                {deliveryDetails.address}
              </p>
            </div>
          </div>
          <button
            onClick={onChangeDelivery}
            className='flex items-center space-x-1 text-sm text-gray-600 font-medium'
          >
            <span>Change</span>
            <MdOutlineArrowForwardIos className='text-sm' />
          </button>
        </div>

        <div className='flex justify-between items-center border border-gray-300 rounded-lg px-4 py-2'>
          <div className='flex items-center space-x-2'>
            <TbTruckDelivery className='text-gray-600' />
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

      <div className='px-6 py-6'>
        <button
          onClick={onPayWith}
          className='w-full py-3 bg-black text-white rounded-lg text-sm font-medium flex justify-center items-center'
        >
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
