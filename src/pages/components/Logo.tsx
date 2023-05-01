import React from 'react'
import Image from 'next/image'
import logoImage from "../assets/cad-and-cart.png"



type Props = {}

const Logo = (props: Props) => {
  return (
    <Image 
    src={logoImage}
    alt='logo'
    height={90}
    className='absolute top-14 px-4 sm:-rotate-6'
    priority
    />
  )
}

export default Logo