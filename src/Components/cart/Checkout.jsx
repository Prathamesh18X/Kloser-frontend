
import { FaLocationDot } from "react-icons/fa6"; // Delivery icon
import { MdOutlineArrowForwardIos } from "react-icons/md"; // Forward arrow
import { TbTruckDelivery } from "react-icons/tb"; // Shipping icon

const Checkout = ({ totalAmount, deliveryDetails }) => {
  return (
    <div className="w-[400px] h-screen bg-white shadow-lg fixed top-0 right-0 z-50 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <button className="text-gray-600 text-xl">&larr;</button>
        <h2 className="text-base font-medium text-gray-800">Check out</h2>
        <div className="text-gray-800 text-sm font-medium">
          Order Total: <span className="font-semibold">RM{totalAmount}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-4 space-y-3">
  {/* Delivery Information */}
  <div className="border border-gray-200 rounded-lg p-4 shadow-sm flex justify-between items-start">
    <div className="flex items-start space-x-3">
      <FaLocationDot className="text-gray-800 text-lg mt-1" />
      <div>
        <p className="text-sm text-gray-800 font-medium">Deliver to</p>
        <p className="text-sm text-gray-600 font-medium mt-1 truncate">
          {deliveryDetails.name}
        </p>
        <p className="text-sm text-gray-600 mt-1 leading-tight">
          {deliveryDetails.address}
        </p>
      </div>
    </div>
    <button className="flex items-center space-x-1 text-sm text-blue-500 font-medium">
      <span>Change</span>
      <MdOutlineArrowForwardIos className="text-sm" />
    </button>
  </div>

  {/* Shipping Information */}
  <div className="border border-gray-200 rounded-lg p-4 shadow-sm flex justify-between items-center">
    <div className="flex items-center space-x-3">
      <TbTruckDelivery className="text-gray-800 text-lg" />
      <div>
        <p className="text-sm text-gray-800 font-medium">Shipping</p>
        <p className="text-sm text-gray-600 mt-1">Free Standard Shipping</p>
      </div>
    </div>
    <p className="bg-green-100 text-green-500 px-2 py-1 text-sm font-medium rounded-lg">
      Free
    </p>
  </div>
</div>


      {/* Payment Button */}
      <div className="px-6 py-6 border-t border-gray-200">
        <button className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium flex justify-center items-center">
          <span className="mr-2">PAY WITH</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e0/PayNet_logo.png"
            alt="PayNet"
            className="h-5"
          />
        </button>
      </div>
    </div>
  );
};

export default Checkout;
