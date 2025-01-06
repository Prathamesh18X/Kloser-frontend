const AboutUs = () => {
  return (
    <div className='bg-white text-gray-800'>
      <div className='max-w-6xl mx-auto px-6 py-12 md:flex md:space-x-12'>
        {/* Image Section */}
        <div className='md:w-1/2'>
          <img
            src='../../public/assets/aboutus.jpeg'
            alt='About Us'
            className='rounded-lg shadow-lg w-full'
          />
        </div>

        {/* Text Section */}
        <div className='md:w-1/2 space-y-8'>
          <h1 className='text-[24px] sm:text-[48px] font-semibold sm:font-semibold text-[#171717]'>
            About us
          </h1>

          <p className='text-[14px] sm:text-[16px] font-medium text-[#404040] text-center sm:text-left leading-[19.6px] sm:leading-[22.4px]'>
            At Kloser, we connect buyers and sellers through a sleek, intuitive,
            and clutter-free shopping experience.
          </p>

          <div>
            <h2 className='text-[14px] sm:text-[16px] font-semibold text-[#1C1917] leading-[19.6px] sm:leading-[22.4px] mb-3'>
              Our Mission
            </h2>

            <p className='text-[14px] sm:text-[16px] font-normal text-[#44403C] leading-[19.6px] sm:leading-[22.4px]'>
              Kloser is built to bring simplicity and elegance to e-commerce. We
              strive to empower sellers with tools to grow their businesses and
              offer buyers a delightful way to discover and purchase products
              they love.
            </p>
          </div>

          <div>
            <h2 className='text-[14px] sm:text-[16px] font-semibold text-[#1C1917] leading-[19.6px] sm:leading-[22.4px] mb-3'>
              What We Offer
            </h2>
            <ul className='list-disc ml-5 space-y-2'>
              <li className='text-[14px] sm:text-[16px] font-normal text-[#44403C] leading-[19.6px] sm:leading-[22.4px]'>
                Immersive Product Discovery: A visually engaging interface that
                makes browsing products feel effortless and inspiring.
              </li>
              <li className='text-[14px] sm:text-[16px] font-normal text-[#44403C] leading-[19.6px] sm:leading-[22.4px]'>
                Empowering Sellers: Tools and microfinancing options designed to
                help sellers scale their businesses with ease.
              </li>
              <li className='text-[14px] sm:text-[16px] font-normal text-[#44403C] leading-[19.6px] sm:leading-[22.4px]'>
                Streamlined User Experience: A minimalist design ensures focus
                on what matters—connecting buyers with great products.
              </li>
              <li className='text-[14px] sm:text-[16px] font-normal text-[#44403C] leading-[19.6px] sm:leading-[22.4px]'>
                Flexible Payments: Fast and secure checkout options, including
                QR codes and mobile number payments.
              </li>
            </ul>
          </div>

          <div>
            <h2 className='text-[14px] sm:text-[16px] font-semibold text-[#1C1917] leading-[19.6px] sm:leading-[22.4px] mb-3'>
              Why Choose Kloser?
            </h2>
            <ul className='list-disc ml-5 space-y-2'>
              <li className='text-[14px] sm:text-[16px] font-normal text-[#44403C] leading-[19.6px] sm:leading-[22.4px]'>
                Design That Delights:Our modern, grid-based layout ensures an
                enjoyable shopping journey.
              </li>
              <li className='text-[14px] sm:text-[16px] font-normal text-[#44403C] leading-[19.6px] sm:leading-[22.4px]'>
                Support for Growth:Sellers gain access to financial resources
                and features tailored to boost success.
              </li>
              <li className='text-[14px] sm:text-[16px] font-normal text-[#44403C] leading-[19.6px] sm:leading-[22.4px]'>
                Clarity and Simplicity: A clean interface eliminates
                distractions, making shopping intuitive and efficient.
              </li>
              <li className='text-[14px] sm:text-[16px] font-normal text-[#44403C] leading-[19.6px] sm:leading-[22.4px]'>
                Innovation First: We constantly evolve to bring forward-thinking
                solutions to buyers and sellers.
              </li>
            </ul>
          </div>

          <div>
            <h2 className='text-[14px] sm:text-[16px] font-semibold text-[#1C1917] leading-[19.6px] sm:leading-[22.4px] mb-3'>
              Join Us Today
            </h2>
            <p>
              Whether you’re shopping for your next favorite item or growing
              your online store, Kloser is your trusted partner for a better
              e-commerce experience.
            </p>
            <a
              href='#'
              className='inline-block mt-4 text-black-600 font-semibold underline '
            >
              Start Exploring Kloser
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
