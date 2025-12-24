import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaBriefcase,
  FaBuilding,
  FaUserCheck,
  FaRegSmile,
} from "react-icons/fa";

import HeroImage from "../../assets/Images/Office1.jpg";

const SearchJobs = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const statItem = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const StatsBox = ({ number, title, icon: Icon, delay }) => (
    <motion.div variants={statItem} className="text-center p-4">
      <div className="flex justify-center mb-3">
        <Icon className="text-4xl text-violet-600 mb-2" />
      </div>
      <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-none">
        {number}
      </h3>
      <p className="text-sm md:text-base text-gray-500 mt-1 font-semibold">
        {title}
      </p>
    </motion.div>
  );

  return (
    <div className="bg-white pt-12 pb-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Millions Of Jobs.
              <br />
              Find The One That's{" "}
              <span className="text-violet-600">Right For You</span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 max-w-lg">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide. The right job is out there.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-300 transition duration-300"
              >
                <FaSearch className="mr-3" /> Search Jobs
              </motion.button>

              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-violet-600 hover:text-violet-700 transition duration-300 border border-violet-100 hover:border-violet-200"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="bg-violet-50 rounded-2xl p-6 shadow-2xl relative">
              <img
                src={HeroImage} 
                alt="Diverse team celebrating success"
                className="w-full h-auto object-cover rounded-xl shadow-xl"
              />

              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 bg-white p-6 rounded-xl shadow-2xl border-t-4 border-violet-500 max-w-50"
              >
                <div className="text-center">
                  <span className="text-3xl">👍</span>
                  <p className="text-sm font-semibold text-gray-800 mt-2">
                    Start your dream career with us!
                  </p>
                  <button className="mt-3 text-xs text-white bg-violet-500 rounded-lg px-3 py-1 hover:bg-violet-600">
                    Get Started
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={statsVariants}
          className="mt-20 pt-12 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <StatsBox number="25 K+" title="Completed Cases" icon={FaBriefcase} />
          <StatsBox number="17 +" title="Our Office" icon={FaBuilding} />
          <StatsBox number="86 +" title="Skilled People" icon={FaUserCheck} />
          <StatsBox number="28 +" title="Happy Clients" icon={FaRegSmile} />
        </motion.div>
      </div>
    </div>
  );
};

export default SearchJobs;
