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
    <div className='w-[460px] h-screen bg-default shadow-lg fixed top-16 right-0 z-50 overflow-y-auto'>
      <div className='flex justify-between items-center px-6 py-4 border-b border-gray-200'>
        <h2 className='text-base font-medium text-gray-800'>Add new address</h2>
      </div>

      <div className='px-6 py-6 space-y-4'>
        <label className='block text-sm font-medium text-gray-800'>
          Phone number
        </label>
        <PhoneInput
          country={'my'}
          value={phoneNumber}
          onChange={setPhoneNumber}
          inputClass='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none'
          containerClass='mb-2'
          placeholder='Enter phone number'
        />

        <label className='block text-sm font-medium text-gray-800'>Email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none'
        />

        <label className='block text-sm font-medium text-gray-800'>Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none'
        />

        <label className='block text-sm font-medium text-gray-800'>
          Address
        </label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder='Enter your address'
          className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none'
          rows='3'
        />

        <label className='block text-sm font-medium text-gray-800'>
          Postcode
        </label>
        <input
          type='text'
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          placeholder='Postcode'
          className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none'
        />

        <div className='flex space-x-4'>
          <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-800'>
              City
            </label>
            <input
              type='text'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder='City'
              className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none'
            />
          </div>
          <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-800'>
              State
            </label>
            <input
              type='text'
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder='State'
              className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none'
            />
          </div>
        </div>

        <div className='flex space-x-4 items-center'>
          <label className='block text-sm font-medium text-gray-800'>
            Save address as
          </label>
          <button
            onClick={() => setAddressType('Home')}
            className={`px-4 py-2 text-sm rounded-lg ${addressType === 'Home' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Home
          </button>
          <button
            onClick={() => setAddressType('Work')}
            className={`px-4 py-2 text-sm rounded-lg ${addressType === 'Work' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Work
          </button>
          <button
            onClick={() => setAddressType('Other')}
            className={`px-4 py-2 text-sm rounded-lg ${addressType === 'Other' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            Other
          </button>
        </div>
      </div>

      <div className='px-6 py-6 border-t border-gray-200'>
        <button
          onClick={handleSaveAndContinue}
          className='w-full py-3 bg-black text-white rounded-lg text-sm font-medium'
        >
          SAVE AND CONTINUE
        </button>
      </div>
    </div>
  );
};

export default AddNewAddress2;
