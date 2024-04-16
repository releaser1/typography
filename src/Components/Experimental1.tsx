import React, { useState } from 'react';

const Experimental1: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <button className="mr-4">Home</button>
        <div className="relative inline-block text-left mr-4">
          <button onClick={() => setShowDropdown(!showDropdown)} className="focus:outline-none">
            Shop
          </button>
          {showDropdown && (
            <div className="origin-top-right absolute shadow-lg bg-gray-800 w-[62vw] h-[68vh]">
              <div className="py-1 flex justify-center">
                <div className="grid grid-cols-6 gap-4">
                  <div className="flex flex-col items-center cursor-pointer hover:text-purple-700">
                    <div className='w-36 h-24 bg-justImage bg-contain hover:border-4'></div>
                    <span className=''>Sabloane1</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className='w-36 h-24 bg-stone-400'></div>
                    <span>Sabloane1</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className='w-36 h-24 bg-stone-400'></div>
                    <span>Sabloane1</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className='w-36 h-24 bg-stone-400'></div>
                    <span>Sabloane1</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className='w-36 h-24 bg-stone-400'></div>
                    <span>Sabloane1</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className='w-36 h-24 bg-stone-400'></div>
                    <span>Sabloane1</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className='w-36 h-24 bg-stone-400'></div>
                    <span>Sabloane1</span>
                  </div>
                  {/* Repetă aceste blocuri pentru fiecare set de elemente din dropdown */}
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

export default Experimental1;