import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <form action="" className='grid grid-cols-5 gap-10'>

        <select name="jobrole" id="jobrole" className='outline-none px-4 bg-zinc-200 py-2 rounded-md'>
            <option disabled hidden selected>Job Role</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="iOS Developer">iOS Developer</option>
            <option value="Android Developer">Android Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Video Editor">Video Editor</option>
            <option value="Data Entry">Data Entry</option>
            <option value="Power BI Developer">Power BI Developer</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Business Analytics">Business Analytics</option>
            <option value=".Net Developer">.Net Developer</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Quality Assurance">Quality Assurance</option>
</select>



          <select name="jobtype" id="jobtype" className='outline-none px-4 bg-zinc-200 py-2 rounded-md'>
            <option disabled hidden selected>Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
            <option value="Freelance">Freelance</option>
            <option value="Temporary">Temporary</option>
            <option value="Internship">Internship</option>
            <option value="Remote">Remote</option>
            <option value="Shift Work">Shift Work</option>
          </select>


          {/* <select name="location" id="location" className='outline-none px-4 bg-zinc-200 py-2 rounded-md'>
            <option disabled hidden selected>Location</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Chenni">Chenni</option>
            <option value="Kerla">Kerla</option>
            <option value="Delhi">Delhi</option>
            <option value="Bihar">Bihar</option>
            <option value="Haryana">Haryana</option>
            <option value="Maharasthra">Maharasthra</option>
            <option value="Odissa">Odissa</option>
          </select> */}

          <select name="location" id="location" className='outline-none px-4 bg-zinc-200 py-2 rounded-md'>
    <option disabled hidden selected>Location</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
    <option value="Chandigarh">Chandigarh</option>
    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
    <option value="Lakshadweep">Lakshadweep</option>
    <option value="Delhi">Delhi</option>
    <option value="Puducherry">Puducherry</option>
    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
    <option value="Ladakh">Ladakh</option>
</select>




          <select name="experience" id="experience" className='outline-none px-4 bg-zinc-200 py-2 rounded-md'>
            <option disabled hidden selected>Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior">Junior</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
          </select>


          <button type='submit' className='bg-cyan-600 text-white font-medium px-14 py-2 rounded-md hover:bg-cyan-200 hover:text-black'>Search</button>

        </form>
    </div>
  )
}

export default SearchBar
