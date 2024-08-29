'use client';
import dayjs from 'dayjs';
import React from 'react';
import Image from 'next/image';
// import JobsData from './JobsData';
import Link from 'next/link';

const JobCard = ({ role, company, jobtype, experience, location, skills, companyLogo, postedData, jobLink })=> {

  const currentDate = dayjs();
  const jobPostedDate = dayjs(postedData);
  const differenceInDays = currentDate.diff(jobPostedDate, 'day');

  return (
    <div className='my-3'>
      <div className='bg-zinc-200 rounded-md p-4 border-black shadow-lg hover:border-blue-500 hover:translate-y-[5px] flex flex-col md:flex-row justify-between items-start'>
        <div>
          <h1 className='font-medium'>{role} <span className='text-orange-600 font-bold'>{company}</span></h1>
          <p className='mt-2'>{jobtype} &#x2022; {experience} &#x2022; {location}</p>
          <div className='mt-5 flex flex-col md:flex-row'>
            {/* {skills.map((skill, index) => (
              <button key={index} className='bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:text-black'>
                {skill}
              </button>
            ))} */}


            <div className='mt-5 flex '>
  {skills.slice(0, 2).map((skill, index) => (
    <button key={index} className='bg-blue-500 text-white px-1 py-1 text-[14px] rounded mr-2 hover:text-black block md:hidden'>
      {skill}
    </button>
  ))}

  {skills.slice(2, 5).map((skill, index) => (
    <button key={index} className='bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:text-black hidden md:block lg:hidden'>
      {skill}
    </button>
  ))}

  {skills.slice(0,7).map((skill, index) => (
    <button key={index} className='bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:text-black hidden lg:block'>
      {skill}
    </button>
  ))}
</div>

          </div>
        </div>
        
        <div className='my-8 md:my-1'>
          <Image 
            src={companyLogo} 
            alt={company} 
            height={50} 
            width={50} 
            priority 
            className='rounded-full'
          />
          <p className='mt-2 text-[14px]'>Posted {differenceInDays} days ago</p>
          <Link href={jobLink}>
            <button className='mt-2 bg-black text-white px-5 py-1 rounded-lg hover:bg-cyan-600'>Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
