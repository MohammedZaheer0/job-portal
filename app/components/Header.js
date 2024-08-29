"use client";
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
          <div className='mt-8 mb-14 text-center text-white'>
              <h1 className='text-5xl mb-4 font-medium'>Your Ideal Job Awaits, Start The Search</h1>
              <p className='font-medium'>Get latest jobs openings the best suits you!</p>
              <div className='my-10'>
              <Link href='./PostAJob.js'>
                <button className='bg-cyan-500 px-8 py-2 rounded-lg'>Post A Job</button>
                </Link>
              </div>
          </div>
    </div>
  )
}

export default Header
