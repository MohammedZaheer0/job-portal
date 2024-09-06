'use client';
import dayjs from 'dayjs';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const JobCard = ({ role, company, jobtype, experience, location, skills, postedData, jobLink }) => {
  const currentDate = dayjs();
  const jobPostedDate = dayjs(postedData);
  const differenceInDays = currentDate.diff(jobPostedDate, 'day');

  return (
    <div className='my-2 md:my-3' id='jobcard'>
      <div className='md:h-[180px] h-[300px] overflow-hidden bg-zinc-200 rounded-md p-4 border-black shadow-lg hover:border-blue-500 hover:translate-y-[5px] flex flex-col md:flex-row md:justify-between justify-center items-center'>
        
        <div>
          <div className='flex items-start justify-between gap-5'>
            <div>
              <h1 className='font-medium'>
                {role} <span className='text-orange-600 font-bold'>{company}</span>
              </h1>
              <p className='mt-2'>
                {jobtype} &#x2022; {experience} &#x2022; {location}
              </p>
            </div>
            {/* {companyLogo && (
              <Image 
                src={companyLogo} 
                alt={`${company} logo`} 
                height={50} 
                width={50} 
                priority 
                className='rounded-full block md:hidden'
              />
            )} */}
          </div>

          <div className='mt-5'>
            {/* Displaying skills with responsive design */}
            <div className='grid grid-cols-2 gap-3 text-[11px] md:hidden'>
              {skills.map((skill, index) => (
                <span key={index} className='bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:text-black'>
                  {skill}
                </span>
              ))}
            </div>

            <div className='hidden md:flex mt-5 flex-wrap gap-2'>
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className={`bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:text-black ${
                    index >= 4 ? 'hidden xl:block' : index >= 2 ? 'hidden md:block xl:hidden' : ''
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className='my-4 md:my-1'>
          {/* {companyLogo && (
            <Image 
              src={companyLogo} 
              alt={`${company} logo`} 
              height={50} 
              width={50} 
              priority 
              className='rounded-full hidden md:block'
            />
          )} */}


          <div className='w-full grid grid-cols-2 md:grid-cols-1 items-center justify-between gap-10 md:gap-0'>
            <p className='md:mt-2 text-[14px]'>
              {/* Posted {differenceInDays > 1 ? `${differenceInDays} days` : `${differenceInDays} day`} ago */}
              {differenceInDays === 0 ? 'Posted today'  : `Posted ${differenceInDays > 1 ? `${differenceInDays} days` : `${differenceInDays} day`} ago`}
            </p>
            <Link target='_black'  href={jobLink} className='w-full flex justify-end md:justify-start'>
              <button  className='md:mt-2 bg-black text-white px-5 py-1 rounded-lg hover:bg-cyan-600'>
                Apply
              </button>
            </Link>
            
          </div>


        </div>
      </div>
    </div>
  );
}

export default JobCard;



