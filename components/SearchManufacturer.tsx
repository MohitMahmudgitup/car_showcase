"use client"
import { SearchManufacturerProps } from '@/app/types'

import { Combobox, Transition } from '@headlessui/react'
const SearchManufacturer = ({manufacturer , setManufacturer} : SearchManufacturerProps ) => {
   
  return (
    <div className='seacrh-manufacturer'>
        <Combobox>
            <div className=' relative w-full'>
                <Combobox.Button >

                </Combobox.Button>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer