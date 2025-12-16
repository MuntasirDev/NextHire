import React from "react";
import LottieWrapper from "lottie-react";
import { motion } from "framer-motion";
import { FaBriefcase, FaPaperPlane } from "react-icons/fa";
import jobAddAnimation from "../../src/assets/Lotties/Company employees sharing thoughts and ideas.json"; 

const Lottie = LottieWrapper.default || LottieWrapper;

const AddJob = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Hero / Header Section --- */}
        <header className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 bg-white p-8 md:p-12 rounded-[30px] shadow-sm border border-gray-100">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Post a <span className="text-violet-700">New Job</span> <br />
              Requirement
            </h1>
            <div className="w-20 h-2 bg-violet-600 rounded-full mt-4 mb-6 mx-auto lg:mx-0"></div>
            <p className="text-gray-500 text-lg">
              Fill out the form below to add a new job opening. Please ensure all 
              information is accurate to attract the best candidates.
            </p>
          </motion.div>

          {/* --- Lottie Section --- */}
          <div className="lg:w-1/3 w-48 md:w-64">
            <div className="w-full pointer-events-none">
              
              {jobAddAnimation && (
                <Lottie style={{ width: "300px", height: "500px", margin: "0 auto" }}
                  animationData={jobAddAnimation} 
                  loop={true} 
                />
              )}
            </div>
          </div>
        </header>

        {/* --- Form Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[25px] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden"
        >
          <div className="p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              <FaBriefcase className="text-violet-600" /> Please Add a job
            </h2>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* 1. Basic Info Section */}
                <fieldset className="fieldset bg-base-100 border-base-300 rounded-2xl border p-6 shadow-sm">
                  <legend className="fieldset-legend font-bold text-violet-700 px-2">Job Basic Info</legend>
                  <label className="label font-medium">Title</label>
                  <input type="text" className="input input-bordered w-full focus:outline-violet-600" placeholder="Job Title" />
                  <label className="label font-medium mt-2">Company</label>
                  <input type="text" name="Company" className="input input-bordered w-full focus:outline-violet-600" placeholder="Company Name" />
                  <label className="label font-medium mt-2">Location</label>
                  <input type="text" className="input input-bordered w-full focus:outline-violet-600" placeholder="Company Location" />
                  <label className="label font-medium mt-2">Company Logo</label>
                  <input type="url" name="Company_logo" className="input input-bordered w-full focus:outline-violet-600" placeholder="Company Logo URL" />
                </fieldset>

                <div className="space-y-8">
                  {/* 2. Job Type Section */}
                  <fieldset className="fieldset bg-base-100 border-base-300 rounded-2xl border p-6 shadow-sm">
                    <legend className="fieldset-legend font-bold text-violet-700 px-2">Job JobType</legend>
                    <div className="filter flex flex-wrap gap-2">
                      <input className="btn filter-reset" type="radio" name="JobType" aria-label="All" />
                      <input className="btn" type="radio" name="JobType" aria-label="On-Site" />
                      <input className="btn" type="radio" name="JobType" aria-label="Hybrid" />
                      <input className="btn" type="radio" name="JobType" aria-label="Remote" />
                    </div>
                  </fieldset>

                  {/* 3. Category Section */}
                  <fieldset className="fieldset bg-base-100 border-base-300 rounded-2xl border p-6 shadow-sm">
                    <legend className="fieldset-legend font-bold text-violet-700 px-2">Job Category</legend>
                    <select defaultValue="Select Job Category" name="category" className="select select-bordered w-full focus:outline-violet-600">
                      <option disabled={true}>Select Job Category</option>
                      <option>Data Science</option>
                      <option>Teaching</option>
                      <option>Engineering</option>
                      <option>Finance</option>
                      <option>Marketing</option>
                      <option>Development</option>
                      <option>Design</option>
                    </select>
                  </fieldset>
                </div>

                {/* 4. Salary Range Section */}
                <fieldset className="fieldset bg-base-100 border-base-300 rounded-2xl border p-6 shadow-sm">
                  <legend className="fieldset-legend font-bold text-violet-700 px-2"> Salary Range</legend>
                  <label className="label font-medium">Minimum Salary</label>
                  <input type="text" name="min" className="input input-bordered w-full" placeholder="Minimum Salary" />
                  <label className="label font-medium mt-2"> Maximum Salary</label>
                  <input type="text" name="max" className="input input-bordered w-full" placeholder="Maximum Salary" />
                  <label className="label font-medium mt-2">Currency</label>
                  <select defaultValue="BDT" name="currency" className="select select-bordered w-full">
                    <option>BDT</option>
                    <option>USD</option>
                    <option>Euro</option>
                  </select>
                </fieldset>

                {/* 5. HR Info Section */}
                <fieldset className="fieldset bg-violet-50/50 border-violet-200 rounded-2xl border p-6 shadow-sm">
                  <legend className="fieldset-legend font-bold text-violet-700 px-2">Hr Related Info</legend>
                  <label className="label font-medium">HR Name</label>
                  <input type="text" name="hr_name" className="input input-bordered w-full bg-white" placeholder="Enter your name" />
                  <label className="label font-medium mt-2">HR Email</label>
                  <input type="email" name="hr_mail" className="input input-bordered w-full bg-white" placeholder="Enter Your Email" />
                  <div className="mt-8">
                    <label className="label font-medium"> Application deadline </label>
                    <input type="date" className="input input-bordered w-full bg-white" />
                  </div>
                </fieldset>

                {/* 6. Textareas Section */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <fieldset className="fieldset bg-base-100 border-base-300 rounded-2xl border p-4 shadow-sm">
                    <legend className="fieldset-legend font-bold text-violet-700 px-2">Description</legend>
                    <textarea name="description" className="textarea textarea-bordered w-full h-32" placeholder="Write about the role..."></textarea>
                  </fieldset>
                  <fieldset className="fieldset bg-base-100 border-base-300 rounded-2xl border p-4 shadow-sm">
                    <legend className="fieldset-legend font-bold text-violet-700 px-2">Requirements</legend>
                    <textarea name="requirements" className="textarea textarea-bordered w-full h-32" placeholder="Skill1, Skill2..."></textarea>
                  </fieldset>
                  <fieldset className="fieldset bg-base-100 border-base-300 rounded-2xl border p-4 shadow-sm">
                    <legend className="fieldset-legend font-bold text-violet-700 px-2">Responsibilities</legend>
                    <textarea name="responsibilities" className="textarea textarea-bordered w-full h-32" placeholder="Duty1, Duty2..."></textarea>
                  </fieldset>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  className="btn btn-block bg-violet-700 hover:bg-violet-800 text-white border-none py-4 h-auto text-xl font-bold shadow-lg shadow-violet-200 gap-2 transition-all"
                >
                  <FaPaperPlane /> Add Job Listing
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AddJob;