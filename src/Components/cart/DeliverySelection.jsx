import { MdOutlineMoreVert } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

const DeliverySelection = ({
  deliveryDetails,
  totalAmount,
  selectedAddress,
  onSelectAddress,
  onProceedToPay,
  onAddNewAddress,
}) => {
  return (
    <div className='w-[480px] h-[calc(100vh-78.5px)] bg-default fixed top-[78.5px] right-0 z-50 overflow-y-auto0 flex flex-col'>
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
        <h2 className='text-base font-medium text-gray-800'>Delivery</h2>
        <div className='text-right text-gray-800 text-sm font-medium'>
          <span className='block'>Order Total</span>
          <span className='font-semibold'>RM{totalAmount}</span>
        </div>
      </div>

      <div className='flex-1 px-6 py-4 space-y-4 overflow-y-auto'>
        <p className='text-sm text-gray-800 font-medium'>
          Delivery Information
        </p>

        <button
          onClick={onAddNewAddress}
          className='w-full py-3 border border-gray-300 rounded-lg text-sm text-gray-800 flex items-center justify-center space-x-2'
        >
          <AiOutlinePlus />
          <span>+ Add new address</span>
        </button>

        {deliveryDetails.map((address, index) => (
          <div
            key={index}
            onClick={() => onSelectAddress(index)}
            className={`border rounded-lg p-4 shadow-sm flex justify-between items-start cursor-pointer ${
              selectedAddress === index ? 'border-blue-500' : 'border-gray-200'
            }`}
          >
            <div className='flex-1'>
              <span
                className={`px-2 py-1 text-xs rounded-md font-medium inline-block mb-2 ${
                  selectedAddress === index
                    ? 'bg-blue-100 text-blue-500'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {selectedAddress === index ? (
                  <svg
                    width='17'
                    height='16'
                    viewBox='0 0 17 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 inline-block'
                  >
                    <circle
                      cx='8.5'
                      cy='8'
                      r='7'
                      fill='#F5F5F5'
                      stroke='#3B82F6'
                      strokeWidth='2'
                    />
                    <circle
                      cx='8.5'
                      cy='8'
                      r='1.5'
                      fill='#3B82F6'
                      stroke='#3B82F6'
                    />
                  </svg>
                ) : (
                  <svg
                    width='17'
                    height='16'
                    viewBox='0 0 17 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 inline-block'
                  >
                    <circle
                      cx='8.5'
                      cy='8'
                      r='7'
                      fill='#F5F5F5'
                      stroke='#D1D5DB'
                      strokeWidth='2'
                    />
                  </svg>
                )}
                {address.type}
              </span>
              <p className='text-sm text-gray-800 font-medium'>
                {address.name}
              </p>
              <p className='text-sm text-gray-600 mt-1 leading-tight'>
                {address.address}
              </p>
              <p className='text-sm text-gray-600 mt-1'>
                {address.phone} | {address.email}
              </p>
            </div>
            <button className='text-gray-500 text-lg'>
              <MdOutlineMoreVert />
            </button>
          </div>
        ))}
      </div>

      <div className='px-6 py-6'>
        <button
          onClick={onProceedToPay}
          className='w-full py-3 bg-black text-white rounded-lg text-sm font-medium'
        >
          PROCEED TO PAY
        </button>
      </div>
    </div>
  );
};

export default DeliverySelection;
