"use client";
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='h-[70vh] w-[100%] flex justify-center items-center'>
      <div className='flex flex-col md:flex-row'>
        <Link href="/mainpage">
          <button className='bg-blue-500 text-white px-10 py-2 text-2xl rounded mb-4 md:mb-0 md:mr-5 hover:bg-black'>
            Job Seeker
          </button>
        </Link>

        <Link href="/mainpage">
          <button className='bg-blue-500 text-white px-10 py-2 text-2xl rounded mb-4 md:mb-0 md:ml-5 hover:bg-black'>
            Recruiter
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
