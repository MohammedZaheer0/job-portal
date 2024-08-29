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

const MainPage =() => {
  return (
    <>
      <div className="container mx-auto">
        <Header/>
        <SearchBar/>

        <div className="grid md:grid-cols-[1fr_1.5fr] grid-cols-1 justify-between items-center bg-zinc-200 py-6 px-10 my-14 rounded-medium">
          <div>
            <h1 className="text-3xl mb-4 font-medium">Upcoming events and <br />challenges</h1>
            <Image className="eventsimage h-[30%] w-[30%]" src={Event1} alt="events" />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
            <div className="border rounded-lg bg-white hover:shadow-lg">
              <Image src={Event2} alt="events2" className="rounded-lg h-[150px] w-[100%]"/>
              <p className="pt-5 font-bold px-4">How to clear FullStack Interview</p>
              <p className="pt-2 pb-3 font-bold px-4">FullStack</p>
              <Link href='https://youtu.be/Z-_zdiKIY-Y?si=rwMoxx39ECo_Cexp'>
                <p className="py-2 px-4 font-medium bg-cyan-600 text-white rounded-full mx-2 text-[14px] border-2 w-fit mb-5">Watch Interview</p>
              </Link>
            </div>

            <div className="border rounded-lg bg-white hover:shadow-lg">
              <Image src={Event3} alt="event3" className="rounded-lg h-[150px] w-[100%]"/>
              <p className="pt-5 font-bold px-4">How to clear Data Science Interview</p>
              <p className="pt-2 pb-3 font-bold px-4">Data Science</p>
              <Link href='https://youtu.be/ShxRD1Y0ubU?si=FcAa6fL2AzxVirUK'>
                <p className="py-2 px-4 font-medium bg-cyan-600 text-white rounded-full mx-2 text-[14px] border-2 w-fit mb-5">Watch Interview</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {JobsData.map((job) => (
            <JobCard key={job.id} {...job}/>
          ))}
        </div>
      </div>
    </>
  );
}


export default  MainPage;