import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HotJobsCard from "../Shared Components/HotJobsCard";

// ইমেজ ইমপোর্ট
import Engineer1 from "../../assets/Images/Office1.jpg";
import Engineer2 from "../../assets/Images/developer.jpg";
import Engineer3 from "../../assets/Images/office2.jpg";
import Engineer4 from "../../assets/Images/coder3.jpg";

const Browsejobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://next-hire-server-steel.vercel.app/jobs";

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        setLoading(true);
        setError(null);

        
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", 
        });

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        if (Array.isArray(data)) {
          setJobs(data);
        } else {
          setJobs([]);
        }
      } catch (err) {
        console.error("Fetch error details:", err);
        setError(err.message || "Failed to connect to the server.");
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
        <p className="mt-4 text-violet-700 font-medium animate-pulse">Loading jobs from steel server...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-20 text-center bg-red-50 flex flex-col justify-center items-center px-4">
        <h1 className="text-2xl font-bold text-red-700 mb-2">Something Went Wrong!</h1>
        <p className="text-red-600 mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 bg-white p-8 md:p-16 rounded-[40px] shadow-2xl border border-violet-50">
          <div className="lg:w-1/2">
            <h1 className="text-6xl font-black text-gray-900 leading-tight">
              Browse <br />
              <span className="text-violet-600">All Jobs</span>
            </h1>
            <p className="text-xl text-gray-500 mt-6">
              Total active jobs found: <span className="font-bold text-violet-700">{jobs.length}</span>
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src={Engineer3} className="w-full h-32 object-cover rounded-2xl border-b-4 border-violet-500" alt="1" />
            <img src={Engineer2} className="w-full h-32 object-cover rounded-2xl border-b-4 border-indigo-400 mt-4" alt="2" />
            <img src={Engineer4} className="w-full h-32 object-cover rounded-2xl border-t-4 border-fuchsia-400 -mt-4" alt="3" />
            <img src={Engineer1} className="w-full h-32 object-cover rounded-2xl border-t-4 border-violet-600" alt="4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.length > 0 ? (
            jobs.map((job) => <HotJobsCard key={job._id} job={job} />)
          ) : (
            <div className="col-span-full text-center text-gray-400 py-10">No jobs available right now.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Browsejobs;