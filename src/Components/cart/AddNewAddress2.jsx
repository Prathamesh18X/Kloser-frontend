import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AddNewAddress2 = ({ totalAmount }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="w-[400px] h-screen bg-white shadow-lg fixed top-0 right-0 z-50 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <button className="text-gray-600 text-xl"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28" height="28" rx="8" fill="#E7E5E4"/>
<path d="M18.6668 14H9.3335" stroke="#78716C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.0002 18.6666L9.3335 14L14.0002 9.33331" stroke="#78716C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>
        <h2 className="text-base font-medium text-gray-800">Add new address</h2>
        <div className="text-gray-800 text-sm font-medium">
          Order Total: <span className="font-semibold">RM{totalAmount}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-4">
        {/* Phone Number with Country Selector */}
        <label className="block text-sm font-medium text-gray-800">
          Phone number
        </label>
        <PhoneInput
          country={"my"} // Default country
          value={phoneNumber}
          onChange={(value) => setPhoneNumber(value)}
          inputClass="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
          containerClass="mb-2"
          placeholder="Enter phone number"
        />

        {/* Email */}
        <label className="block text-sm font-medium text-gray-800">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
        />

        {/* Name */}
        <label className="block text-sm font-medium text-gray-800">
          Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
        />

        {/* Address */}
        <label className="block text-sm font-medium text-gray-800">
          Address (House no, Building, Street, Landmark)
        </label>
        <textarea
          placeholder="Enter your address"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
          rows="3"
        ></textarea>

        {/* Postcode */}
        <label className="block text-sm font-medium text-gray-800">
          Postcode
        </label>
        <input
          type="text"
          placeholder="Postcode"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
        />

        {/* City and State */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-800">
              City
            </label>
            <input
              type="text"
              placeholder="City"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-800">
              State
            </label>
            <input
              type="text"
              placeholder="State"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
            />
          </div>
        </div>

        {/* Save Address As */}
        <label className="block text-sm font-medium text-gray-800">
          Save address as
        </label>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-sm rounded-lg bg-black text-white">
            Home
          </button>
          <button className="px-4 py-2 text-sm rounded-lg bg-gray-200 text-gray-800">
            Work
          </button>
          <button className="px-4 py-2 text-sm rounded-lg bg-gray-200 text-gray-800">
            Other
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="px-6 py-6 border-t border-gray-200">
        <button className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium">
          SAVE AND CONTINUE
        </button>
      </div>
    </div>
  );
};

export default AddNewAddress2;
