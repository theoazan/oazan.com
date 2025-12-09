import React from 'react';

function FooterContent() {
  return (
    <footer className=" bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white py-12">
      <p className="text-center text-base pt-8 font-semibold">
        © {new Date().getFullYear()} Oazan Technologies - All rights reserved
        {' '}
        
      </p>
    </footer>
  );
}

export default FooterContent;
