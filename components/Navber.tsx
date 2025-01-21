import React from 'react'
import Image from 'next/image'
import CostomButton from "./CostomButton"
import Link from 'next/link'

const Navber = () => {
  return (
    <header className='w-full absolute z-50 '>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href={`/`} className='flex justify-center items-center'>
            <Image src="/logo.svg"  alt="#" width={180} height={18} className='object-center' />
        </Link>
        <CostomButton title='Sign in' btnType = "button" castomStyle = "text-primary-blue rounded-full bg-white min-w-[130px] "/>
      </nav>
    </header>
  )
}

export default Navber
