"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

const Header = () => {
  const [text,setText] = useState("");
  
  const  SearchInput = (e) => {
    setText(e.target.value)
  }

  // const FilterData = document.getElementById("jobrole options");
  // if(FilterData === text){
  //   <SearchBar jobrole={text}/>
  // }

  return (
    <div id='header'>
          <div className='mt-8 mb-14 text-center text-white'>
            {/* <form action="" onSubmit={(e)=>{e.preventDefault()}} className='md:hidden w-[100%] md:w-[60%] mx-auto my-8  grid grid-cols-1 gap-5 sm:gap-0 sm:grid-cols-[3fr_1fr] justify-between items-center'>
              <input type="search" name="jobsearch" id="jobsearch" value={text} onChange={SearchInput} className='outline-none py-2 px-10 text-black rounded-lg sm:rounded-none' placeholder='Search For A Job'/>
              <button type="submit" className='py-2 px-10 w-fit mx-auto sm:mx-0 rounded-lg sm:rounded-none bg-blue-500'>Search</button>
            </form> */}

              <h1 className='md:text-5xl text-3xl mb-4 font-medium'>Your Ideal Job Awaits, Start The Search</h1>
              <p className='font-medium'>Get latest jobs openings that best suits you!</p>

              {/* {
                
              } */}


              {/* <div className='my-10'>
              <Link href='./PostAJob.js'>
                <button className='bg-cyan-500 px-8 py-2 rounded-lg font-medium'>Post A Job</button>
                </Link>
              </div> */}
          </div>
    </div>
  )
}

export default Header;