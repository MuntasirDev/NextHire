import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HotJobsCard from "../Shared Components/HotJobsCard";
import Engineer1 from "../../assets/Images/Office1.jpg";
import Engineer2 from "../../assets/Images/developer.jpg";
import Engineer3 from "../../assets/Images/office2.jpg";
import Engineer4 from "../../assets/Images/coder3.jpg";

const Browsejobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = "http://localhost:3000/Jobs";

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          if (response.status === 401)
            throw new Error("Unauthorized: Please login again.");
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setJobs(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message || "Failed to fetch jobs.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        <span className="loading loading-bars loading-lg text-violet-700"></span>
        <span className="mt-4 text-violet-700 font-medium animate-pulse">
          Loading all job listings...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-20 text-center bg-red-50 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold text-red-700 mb-4">
          Access Denied or Error
        </h1>
        <p className="text-lg text-red-600 max-w-md">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg"
        >
          Retry / Login Again
        </button>
      </div>
    );
  }

  const slideInLeft = (delay) => ({
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: delay, ease: "easeOut" },
  });

  return (
    <div className="min-h-screen py-12 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Hero Section --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 bg-white p-8 md:p-16 rounded-[40px] shadow-2xl shadow-violet-100 border border-violet-50">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-[1.1]">
              Browse <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-indigo-600">
                All Jobs
              </span>
            </h1>
            <div className="w-20 h-2 bg-violet-600 rounded-full my-8"></div>
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
              Discover your potential. We have{" "}
              <span className="font-bold text-gray-800">{jobs.length}</span>{" "}
              active opportunities waiting for your expertise.
            </p>
          </motion.div>

          {/* --- Image Section (Static Slide-in from Left) --- */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
            {/* Image 1: Top Left */}
            <motion.div {...slideInLeft(0.2)}>
              <img
                src={Engineer3}
                className="w-full h-44 object-cover rounded-[2.5rem] border-b-8 border-l-8 border-violet-500 shadow-2xl"
                alt="office"
              />
            </motion.div>

            {/* Image 2: Top Right */}
            <motion.div {...slideInLeft(0.4)} className="mt-10">
              <img
                src={Engineer2}
                className="w-full h-44 object-cover rounded-[2.5rem] border-b-8 border-r-8 border-indigo-400 shadow-2xl"
                alt="developer"
              />
            </motion.div>

            {/* Image 3: Bottom Left */}
            <motion.div {...slideInLeft(0.6)} className="-mt-10">
              <img
                src={Engineer4}
                className="w-full h-44 object-cover rounded-[2.5rem] border-t-8 border-l-8 border-fuchsia-400 shadow-2xl"
                alt="coder"
              />
            </motion.div>

            {/* Image 4: Bottom Right */}
            <motion.div {...slideInLeft(0.8)}>
              <img
                src={Engineer1}
                className="w-full h-44 object-cover rounded-[2.5rem] border-t-8 border-r-8 border-violet-600 shadow-2xl"
                alt="team"
              />
            </motion.div>

            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-100 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>

        {/* --- Job Listings --- */}
        <div className="mb-10 flex items-center gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Available Openings
          </h2>
          <div className="flex-1 h-0.5 bg-linear-to-r from-violet-200 to-transparent"></div>
        </div>

        {jobs.length === 0 ? (
          <div className="text-center p-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-2xl text-gray-400 font-medium">
              No job listings found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobs.map((job, index) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HotJobsCard job={job} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Browsejobs;
