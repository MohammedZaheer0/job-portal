import React from 'react';
import JobPortalLogo from "@/public/jobportalLogo.png";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {

  const pathname = usePathname();

  return (
    <div className='footerbg container mx-auto my-5 p-4 text-white' id='footer'>
        <div>
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
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Footer
