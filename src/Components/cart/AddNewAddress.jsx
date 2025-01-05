import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AddNewAddress = ({ totalAmount }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);

  const validatePhoneNumber = () => {
    // Check if the phone number is valid
    if (phoneNumber.length < 10) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="w-[400px] h-screen bg-white shadow-lg fixed top-0 right-0 z-50 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <button className="text-gray-600 text-xl">&larr;</button>
        <h2 className="text-base font-medium text-gray-800">Add new address</h2>
        <div className="text-gray-800 text-sm font-medium">
          <span>Order Total</span>
          <span className="ml-2 font-semibold">RM{totalAmount}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Phone Number Label */}
        <label
          htmlFor="phone-number"
          className="block text-sm font-medium text-gray-800 mb-2"
        >
          Phone number
        </label>
        {/* Phone Number Input with Country Selector */}
        <PhoneInput
          country={"my"} // Default to Malaysia
          value={phoneNumber}
          onChange={(value) => setPhoneNumber(value)}
          inputClass={`w-full border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-lg px-3 py-2 text-sm text-gray-800`}
          containerClass="mb-2"
          onBlur={validatePhoneNumber}
          placeholder="Enter phone number"
        />
        {error && (
          <p className="text-red-500 text-sm mt-1">
            Please enter a valid phone number
          </p>
        )}

        {/* Add New Address Button */}
        <button
          className="w-full mt-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
          onClick={validatePhoneNumber}
        >
          + Add new address
        </button>

        {/* Checkbox */}
        <div className="flex items-start mt-6">
          <input
            id="keep-posted"
            type="checkbox"
            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
          />
          <label
            htmlFor="keep-posted"
            className="ml-3 text-sm text-gray-800 leading-5"
          >
            Keep me posted about offers and new collections
          </label>
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

export default AddNewAddress;
