import React, { Suspense, useMemo } from "react";
import LottieWrapper from "lottie-react";
import { motion } from "framer-motion";
import UseAuth from "../../Hooks/UseAuth";
import { jobsCreatedBypromise } from "../../API/JobsApi";
import JobList from "../../JobList/JobList";
import Others from "../Home/Others"; 
import companyLottie from "../../assets/Lotties/Working Online.json"; 
import applicantLottie from "../../assets/Lotties/Company employees sharing thoughts and ideas.json";

const Lottie = LottieWrapper.default || LottieWrapper;

const MyPostedJobs = () => {
  const { user } = UseAuth();

  const jobsPromise = useMemo(() => {
    if (user?.email) {
      return jobsCreatedBypromise(user.email);
    }
    return null;
  }, [user?.email]);

  if (!user?.email) return <p className="p-10 text-center">Loading user info...</p>;

  return (
    <div className="min-h-screen bg-gray-50/30 py-8">
      <div className="container mx-auto px-4">
        
        {/* --- Banner Section --- */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[30px] shadow-sm border border-violet-100 p-8 md:p-12 mb-12 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Left Side: Company Animation */}
          <div className="w-full lg:w-1/4 max-w-50">
             <Lottie animationData={companyLottie} loop={true} />
          </div>

          {/* Center Content: Text */}
          <div className="flex-1 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Manage Your <span className="text-violet-700">Posted Jobs</span>
            </h1>
            <div className="w-24 h-1.5 bg-violet-600 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Welcome back! Here you can track all your active job listings, 
              view candidate applications, and manage your company's recruitment flow in one place.
            </p>
          </div>

          {/* Right Side: Applicant Animation */}
          <div className="w-full lg:w-1/4 max-w-50">
             <Lottie animationData={applicantLottie} loop={true} />
          </div>
        </motion.header>

        {/* --- Jobs List Section --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-violet-100 rounded-xl text-violet-700 font-bold">
               My Active Listings
            </div>
          </div>

          {jobsPromise ? (
            <Suspense fallback={
              <div className="flex justify-center py-20">
                <span className="loading loading-spinner loading-lg text-violet-600"></span>
              </div>
            }>
              <JobList jobsCreatedBypromise={jobsPromise} />
            </Suspense>
          ) : (
            <div className="bg-white p-10 rounded-2xl text-center shadow-sm">
               <p className="text-gray-400">No jobs posted yet by {user.email}</p>
            </div>
          )}
        </div>

      
        <Others />
      </div>
    </div>
  );
};

export default MyPostedJobs;