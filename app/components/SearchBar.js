"use client";
import React, { useState } from 'react';

const SearchBar = ({ fetchJobsCustom }) => {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: "",
  });

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(jobCriteria);

  const search = async () => {
    if (fetchJobsCustom) {
      await fetchJobsCustom(jobCriteria);
    } else {
      console.error("fetchJobsCustom is not defined");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };



// "use client";
// import React, { useState } from 'react';

// const SearchBar = ({ fetchJobsCustom }) => {
//   const [jobCriteria, setJobCriteria] = useState({
//     title: "",
//     location: "",
//     experience: "",
//     type: "",
//   });

//   const handleChange = (e) => {
//     setJobCriteria((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchJobsCustom(jobCriteria); 
//   };


  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-10"
      >
        <select
          onChange={handleChange}
          name="title"
          value={jobCriteria.title}
          className="outline-none px-4 bg-zinc-200 py-2 rounded-md"
        >
          <option disabled hidden value="">
            Job Role
          </option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="iOS Developer">iOS Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Graphic Designer">Graphic Designer</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Power BI Developer">Power BI Developer</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Business Analytics">Business Analytics</option>
          <option value=".Net Developer">.Net Developer</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Quality Assurance">Quality Assurance</option>
        </select>

        <select
          onChange={handleChange}
          name="type"
          value={jobCriteria.type}
          className="outline-none px-4 bg-zinc-200 py-2 rounded-md"
        >
          <option disabled hidden value="">
            Job Type
          </option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
          <option value="Freelance">Freelance</option>
          <option value="Temporary">Temporary</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
          <option value="Shift Work">Shift Work</option>
        </select>

        <select
          onChange={handleChange}
          name="location"
          value={jobCriteria.location}
          className="outline-none px-4 bg-zinc-200 py-2 rounded-md"
        >
          <option disabled hidden value="">
            Location
          </option>
          <option value="Remote">Remote</option>
          <option value="In-Office">In-Office</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <select
          onChange={handleChange}
          name="experience"
          value={jobCriteria.experience}
          className="outline-none px-4 bg-zinc-200 py-2 rounded-md"
        >
          <option disabled hidden value="">
            Experience
          </option>
          <option value="Fresher">Fresher</option>
          <option value="Junior">Junior Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
        </select>

        <button
          onClick={search}
          className="bg-cyan-600 text-white font-medium px-14 py-2 rounded-md hover:bg-cyan-200 hover:text-black"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
