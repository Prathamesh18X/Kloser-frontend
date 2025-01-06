
const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12 md:flex md:space-x-12">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="About Us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-3xl font-bold mb-4">About us</h1>
          <p className="text-gray-600">
            At Kloser, we connect buyers and sellers through a sleek, intuitive,
            and clutter-free shopping experience.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p>
              Kloser is built to bring simplicity and elegance to e-commerce. We
              strive to empower sellers with tools to grow their businesses and
              offer buyers a delightful way to discover and purchase products
              they love.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">What We Offer</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Immersive Product Discovery:</strong> A visually
                engaging interface that makes browsing products feel effortless
                and inspiring.
              </li>
              <li>
                <strong>Empowering Sellers:</strong> Tools and microfinancing
                options designed to help sellers scale their businesses with
                ease.
              </li>
              <li>
                <strong>Streamlined User Experience:</strong> A minimalist
                design ensures focus on what matters—connecting buyers with
                great products.
              </li>
              <li>
                <strong>Flexible Payments:</strong> Fast and secure checkout
                options, including QR codes and mobile number payments.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Why Choose Kloser?</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Design That Delights:</strong> Our modern, grid-based
                layout ensures an enjoyable shopping journey.
              </li>
              <li>
                <strong>Support for Growth:</strong> Sellers gain access to
                financial resources and features tailored to boost success.
              </li>
              <li>
                <strong>Clarity and Simplicity:</strong> A clean interface
                eliminates distractions, making shopping intuitive and
                efficient.
              </li>
              <li>
                <strong>Innovation First:</strong> We constantly evolve to bring
                forward-thinking solutions to buyers and sellers.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Join Us Today</h2>
            <p>
              Whether you’re shopping for your next favorite item or growing
              your online store, Kloser is your trusted partner for a better
              e-commerce experience.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-black-600 font-semibold underline hover:no-underline hover:text-blue-800 transition duration-200"
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
