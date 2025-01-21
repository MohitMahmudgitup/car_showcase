import Image from 'next/image'
import { footerLinks } from '@/app/contants'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='flex flex-col text-black mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap  justify-between gap-5 sm:px-16 px-6 py-10 '>
        <div className='flex justify-start items-start flex-col'>
          <Image src="/logo.svg"  alt="#" width={180} height={18} className='object-center' />
          <p className='text-base text-gray-700'>Car Hub 2025
            <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className='footer__links'>
          {
            footerLinks.map((link, index) => (
              <div key={index} className='footer__link'>
                <h3 className='font-bold'>{link.title}</h3>
                {
                  link.links.map((item, index) => (
                    <Link key={index} href={item.url} className='text-gray-500'>
                      {item.title}
                    </Link>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
        <div className='flex justify-center sm:px-16 px-6 items-center py-8 text-gray-500'>
          <p>mohitmahmud &copy; 2025 </p>
        </div>
    </footer>
  )
}

export default Footer
