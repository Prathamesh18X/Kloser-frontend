import React, { useState, useEffect } from "react";

const PaymentQRCode = ({ qrCodeUrl, onCancelTransaction }) => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

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
    <div className="w-[400px] h-screen bg-white shadow-lg fixed top-0 right-0 z-50 overflow-y-auto flex flex-col items-center justify-between">
      {/* Header */}
      <div className="text-center px-6 py-8">
        <h2 className="text-lg font-medium text-gray-800">Pay Securely with DuitNow QR</h2>
        <p className="text-sm text-gray-600 mt-2">
          Kindly scan the QR code below to proceed with payment. <br /> Please do not refresh the page.
        </p>
        <p className="text-lg font-semibold text-gray-800 mt-4">Expires in {formatTime(timeLeft)}</p>
      </div>

      {/* QR Code */}
      <div className="flex justify-center items-center mb-6">
        <img
          src={qrCodeUrl}
          alt="QR Code for Payment"
          className="w-64 h-64 border-4 border-pink-500 rounded-lg"
        />
      </div>
      <p className="text-xs text-center text-gray-500 mb-4">Malaysia National QR</p>

      {/* Cancel Button */}
      <div className="w-full px-6 py-6 border-t border-gray-200">
        <button
          onClick={onCancelTransaction}
          className="w-full py-3 bg-gray-200 text-gray-600 rounded-lg text-sm font-medium"
        >
          CANCEL THE TRANSACTION
        </button>
      </div>
    </div>
  );
};

export default PaymentQRCode;
