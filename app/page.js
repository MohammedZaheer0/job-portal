"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
    console.log("Running GSAP animation");

    const tl = gsap.timeline();

    // Animation for Job Seeker button
    tl.from(".jobSeekerButton", {
      x: "-100%", // Slide from left
      opacity: 0, // Start with no opacity
      duration: 1, // Duration of animation
      ease: "power2.out", // Easing function
    });

    // Animation for Recruiter button
    tl.from(".recruiterButton", {
      x: "100%", // Slide from right
      opacity: 0, // Start with no opacity
      duration: 1, // Duration of animation
      ease: "power2.out", // Easing function
    });
  }, []);

  return (
    <div className="h-[70vh] w-full flex justify-center items-center overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Job Seeker Button */}
        <Link href="/mainpage" passHref>
          <button className="jobSeekerButton bg-blue-500 text-white px-10 py-2 text-2xl w-[100%] rounded mb-4 md:mr-5 hover:bg-black">
            Job Seeker
          </button>
        </Link>

        {/* Recruiter Button */}
        <Link href="/mainpage" passHref>
          <button className="recruiterButton bg-blue-500 text-white px-10 py-2 text-2xl w-[100%] rounded md:ml-5 hover:bg-black">
            Recruiter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
