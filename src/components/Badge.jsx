import React from 'react'

const Badge = ({className,badgetext}) => {
  return (
    <div className={` py-[10px] px-[30px] bg-black text-white ${className}`}>{badgetext}</div>
  )
}

export default Badge