import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AddNewAddress = ({ totalAmount }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);

  const validatePhoneNumber = () => {
    if (phoneNumber.length < 10) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="w-[440px] h-screen bg-white shadow-lg fixed top-0 right-0 z-50 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 ">
        <div className="flex items-center">
          <button className="text-gray-600 text-xl">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="28" rx="8" fill="#E7E5E4" />
              <path d="M18.6668 14H9.3335" stroke="#78716C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M14.0002 18.6666L9.3335 14L14.0002 9.33331"
                stroke="#78716C"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h2 className="text-base font-medium text-gray-800 ml-2">Add new address</h2>
        </div>

        <div className="text-right text-gray-800 text-sm font-medium">
          <span className="block">Order Total</span>
          <span className="font-semibold">RM598.60</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center px-6 py-6 h-[calc(100vh-144px)]">
        {/* Phone Number Label */}
        <label htmlFor="phone-number" className="block text-sm font-medium text-gray-800 mb-2">
          Phone number
        </label>
        <PhoneInput
          country={"my"}
          value={phoneNumber}
          onChange={(value) => setPhoneNumber(value)}
          inputClass={`w-full h-[48px] border ${error ? "border-red-500" : "border-gray-300"} rounded-lg px-4 text-sm text-gray-800`}
          containerStyle={{
            width: "100%",
            borderRadius: "8px",
          }}
          placeholder="Enter phone number"
        />
        {error && <p className="text-red-500 text-sm mt-1">Please enter a valid phone number</p>}

        {/* Add New Address Button */}
        <button
          className="w-full h-[48px] mt-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
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
    className="ml-3 font-inter text-[14px] font-medium leading-[19.6px] tracking-[-0.2px] text-right"
    style={{
      color: "#78716C",
    }}
  >
    Keep me posted about offers and new collections
  </label>
</div>

      </div>

      {/* Footer */}
      <div
  className="px-6 py-6 text-center font-inter text-[14px] font-medium leading-[19.6px] tracking-[-0.2px]"
  style={{
    color: "#78716C",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",
  }}
>
  By proceeding, I accept the{" "}
  <a
    href="#"
   
    style={{
      color: "#78716C",
    }}
  >
    T&C
  </a>{" "}
  and{" "}
  <a
    href="#"
   
    style={{
      color: "#78716C",
    }}
  >
    Privacy Policy
  </a>
</div>

    </div>
  );
};

export default AddNewAddress;
