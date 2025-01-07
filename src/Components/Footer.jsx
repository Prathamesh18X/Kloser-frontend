import React from 'react';

const Footer = () => {
  return (
    <footer className=' bottom-0 left-2 mb-4 mr-4 text-gray-500 text-sm font-medium bg-default py-2 px-4 md:block hidden'>
      <div className='container mx-auto'>
        <p
          style={{
            fontFamily: 'Inter',
            lineHeight: '14px',
            textDecoration: 'none',
          }}
        >
          © {new Date().getFullYear()} Koser. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
