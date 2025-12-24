import React, { useState } from "react";
import LottieWrapper from "lottie-react";
import { motion } from "framer-motion";
import { FaBriefcase, FaPaperPlane } from "react-icons/fa";
import jobAddAnimation from "../../assets/Lotties/Company employees sharing thoughts and ideas.json";
import UseAuth from "../../Hooks/UseAuth";
import Others from "../Home/Others";
import Swal from "sweetalert2";
import axios from "axios";

const Lottie = LottieWrapper.default || LottieWrapper;

const AddJob = () => {
  const { user } = UseAuth();
  const [loading, setLoading] = useState(false);

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

   
    const { min, max, currency, ...newJob } = data;

    if (Number(min) < 0 || Number(max) < 0) {
      return Swal.fire("Error", "Salary cannot be negative!", "error");
    }

    if (Number(min) > Number(max)) {
      return Swal.fire("Error", "Min salary can't be more than Max salary!", "error");
    }

    const selectedDate = new Date(data.deadline);
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    if (selectedDate < today) {
      return Swal.fire("Error", "Deadline cannot be in the past!", "error");
    }

  
    newJob.salaryRange = { 
        min: parseInt(min), 
        max: parseInt(max), 
        currency 
    };

   
    newJob.requirements = data.requirements.split(",").map((req) => req.trim());
    newJob.responsibilities = data.responsibilities.split(",").map((res) => res.trim());
    newJob.status = "active";

    setLoading(true);

  
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your Job has been saved & published successfully",
            confirmButtonColor: "#6d28d9",
          });
          form.reset(); 
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
          confirmButtonColor: "#ef4444",
        });
      })
      .finally(() => {
        setLoading(false); 
      });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
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
              Fill out the form below to add a new job opening accurately.
            </p>
          </motion.div>

          <div className="lg:w-1/3 w-full max-w-75">
            {jobAddAnimation && (
              <Lottie animationData={jobAddAnimation} loop={true} />
            )}
          </div>
        </header>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[25px] shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
              <FaBriefcase className="text-violet-600" /> Please Add a job
            </h2>

            <form onSubmit={handleAddJob} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Job Basic Info */}
                <fieldset className="fieldset bg-violet-50/50 border-base-300 rounded-2xl border p-6 shadow-sm">
                  <legend className="fieldset-legend font-bold text-violet-700 px-2">
                    Job Basic Info
                  </legend>
                  <label className="label font-medium">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="input input-bordered w-full"
                    placeholder="Job Title"
                    required
                  />

                  <label className="label font-medium mt-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    className="input input-bordered w-full"
                    placeholder="Company Name"
                    required
                  />

                  <label className="label font-medium mt-2">Location</label>
                  <input
                    type="text"
                    name="location"
                    className="input input-bordered w-full"
                    placeholder="Location"
                    required
                  />

                  <label className="label font-medium mt-2">Company Logo</label>
                  <input
                    type="url"
                    name="company_logo"
                    className="input input-bordered w-full"
                    placeholder="Logo URL"
                  />
                </fieldset>

                <div className="space-y-8">
                  {/* Job Type */}
                  <fieldset className="fieldset bg-violet-50/50 border-base-300 rounded-2xl border p-6 shadow-sm">
                    <legend className="fieldset-legend font-bold text-violet-700 px-2">
                      Job Type
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      <input
                        type="radio"
                        name="jobType"
                        value="On-site"
                        className="btn btn-outline checked:bg-violet-700 checked:text-white"
                        aria-label="On-site"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="jobType"
                        value="Hybrid"
                        className="btn btn-outline checked:bg-violet-700 checked:text-white"
                        aria-label="Hybrid"
                      />
                      <input
                        type="radio"
                        name="jobType"
                        value="Remote"
                        className="btn btn-outline checked:bg-violet-700 checked:text-white"
                        aria-label="Remote"
                      />
                    </div>
                  </fieldset>

                  {/* Job Category */}
                  <fieldset className="fieldset bg-violet-50/50 border-base-300 rounded-2xl border p-6 shadow-sm">
                    <legend className="fieldset-legend font-bold text-violet-700 px-2">
                      Job Category
                    </legend>
                    <select
                      defaultValue="Development"
                      name="category"
                      className="select select-bordered w-full"
                    >
                      <option disabled>Select Job Category</option>
                      <option>Data Science</option>
                      <option>Teaching</option>
                      <option>Engineering</option>
                      <option>Finance</option>
                      <option>Marketing</option>
                      <option>Development</option>
                      <option>Design</option>
                      <option>Management</option>
                      <option>Infrastructure</option>
                      <option>Quality Assurance</option>
                      <option>Product Management</option>
                      <option>E-commerce</option>
                      <option>IT Support</option>
                    </select>
                  </fieldset>
                </div>

                {/* Salary Range */}
                <fieldset className="fieldset bg-violet-50/50 border-base-300 rounded-2xl border p-6 shadow-sm">
                  <legend className="fieldset-legend font-bold text-violet-700 px-2">
                    Salary Range
                  </legend>
                  <input
                    type="number"
                    name="min"
                    min="0"
                    className="input input-bordered w-full mb-2"
                    placeholder="Min Salary"
                    required
                  />
                  <input
                    type="number"
                    name="max"
                    min="0"
                    className="input input-bordered w-full mb-2"
                    placeholder="Max Salary"
                    required
                  />
                  <select
                    name="currency"
                    className="select select-bordered w-full"
                  >
                    <option>BDT</option>
                    <option>USD</option>
                  </select>
                </fieldset>

                {/* HR Info */}
                <fieldset className="fieldset bg-violet-50/50 border-violet-200 rounded-2xl border p-6 shadow-sm">
                  <legend className="fieldset-legend font-bold text-violet-700 px-2">
                    HR Info
                  </legend>
                  <input
                    type="text"
                    name="hr_name"
                    className="input input-bordered w-full mb-2"
                    placeholder="HR Name"
                    required
                  />
                  <input
                    type="email"
                    defaultValue={user?.email}
                    name="hr_email"
                    className="input input-bordered w-full mb-2"
                    readOnly
                  />
                  <label className="label font-medium">Deadline</label>
                  <input
                    type="date"
                    name="deadline"
                    min={new Date().toISOString().split("T")[0]}
                    className="input input-bordered w-full"
                    required
                  />
                </fieldset>

                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <textarea
                    name="description"
                    className="textarea textarea-bordered h-32"
                    placeholder="Job Description"
                    required
                  ></textarea>
                  <textarea
                    name="requirements"
                    className="textarea textarea-bordered h-32"
                    placeholder="Requirements (comma separated)"
                    required
                  ></textarea>
                  <textarea
                    name="responsibilities"
                    className="textarea textarea-bordered h-32"
                    placeholder="Responsibilities (comma separated)"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-block bg-violet-700 text-white font-bold mt-6 h-14 text-lg border-none hover:bg-violet-800 disabled:bg-gray-400"
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  <FaPaperPlane />
                )}
                {loading ? " Posting..." : " Add Job Listing"}
              </button>
            </form>
          </div>
        </motion.div>
        <Others />
      </div>
    </div>
  );
};

export default AddJob;