import React from 'react'

const Input_sm = ({myClass, extra = false, placeholder, onFocus, onBlur, r ,...rest}) => {
  return (
    <>
        <input type="text" onFocus={onFocus} ref={r}  onBlur={onBlur} placeholder={placeholder} disabled={extra} className={`${myClass} w-full font-euclid border-2 rounded-lg outline-none p-1 text-sm`} {...rest} />
    </>
  )
}

export default {
    Input_sm
}