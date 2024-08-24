import React, { useState } from 'react';
import { FaRegBuilding } from "react-icons/fa";

const data = [
  {
    label: 'BHK Type',
    options: [
      { label: '1RK' },
      { label: '1BHK' },
      { label: '2BHK' },
      { label: '3BHK' },
      { label: '4BHK' },
      { label: '4+BHK' },
    ],
  },
  {
    label: 'Rent Range',
    options: [
      {
        label: '10000 - 20000',
      },
      {
        label: '20000 - 40000',

      },
    ],
  },
  {
    label: 'Availability',
    options: [
      { label: 'Immediate' },
      { label: 'Within 15 Days' },
      { label: 'Within 30 Days' },
      { label: 'After 30 Days' },
    ]
  },
  {
    label: 'Tenant type',
    options: [
      {label:"Salaried"}
    ],
  },
  {
    label: 'Furnishing',
    options: [
      { label: "Full" },
      { label: "Semi" },
      { label: "None" }
    ],
  },
  {
    label: 'Property Type',
    options: [
      { label: 'Apartment' },
      { label: 'Sharing' },
      { label: 'Independent House/Villa' },
      { label: 'Gated Community/Villa' },
    ]
  },
  {
    label: 'Parking',
    options: [
      {
        label: 'Two Wheeler',
        options: [
          { label: "Covered" },
          { label: "Open" }
        ]
      },
      {
        label: 'Four Wheeler',
        options: [
          { label: "Covered" },
          { label: "Open" }
        ]
      },

    ],
  },
];


const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
  const [subOpenIndex, setSubOpenIndex] = useState(null);
  const [isFilter, setIsFilter] = useState(false)

  const handleHover = (index) => {
    setOpenIndex(index);
  };

  const handleSubHover = (index) => {
    setSubOpenIndex(index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search query:', query);
  };


  return (
    <form className="flex items-center gap-2 max-w-2xl mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Location'
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <FaRegBuilding className='text-gray-600' />
        </div>
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="search localities/ landmarks/ apartment"
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
        Search
      </button>
      <div className="relative">
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          onClick={()=>setIsFilter(!isFilter)}
        >
          Filter
        </button>
        <div className={`absolute top-full w-[150px] left-0 mt-2 bg-white ${isFilter ? "border border-gray-300": ''} rounded-lg shadow-lg z-10`}>
          {isFilter && data.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <button className="block border-b px-4 w-full py-2 text-gray-700 hover:bg-gray-100">
                {item.label}
              </button>
              {openIndex === index && (
                <div className="absolute top-0 w-[150px] left-full bg-white border border-gray-300 rounded-lg shadow-lg">
                  {item.options.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="relative"
                      onMouseEnter={() => handleSubHover(subIndex)}
                      onMouseLeave={() => setSubOpenIndex(null)}
                    >
                      <button className="block w-full border px-4 py-2 text-gray-700 hover:bg-gray-100">
                        {subItem.label}
                      </button>
                      {subOpenIndex === subIndex && subItem.options && (
                        <div className="absolute top-0 left-full bg-white border border-gray-300 rounded-lg shadow-lg">
                          {subItem.options.map((subSubItem, subSubIndex) => (
                            <button
                              key={subSubIndex}
                              className="block px-4 border-b w-full py-2 text-gray-700 hover:bg-gray-100"
                            >
                              {subSubItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default SearchFilter;
