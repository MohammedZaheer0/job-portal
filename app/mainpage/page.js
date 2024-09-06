"use client";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/JobCard";
import Link from "next/link";
import Image from "next/image";
import Event2 from "@/public/jobportalimage2.png";
import Event1 from "@/public/jobportalimage3.png";
import Event3 from "@/public/jobportalimage4.jpg";
import JobsData from "../components/JobsData";
import { useEffect, useState } from "react";
import { collection, query,orderBy, where, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import InterviewAI from '@/public/jobportalimage25.png';

const MainPage = () => {
  const [jobs, setJobs] = useState([]);
  const [customSearch,setCustomSearch] = useState(false);


  const fetchJobs = async () => {
    setCustomSearch(false)
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedData","desc"))
    const req = await getDocs(q);
    req.forEach((job) => {
      const jobData = job.data();
      const jobId = parseInt(job.id, 10); 
      tempJobs.push({
        ...jobData,
        id: job.id,
        postedData: jobData.postedData.toDate(),
      });
    });

    setJobs(tempJobs)
  };



  // const fetchJobsCustom = async (jobCriteria) => {
  //   setCustomSearch(true)
  //   const tempJobs = []
  //   const jobsRef = query(collection(db, "jobs"));
  //   const q = query(jobsRef,
  //   where("type", "==",jobCriteria.type),
  //   where("title", "==",jobCriteria.title),
  //   where("experience", "==",jobCriteria.experience),
  //   where("location", "==",jobCriteria.location),
  //   orderBy("postedData","desc"))
  //   const req = await getDocs(q);
  //   req.forEach((job) => {
  //     // console.log(doc.id, " => ", doc.data());
  //     const jobData = job.data();
  //     const jobId = parseInt(job.id, 10); 
  //     const  logoIndex = jobId % companyLogo.length;
  //     tempJobs.push({
  //       ...jobData,
  //       id: job.id,
  //       postedData: jobData.postedData.toDate(),
  //       companyLogo: companyLogo[logoIndex],
  //     });
  //   });

  //   setJobs(tempJobs)
  // };


  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = collection(db, "jobs");
    let q = query(jobsRef);
  
    if (jobCriteria.type) {
      q = query(q, where("type", "==", jobCriteria.type));
    }
    if (jobCriteria.title) {
      q = query(q, where("title", "==", jobCriteria.title));
    }
    if (jobCriteria.experience) {
      q = query(q, where("experience", "==", jobCriteria.experience));
    }
    if (jobCriteria.location) {
      q = query(q, where("location", "==", jobCriteria.location));
    }
  
    q = query(q, orderBy("postedData", "desc"));
    const req = await getDocs(q);
  
    req.forEach((job) => {
      const jobData = job.data();
      const jobId = parseInt(job.id, 10); 
      // const logoIndex = jobId % companyLogo.length;
      tempJobs.push({
        ...jobData,
        id: job.id,
        postedData: jobData.postedData.toDate(),
        // companyLogo: companyLogo[logoIndex],
      });
    });
  
    setJobs(tempJobs);
  };
  


  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <div className="md:container w-[90%] mx-auto">
        <Header />
        <SearchBar fetchJobsCustom={fetchJobsCustom}/>
        {customSearch && 
          <button onClick={fetchJobs} className="hidden md:flex w-[100%] justify-end items-center my-8">
            <p className="bg-black text-white font-medium w-[30%] mx-auto px-5 py-2 rounded-md hover:bg-cyan-200 hover:text-black">Clear Filter</p>
          </button>
        }

        <div className="grid lg:grid-cols-[1fr_1.5fr] md:grid-cols-[1fr_2.5fr] grid-cols-1 justify-between items-center bg-zinc-200 md:py-6 py-10 md:px-5 px-2 my-14 rounded-medium">
          <div className="hidden lg:block">
            <h1 className="lg:text-3xl mb-4 font-medium">
              Upcoming events and <br />
              challenges
            </h1>
            <Image
              className="eventsimage h-[30%] w-[30%] hidden md:block"
              src={Event1}
              alt="events"
            />
          </div>

          <div className="lg:hidden block">
            <h1 className="text-2xl md:mb-4 mb-8 md:px-1 font-medium">
              Upcoming events and challenges
            </h1>
            <Image
              className="eventsimage h-[30%] w-[30%] md:h-[50%] md:w-[50%] hidden md:block"
              src={Event1}
              alt="events"
            />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
            <div className="border rounded-lg bg-white hover:shadow-lg">
              <Image
                src={Event2}
                alt="events2"
                className="rounded-lg h-[150px] w-[100%]"
              />
              <p className="pt-5 font-bold px-4">
                How to clear FullStack Interview
              </p>
              <p className="pt-2 pb-3 font-bold px-4 text-orange-500 underline">
                FullStack
              </p>
              <Link href="https://youtu.be/Z-_zdiKIY-Y?si=rwMoxx39ECo_Cexp">
                <p className="py-2 px-4 font-medium bg-cyan-600 text-white rounded-full mx-2 text-[14px] border-2 w-fit mb-5">
                  Watch Interview
                </p>
              </Link>
            </div>

            <div className="border rounded-lg bg-white hover:shadow-lg">
              <Image
                src={Event3}
                alt="event3"
                className="rounded-lg h-[150px] w-[100%]"
              />
              <p className="pt-5 font-bold px-4">
                How to clear Data Science Interview
              </p>
              <p className="pt-2 pb-3 font-bold px-4 text-orange-500 underline">
                Data Science
              </p>
              <Link href="https://youtu.be/ShxRD1Y0ubU?si=FcAa6fL2AzxVirUK">
                <p className="py-2 px-4 font-medium bg-cyan-600 text-white rounded-full mx-2 text-[14px] border-2 w-fit mb-5">
                  Watch Interview
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>


      <div className="InterviewAI text-white grid grid-cols-1 md:grid-cols-2 rounded-lg p-5 justify-between items-center my-10 w-[100%] md:w-[80%] mx-auto">
          <div>
                <h1 className="text-2xl my-2">Practice customised mock interviews with AI</h1>
                <p className="text-1xl my-2">Your result will be visible only to you</p>
                <button className="bg-cyan-600 px-6 py-3 rounded-full my-2 font-medium hover:bg-black transition-all">Start for free</button>
          </div>
          <div className="flex justify-end items-center my-5 md:my-0"> 
              <Image
                src={InterviewAI}
                alt="InterviewAI"
                height={180}
                width={180}
                priority
              />
          </div>
      </div>


      </div>
    </>
  );
};

export default MainPage;