import React, { useState, useCallback } from 'react';
import axios from 'axios';

const LocationSearchInput = ({width}) => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);
  const [select, setSelect] = useState(false)
  const [loading, setLoading] = useState(true)


  const handleInputChange = useCallback((event) => {
    const inputValue = event.target.value;
    setAddress(inputValue);

    // Use OpenStreetMap Nominatim API to get suggestions
    axios
      .get(`https://nominatim.openstreetmap.org/search?format=json&q=${inputValue}`)
      .then((response) => {
        console.log(response)
        // setLoading(response.loading)
        setSelect(false)
        setSuggestions(response.data);
      })
      .catch((error) => {
        setError('no places found!')
      });
  });


  const handleSelect = (selected) => {
    setAddress(selected)
    setSelect(true)
  };

  return (
    <div className=' relative'>
      <input
        type="text"
        value={address}
        onChange={handleInputChange}
        placeholder="Local area"
        className='w-full max-w-[332px] pl-[10px] bg-transparent outline-none placeholder:text-sm truncate'
      />

      {select?'':<div className={`absolute ${width} left-0 h-max max-h-40 overflow-y-auto noscrollbar top-10 z-50 bg-white shadow-lg border border-gray-50`}>
        {suggestions?.map((suggestion) => (
          <div
          className='cursor-pointer my-2 hover:bg-neutral-100  truncate'
           key={suggestion.place_id}
            onClick={() => handleSelect(suggestion.display_name)}>
            {suggestion.display_name}
          </div>
        ))}
      </div>}
    </div>
  );
};

export default LocationSearchInput;