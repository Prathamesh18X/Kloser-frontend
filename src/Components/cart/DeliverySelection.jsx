
import { MdOutlineMoreVert } from "react-icons/md"; // Menu icon
import { AiOutlinePlus } from "react-icons/ai"; // Add new address icon

const DeliverySelection = ({ deliveryDetails, totalAmount, selectedAddress, onSelectAddress, onProceedToPay }) => {
  return (
    <div className="w-[400px] h-screen bg-white shadow-lg fixed top-0 right-0 z-50 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <button className="text-gray-600 text-xl">&larr;</button>
        <h2 className="text-base font-medium text-gray-800">Delivery</h2>
        <div className="text-gray-800 text-sm font-medium">
          Order Total: <span className="font-semibold">RM{totalAmount}</span>
        </div>
      </div>

      {/* Delivery Information */}
      <div className="px-6 py-4 space-y-4">
        <p className="text-sm text-gray-800 font-medium">Delivery Information</p>

        {/* Add New Address Button */}
        <button className="w-full py-3 border border-gray-300 rounded-lg text-sm text-gray-800 flex items-center justify-center space-x-2">
          <AiOutlinePlus className="text-lg" />
          <span>+ Add new address</span>
        </button>

        {/* Address List */}
        {deliveryDetails.map((address, index) => (
          <div
            key={index}
            onClick={() => onSelectAddress(index)}
            className={`border rounded-lg p-4 shadow-sm flex justify-between items-start cursor-pointer ${
              selectedAddress === index ? "border-blue-500" : "border-gray-200"
            }`}
          >
            <div className="flex-1">
              <span
                className={`px-2 py-1 text-xs rounded-md font-medium inline-block mb-2 ${
                  selectedAddress === index ? "bg-blue-100 text-blue-500" : "bg-gray-100 text-gray-500"
                }`}
              >
                {address.type}
              </span>
              <p className="text-sm text-gray-800 font-medium">{address.name}</p>
              <p className="text-sm text-gray-600 mt-1 leading-tight">{address.address}</p>
              <p className="text-sm text-gray-600 mt-1">{address.phone} | {address.email}</p>
            </div>
            <button className="text-gray-500 text-lg">
              <MdOutlineMoreVert />
            </button>
          </div>
        ))}
      </div>

      {/* Proceed to Pay Button */}
      <div className="px-6 py-6 border-t border-gray-200">
        <button
          onClick={onProceedToPay}
          className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium"
        >
          PROCEED TO PAY
        </button>
      </div>
    </div>
  );
};

export default DeliverySelection;
