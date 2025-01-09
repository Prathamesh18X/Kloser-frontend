import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const AddNewAddress2 = ({ onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [addressType, setAddressType] = useState('');

  const validateFields = () => {
    const errors = [];

    if (!phoneNumber || phoneNumber.length < 10) {
      errors.push('Phone Number');
    }
    if (!email) {
      errors.push('Email');
    }
    if (!name) {
      errors.push('Name');
    }
    if (!address) {
      errors.push('Address');
    }
    if (!postcode) {
      errors.push('Postcode');
    }
    if (!city) {
      errors.push('City');
    }
    if (!state) {
      errors.push('State');
    }
    if (!addressType) {
      errors.push('Address Type');
    }

    if (errors.length > 0) {
      alert(
        `Please fill the following fields correctly:\n- ${errors.join('\n- ')}`
      );
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid Email address.');
      return false;
    }

    return true;
  };

  const handleSaveAndContinue = () => {
    if (validateFields()) {
      console.log({
        phoneNumber,
        email,
        name,
        address,
        postcode,
        city,
        state,
        addressType,
      });
      onNext();
    }
  };

  return (
    <div className='w-[480px] h-[calc(100vh-78.5px)] bg-default fixed top-[78.5px] right-0 z-50 overflow-y-auto'>
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

      <div className='px-6 py-6 space-y-4'>
        <div className='space-y-2'>
          <label className='block text-[14px] font-medium leading-[19.6px] text-[#1C1917] font-inter'>
            Phone number
          </label>
          <input
            type='tel'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder='Enter phone number'
            className='w-full border border-[#D6D3D1] rounded-lg px-3 py-2 text-sm outline-none bg-[#F5F5F5]'
          />
        </div>

        <div className='space-y-2'>
          <label className='block text-[14px] font-medium leading-[19.6px] text-[#1C1917] font-inter'>
            Email
          </label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='w-full border border-[#D6D3D1] rounded-lg px-3 py-2 text-sm outline-none bg-[#F5F5F5]'
          />
        </div>

        <div className='space-y-2'>
          <label className='block text-[14px] font-medium leading-[19.6px] text-[#1C1917] font-inter'>
            Name
          </label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            className='w-full border border-[#D6D3D1] rounded-lg px-3 py-2 text-sm outline-none bg-[#F5F5F5]'
          />
        </div>

        <div className='space-y-2'>
          <label className='block text-[14px] font-medium leading-[19.6px] text-[#1C1917] font-inter'>
            Address
          </label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Enter your address'
            className='w-full border border-[#D6D3D1] rounded-lg px-3 py-2 text-sm outline-none bg-[#F5F5F5]'
            rows='3'
          />
        </div>

        <div className='space-y-2'>
          <label className='block text-[14px] font-medium leading-[19.6px] text-[#1C1917] font-inter'>
            Postcode
          </label>
          <input
            type='text'
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder='Postcode'
            className='w-full border border-[#D6D3D1] rounded-lg px-3 py-2 text-sm outline-none bg-[#F5F5F5]'
          />
        </div>

        <div className='flex space-x-4'>
          <div className='flex-1 space-y-2'>
            <label className='block text-[14px] font-medium leading-[19.6px] text-[#1C1917] font-inter'>
              City
            </label>
            <input
              type='text'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder='City'
              className='w-full border border-[#D6D3D1] rounded-lg px-3 py-2 text-sm outline-none bg-[#F5F5F5]'
            />
          </div>
          <div className='flex-1 space-y-2'>
            <label className='block text-[14px] font-medium leading-[19.6px] text-[#1C1917] font-inter'>
              State
            </label>
            <input
              type='text'
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder='State'
              className='w-full border border-[#D6D3D1] rounded-lg px-3 py-2 text-sm outline-none bg-[#F5F5F5]'
            />
          </div>
        </div>

        <div className='space-y-2'>
          <label className='block text-[14px] font-medium leading-[19.6px] text-[#1C1917] font-inter'>
            Save address as
          </label>
          <div className='flex space-x-4'>
            <button
              onClick={() => setAddressType('Home')}
              className={`px-4 py-2 text-sm rounded-[100px] text-[12px] font-500 ${
                addressType === 'Home'
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setAddressType('Work')}
              className={`px-4 py-2 text-sm rounded-[100px] text-[12px] font-500 ${
                addressType === 'Work'
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setAddressType('Other')}
              className={`px-4 py-2 text-sm rounded-[100px] text-[12px] font-500 ${
                addressType === 'Other'
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Other
            </button>
          </div>
        </div>
      </div>

      <div className='px-6 py-6 border-t border-gray-200'>
        <button
          onClick={handleSaveAndContinue}
          className='w-full py-3 bg-black text-white  text-sm font-medium text-[14px] font-500'
        >
          SAVE AND CONTINUE
        </button>
      </div>
    </div>
  );
};

export default AddNewAddress2;
