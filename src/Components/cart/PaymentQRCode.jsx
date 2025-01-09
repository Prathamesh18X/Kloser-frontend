import { useState, useEffect } from 'react';

const PaymentQRCode = ({ qrCodeUrl, onCancelTransaction }) => {
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <div className='w-[480px] h-[calc(100vh-78.5px)] bg-default fixed top-[78.5px] right-0 z-50 overflow-y-auto flex flex-col items-center justify-between'>
      <div className='text-center px-6 pt-10 mt-10 flex flex-col items-center justify-center'>
        <h2 className='text-[18px] font-medium leading-[25.2px] text-[#1C1917]'>
          Pay Securely with DuitNow QR
        </h2>

        <p className='text-[14px] text-[#78716C] mt-2'>
          Kindly scan the QR code below to proceed with payment. <br /> Please
          do not refresh the page.
        </p>

        <p className='text-[24px] font-500 text-[#78716C] mt-3'>
          Expires in {formatTime(timeLeft)}
        </p>

        <div className='flex flex-col justify-center items-center mb-6 mt-4'>
          <img
            src='../../public/assets/QR code.png'
            alt='QR Code for Payment'
            className='w-[200px] h-[200px] '
          />
        </div>
      </div>

      <div className='w-full px-6 py-6 '>
        <button
          onClick={onCancelTransaction}
          className='w-full py-3 bg-gray-200 text-gray-600  text-sm font-medium'
        >
          CANCEL THE TRANSACTION
        </button>
      </div>
    </div>
  );
};

export default PaymentQRCode;
