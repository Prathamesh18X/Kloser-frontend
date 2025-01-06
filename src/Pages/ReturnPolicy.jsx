
const ReturnPolicy = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-4xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-bold text-center mb-6">Return Policy</h1>
        <p className="text-center text-gray-600 mb-8">
          At Kloser, we prioritize your satisfaction. If you’re not completely
          happy with your purchase, our return policy ensures a smooth and
          straightforward process.
        </p>
        <div className="flex justify-center mb-10">
          <img
            src="https://via.placeholder.com/1200x600"
            alt="Warehouse"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <section className="space-y-12 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Eligibility for Returns</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>Items must be returned within 30 days of the delivery date.</li>
              <li>
                Products must be unused, undamaged, and in their original
                packaging, with all tags and labels intact.
              </li>
              <li>
                Certain items, such as perishable goods, personalized products,
                and final-sale items, may not be eligible for return. Please
                refer to the product description for specific details.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">How to Initiate a Return</h2>
            <ol className="list-decimal ml-5 space-y-2">
              <li>
                Contact our support team at{" "}
                <a
                  href="mailto:support@kloser.com"
                  className="text-blue-600 underline"
                >
                  support@kloser.com
                </a>{" "}
                or via the Help section in your account.
              </li>
              <li>
                Provide your order number, reason for return, and any supporting
                information.
              </li>
              <li>
                Once approved, you’ll receive a return authorization and
                instructions for shipping the item back.
              </li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
            <p className="mb-2">
              Refunds will be processed to your original payment method within
              5–7 business days of receiving the returned item.
            </p>
            <p>
              Shipping fees are non-refundable unless the return is due to a
              defect or error on our part.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
            <p>
              If you wish to exchange an item, please initiate a return for the
              original product and place a new order for the desired item.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Damaged or Defective Items
            </h2>
            <p>
              If your item arrives damaged or defective, please contact us
              within 48 hours of delivery with photos of the damage. We’ll
              prioritize resolving the issue for you.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
            <p>
              If you have any questions or need assistance, feel free to reach
              out to our support team at{" "}
              <a
                href="mailto:support@kloser.com"
                className="text-blue-600 underline"
              >
                support@kloser.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReturnPolicy;
