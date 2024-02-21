import React, { useState, useCallback, useRef } from 'react';
import Inputs from '../Components/Inputs'
import axios from 'axios';

const Label_LocationSearchInput = ({width}) => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);
  const [select, setSelect] = useState(false)
  const [loading, setLoading] = useState(true)

  const [focus_location, setFocus_location] = useState(false)
  const locationRef = useRef()


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
      <div className='relative flex-1'>
                <label onClick={()=> {setFocus_location(true); locationRef.current.focus()}} className={` left-2 ${focus_location?'-top-2 text-blue-800':'top-2 text-gray-600'} transition-all duration-500 px-1 bg-white absolute  text-xs font-medium font-euclid`}>Location
                </label>
                <Inputs.Input_sm
                onFocus={()=> setFocus_location(true)}
                onBlur={(e)=> {setFocus_location(false); e.target.value !== ''? setFocus_location(true): false}}
                r={locationRef}
                onChange={handleInputChange}
                value={address}
                myClass={`${focus_location?'focus:border-blue-800 ':''}`}/>
              </div>

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

export default Label_LocationSearchInput;