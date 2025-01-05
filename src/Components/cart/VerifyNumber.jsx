import React, { useState, useEffect } from "react";

const VerifyNumber = ({ totalAmount, phoneNumber }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
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
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleResendOtp = () => {
    setTimer(30);
    setResendDisabled(true);
    console.log("Resending OTP...");
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
  };

  return (
    <div className="w-[400px] h-screen bg-white shadow-lg fixed top-0 right-0 z-50 flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <button className="text-gray-600 text-xl">&larr;</button>
        <h2 className="text-base font-medium text-gray-800">Verify Number</h2>
        <div className="text-gray-800 text-sm font-medium">
          Order Total: <span className="font-semibold">RM{totalAmount}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 flex flex-col justify-center">
        <p className="text-sm text-gray-800 text-center">
          Enter OTP sent to <span className="font-medium">+{phoneNumber}</span>
          <button className="ml-2 text-gray-500 text-sm">
            <i className="fas fa-edit"></i>
          </button>
        </p>

        {/* OTP Input */}
        <div className="flex justify-center gap-4 mt-6">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={value}
              maxLength="1"
              onChange={(e) => handleOtpChange(e.target.value, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-gray-400 focus:outline-none"
            />
          ))}
        </div>

        {/* Instructions */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          Please enter the correct OTP to fetch saved addresses
        </p>

        {/* Checkbox */}
        <div className="flex justify-center items-center mt-6">
          <input
            id="keep-logged-in"
            type="checkbox"
            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
          />
          <label
            htmlFor="keep-logged-in"
            className="ml-3 text-sm text-gray-800 leading-5"
          >
            Keep me logged in
          </label>
        </div>

        {/* Resend OTP */}
        <div className="mt-6 text-center">
          <button
            disabled={resendDisabled}
            onClick={handleResendOtp}
            className={`text-sm font-medium ${
              resendDisabled ? "text-gray-400" : "text-black underline"
            }`}
          >
            {resendDisabled
              ? `Resend OTP in 00:${timer < 10 ? `0${timer}` : timer}`
              : "Resend OTP"}
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-6 border-t border-gray-200 text-center text-sm text-gray-500">
        By proceeding, I accept the{" "}
        <a href="#" className="underline">
          T&C
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default VerifyNumber;
