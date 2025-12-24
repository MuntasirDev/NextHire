import React, { Suspense, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; 
import ApplicationStats from "./ApplicationStats";
import ApplicationsList from "./ApplicationsList";
import UseAuth from "../../Hooks/UseAuth";
import { fetchMyApplications } from "../../API/ApplicationsAPI";
import { fetchJobSpecificApplications } from "../../API/ApplicationViewApi"; 
import Others from "../Home/Others";

import img1 from "../../assets/Images/Office1.jpg";
import img2 from "../../assets/Images/blog3.jpg";
import img3 from "../../assets/Images/coder3.jpg";
import img4 from "../../assets/Images/blog2.jpg";

const MyApllications = () => {
  const { user } = UseAuth();
  const { id } = useParams(); 

  const applicationsPromise = useMemo(() => {
    if (id) {
     
      return fetchJobSpecificApplications(id);
    }
    if (user?.email) {
     
      return fetchMyApplications(user.email);
    }
    return null;
  }, [user?.email, id]);

  const simpleFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen bg-gray-50/50">
      <header className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            {id ? "Job" : "My"} <span className="text-violet-700">Applications</span> <br />
            Process Fast
          </h1>
          <div className="w-20 h-1.5 bg-violet-600 rounded-full mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-md">
            {id 
              ? "Review all candidates who applied for this specific position." 
              : "Track every step of your recruitment journey and stay updated."}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {[img1, img2, img3, img4].map((img, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={simpleFadeUp}
              className="rounded-xl overflow-hidden shadow-sm"
            >
              <img src={img} alt="visual" className="w-full h-36 md:h-44 object-cover" />
            </motion.div>
          ))}
        </div>
      </header>

      
      {!id && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ApplicationStats />
        </motion.div>
      )}

      <section className="mt-12 bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 md:p-8">
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
              {id ? "Candidates for this Job" : "Your Application History"}
            </h2>
            <div className="w-10 h-1 bg-gray-200 rounded-full mt-2"></div>
        </div>

        {applicationsPromise ? (
          <Suspense
            fallback={
              <div className="flex justify-center py-20">
                <span className="loading loading-spinner loading-lg text-violet-700"></span>
              </div>
            }
          >
            <ApplicationsList myPromise={applicationsPromise} isHRView={!!id} />
          </Suspense>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 italic">No records found.</p>
          </div>
        )}
      </section>

      <Others />
    </div>
  );
};

export default MyApllications;