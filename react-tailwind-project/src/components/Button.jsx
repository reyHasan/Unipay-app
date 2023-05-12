import React from 'react'

const Button = ({styles, text}) => {
    return (
      <button className={`px-4 py-6 font-poppins bg-blue-gradient font-medium text-[18px] text-primary outlline-none ${styles}`}>
        {text}
      </button>
    )
}

export default Button
