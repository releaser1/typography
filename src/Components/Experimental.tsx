import React, { useState, useRef } from 'react';

const Experimental: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <button className="mr-4">Home</button>
        <div className="relative inline-block text-left mr-4" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="focus:outline-none"
          >
            Shop
          </button>
          {showDropdown && (
            <div
              className="origin-top-right absolute mr-10 w-64 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-700 z-50"
              onMouseLeave={handleMouseLeave}
            >
              <div className="py-1">
                <div className="px-2 py-2 flex items-center hover:bg-gray-700 cursor-pointer">
                  <div className="bg-example bg-no-repeat w-10 h-8"></div>
                  <span>Sabloane</span>
                </div>
                <div className="px-2 py-2 flex items-center hover:bg-gray-700 cursor-pointer">
                  <div className="bg-example bg-no-repeat w-10 h-8"></div>
                  <span>Poze</span>
                </div>
                <div className="px-2 py-2 flex items-center hover:bg-gray-700 cursor-pointer">
                  <div className="bg-example bg-no-repeat w-10 h-8"></div>
                  <span>Fotografii</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <button>Contacts</button>
      </div>
    </header>
  );
};

export default Experimental;