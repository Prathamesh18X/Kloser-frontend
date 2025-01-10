import { useState, useEffect } from 'react';

const VerifyNumber = ({ totalAmount, phoneNumber, onNext }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    if (newOtp.every((val) => val.length === 1) && newOtp.length === 4) {
      onNext();
    }
  };

  const handleResendOtp = () => {
    setTimer(30);
    setResendDisabled(true);
    console.log('Resending OTP...');
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);
  };

  return (
    <div className='w-[480px] h-[calc(100vh-78.5px)] bg-default fixed top-[78.5px] right-0 z-50 overflow-y-auto flex flex-col justify-between scrollbar-none custom-scrollbar'>
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
            Verify Number
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

      <div className='flex-1 flex flex-col justify-center px-8'>
        <div className='flex justify-between items-center text-[14px] font-medium leading-[19.6px] text-[#1C1917] font-inter'>
          <p className='text-left'>
            Enter OTP sent to{' '}
            <span className='font-medium text-black'>+{phoneNumber}</span>
          </p>
          <button className='text-right'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_437_1137)'>
                <path
                  d='M7.33301 2.66669H2.66634C2.31272 2.66669 1.97358 2.80716 1.72353 3.05721C1.47348 3.30726 1.33301 3.6464 1.33301 4.00002V13.3334C1.33301 13.687 1.47348 14.0261 1.72353 14.2762C1.97358 14.5262 2.31272 14.6667 2.66634 14.6667H11.9997C12.3533 14.6667 12.6924 14.5262 12.9425 14.2762C13.1925 14.0261 13.333 13.687 13.333 13.3334V8.66669'
                  stroke='black'
                  strokeWidth='1.33333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M12.333 1.66665C12.5982 1.40144 12.9579 1.25244 13.333 1.25244C13.7081 1.25244 14.0678 1.40144 14.333 1.66665C14.5982 1.93187 14.7472 2.29158 14.7472 2.66665C14.7472 3.04173 14.5982 3.40144 14.333 3.66665L7.99967 9.99999L5.33301 10.6667L5.99967 7.99999L12.333 1.66665Z'
                  stroke='black'
                  strokeWidth='1.33333'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_437_1137'>
                  <rect width='16' height='16' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className='flex justify-center gap-3 mt-4'>
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type='text'
              value={value}
              maxLength='1'
              onChange={(e) => handleOtpChange(e.target.value, index)}
              className='w-[94px] h-[50px] text-center border border-[#D6D3D1] rounded-[8px] text-[16px] font-medium text-black focus:ring-2 focus:ring-[#BAE6FD] focus:outline-none focus:shadow-[0px_24px_40px_-16px_rgba(104,75,37,0.08),_0px_4px_6px_0px_rgba(95,74,46,0.04),_0px_1px_2px_0px_rgba(95,74,46,0.08)]'
            />
          ))}
        </div>

        <p className='text-[14px] font-medium leading-[19.6px] tracking-[-0.2px] text-center text-stone-500 font-inter mt-8'>
          Please enter the correct OTP to fetch saved addresses
        </p>

        <div className='flex justify-center items-center mt-8'>
          <input
            id='keep-logged-in'
            type='checkbox'
            className='w-4 h-4 border-gray-300 rounded focus:ring-black'
          />
          <label
            htmlFor='keep-logged-in'
            className='ml-3 text-[14px] font-medium text-[#78716C] leading-[19.6px] tracking-[-0.2px] text-right  font-inter'
          >
            Keep me logged in
          </label>
        </div>

        <div className='mt-8 text-center'>
          <button
            disabled={resendDisabled}
            onClick={handleResendOtp}
            className={`text-[18px] font-medium leading-[25.2px] tracking-[-0.2px] text-right font-inter ${
              resendDisabled ? 'text-[#78716C]' : 'text-[#78716C]'
            }`}
          >
            {resendDisabled
              ? `Resend OTP in 00:${timer < 10 ? `0${timer}` : timer}`
              : 'Resend OTP'}
          </button>
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

export default VerifyNumber;
