import React from 'react';
import Image from 'next/image';
import JobPortalLogo from "@/public/jobportalLogo.png";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const pathname = usePathname();

  return (
    <div className='grid grid-cols-[2fr_1.5fr] justify-between items-center bg-red-200'>
        <div>
            {/* <h1 className='logo md:text-3xl text-2xl font-medium'>ZAK BOARD.</h1> */}
        <Link href={pathname=="/" ? '/' : '/mainpage'}>
          <Image
            src={JobPortalLogo}
            alt='JobPortalLogo'
            className='cursor-pointer'
            height={110}
            width={110}
          />
          </Link>
        </div>

        <div className='hidden md:block'>
            <Link href='#header' className='redirect'>Home</Link>
            <Link href='#jobcard' className='redirect'>Jobs</Link>
            <Link href='#footer' className='redirect'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
