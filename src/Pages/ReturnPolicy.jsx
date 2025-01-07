const ReturnPolicy = () => {
  return (
    <div className='bg-default'>
      <div className='max-w-4xl mx-auto py-10 mb-10 '>
        <h1 className='text-center font-semibold text-black mb-6 text-[24px] leading-[21.6px] tracking-[-0.03em] md:text-[48px] md:leading-[43.2px]'>
          Return Policy
        </h1>

        <p className='text-center text-[#404040] mb-8 md:px-16 font-medium text-[14px] leading-[22.4px] tracking-[-0.03em] sm:text-[16px] sm:leading-[19.6px]'>
          At Kloser, we prioritize your satisfaction. If you’re not completely
          happy with your purchase, our return policy ensures a smooth and
          straightforward process.
        </p>

        <div className='flex justify-center mb-10'>
          <img
            src='https://via.placeholder.com/1400x600' // Adjusted for a larger image
            alt='Warehouse'
            className='w-full rounded-lg shadow-lg'
          />
        </div>
        <section className='space-y-6 md:px-16 '>
          <div>
            <h2 className='text-2xl font-semibold mb-4 text-[16px] leading-[22.4px] tracking-[-0.02em] text-[#1C1917]'>
              Eligibility for Returns
            </h2>
            <ul className='list-disc ml-5 space-y-2 text-[16px] leading-[22.4px] tracking-[-0.02em] text-[#44403C]'>
              <li>
                Items must be returned within 30 days of the delivery date.
              </li>
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
            <h2 className='text-2xl font-semibold mb-4 text-[16px] leading-[22.4px] tracking-[-0.02em] text-[#1C1917]'>
              How to Initiate a Return
            </h2>
            <ol className='list-decimal ml-5 space-y-2 text-[16px] leading-[22.4px] tracking-[-0.02em] text-[#44403C]'>
              <li>
                Contact our support team at{' '}
                <a href='mailto:support@kloser.com'>support@kloser.com</a> or
                via the Help section in your account.
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
            <h2 className='text-2xl font-semibold mb-4 text-[16px] leading-[22.4px] tracking-[-0.02em] text-[#1C1917]'>
              Refunds
            </h2>
            <p className='mb-2 text-[16px] leading-[22.4px] tracking-[-0.02em] text-[#44403C]'>
              Refunds will be processed to your original payment method within
              5–7 business days of receiving the returned item.
            </p>
            <p className='text-[16px] leading-[22.4px] tracking-[-0.02em] text-[#44403C]'>
              Shipping fees are non-refundable unless the return is due to a
              defect or error on our part.
            </p>
          </div>
          <div>
            <h2 className='text-2xl font-semibold mb-4 text-[16px] leading-[22.4px] tracking-[-0.02em] text-[#1C1917]'>
              Exchanges
            </h2>
            <p className='text-[16px] leading-[22.4px] tracking-[-0.02em] text-[#44403C]'>
              If you wish to exchange an item, please initiate a return for the
              original product and place a new order for the desired item.
            </p>
          </div>
          <div>
            <h2 className='text-2xl font-semibold mb-4 text-[16px] leading-[22.4px] tracking-[-0.02em] text-[#1C1917]'>
              Damaged or Defective Items
            </h2>
            <p className='text-[16px] leading-[22.4px] tracking-[-0.02em] text-[#44403C]'>
              If your item arrives damaged or defective, please contact us
              within 48 hours of delivery with photos of the damage. We’ll
              prioritize resolving the issue for you.
            </p>
          </div>
          <div>
            <h2 className='text-2xl font-semibold mb-4 text-[16px] leading-[22.4px] tracking-[-0.02em] text-[#1C1917]'>
              Questions?
            </h2>
            <p className='text-[16px] leading-[22.4px] tracking-[-0.02em] text-[#44403C]'>
              If you have any questions or need assistance, feel free to reach
              out to our support team at{' '}
              <a href='mailto:support@kloser.com'>support@kloser.com</a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReturnPolicy;
