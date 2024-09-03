"use client";
import companyamazon from "@/public/jobportalimage1.jpg";
import companyapple from "@/public/jobportalimage5.png";
import companyflipkart from "@/public/jobportalimage6.png";
import companyadobe from "@/public/jobportalimage7.jpg";
import companygoogle from "@/public/jobportalimage8.png";
import companytcs from "@/public/jobportalimage9.jpg";
import companysamsung from "@/public/jobportalimage10.png";
import companyhubspot from "@/public/jobportalimage11.jpg";
import companynetflix from "@/public/jobportalimage12.webp";
import companyinfosys from "@/public/jobportalimage13.jpg";
import companymicrosoft from "@/public/jobportalimage14.png";
import companyaccenture from "@/public/jobportalimage15.png";
import companyIBM from "@/public/jobportalimage16.jpg";
import companyfacebook from "@/public/jobportalimage17.jpg";
import companylinkedin from "@/public/jobportalimage18.jpg";
import companycognizont from "@/public/jobportalimage19.jpg";
import companyMoz from "@/public/jobportalimage20.png";
import companysalesforce from "@/public/jobportalimage21.webp";
import companyoracal from "@/public/jobportalimage22.jpg";
import companycisco from "@/public/jobportalimage23.jpg";


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

const MainPage = () => {
  const [jobs, setJobs] = useState([]);
  const [customSearch,setCustomSearch] = useState(false);

  const companyLogo = [companyamazon,companyapple,companyflipkart,companyadobe,companygoogle,companytcs,companysamsung,companyhubspot,companynetflix,companyinfosys,companymicrosoft,companyaccenture,companyIBM,companyfacebook,companylinkedin,companycognizont,companyMoz,companysalesforce,companyoracal,companycisco]

  const fetchJobs = async () => {
    setCustomSearch(false)
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedData","desc"))
    const req = await getDocs(q);
    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      const jobData = job.data();
      const jobId = parseInt(job.id, 10); 
      const  logoIndex = jobId % companyLogo.length;
      tempJobs.push({
        ...jobData,
        id: job.id,
        postedData: jobData.postedData.toDate(),
        companyLogo: companyLogo[logoIndex],
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
      const logoIndex = jobId % companyLogo.length;
      tempJobs.push({
        ...jobData,
        id: job.id,
        postedData: jobData.postedData.toDate(),
        companyLogo: companyLogo[logoIndex],
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
      </div>
    </>
  );
};

export default MainPage;