import React from 'react'

function Button({label, iconURL, backgroundColor, textColor,borderColor}) {
  return (
    <button
  className={`flex justify-center items-center gap-2 px-7 py-4 
    font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red'}
    rounded-full text-white border-coral-red`}
>
  {label}
  {iconURL && (
    <img
      src={iconURL} 
      alt="right arrow"
      className="ml-2 rounded-full w-5 h-5"
    />
  )}
</button>

  )
}

export default Button