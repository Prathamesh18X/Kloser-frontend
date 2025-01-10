import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const AddNewAddress = ({ totalAmount, onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(false);

  const validatePhoneNumber = () => {
    if (phoneNumber.length < 10) {
      setError(true);
    } else {
      setError(false);
      onNext();
    }
  };

  return (
    <div className='w-[480px] h-[calc(100vh-78.5px)] bg-default fixed top-[78.5px] right-0 z-50 overflow-y-auto scrollbar-none custom-scrollbar'>
      {/* Header */}
      <div className='flex justify-between items-center px-6 py-4 '>
        <div className='flex items-center'>
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
          <h2 className='text-[18px] font-medium leading-[25.2px] text-left text-[#78716C]  ml-2'>
            Add new address
          </h2>
        </div>

        <div className='text-right text-[#78716C] text-[14px] font-medium leading-[19.6px] font-inter'>
          <span className='block text-left'>Order Total</span>
          <span className='flex items-center justify-end text-[18px] font-medium leading-[25.2px] text-[#1C1917] font-inter'>
            RM598.60{' '}
            <svg
              className='ml-2'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 6L8 10L12 6'
                stroke='black'
                stroke-width='1.33333'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </span>
        </div>
      </div>

      <div className='flex flex-col justify-center px-6 py-6 h-[calc(100vh-144px)]'>
        <label className='block text-sm font-medium text-gray-800 mb-2'>
          Phone number
        </label>
        <input
          type='tel'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder='Enter phone number'
          className='w-full border border-[#D6D3D1] rounded-lg px-3 py-2 text-sm outline-none bg-[#F5F5F5]'
        />

        {error && (
          <p className='text-red-500 text-sm mt-1'>
            Please enter a valid phone number
          </p>
        )}
        <button
          className='w-full h-[48px] mt-4 border border-gray-300 rounded-[7px] text-[14px] font-medium leading-[19.6px] text-[#1C1917] bg-white hover:bg-gray-100 font-inter'
          onClick={validatePhoneNumber}
        >
          + Add new address
        </button>

        <div className='flex items-center justify-center mt-6 space-x-3'>
          <input
            id='keep-posted'
            type='checkbox'
            className='w-4 h-4 text-black border-gray-300 rounded focus:ring-black checked:bg-black'
          />
          <label
            htmlFor='keep-posted'
            className='font-inter text-[14px] font-medium text-stone-500'
          >
            Keep me posted about offers and new collections
          </label>
        </div>
      </div>

      <div className='px-6 pb-8  text-center  text-[14px] font-medium  text-[#78716C]'>
        By proceeding, I accept the{' '}
        <a href='#' className='text-[#78716C] '>
          T&C
        </a>{' '}
        and{' '}
        <a href='#' className='text-[#78716C] '>
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default AddNewAddress;
