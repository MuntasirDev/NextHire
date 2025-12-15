import React from "react";
import { useParams } from "react-router";
// Framer Motion Import
import { motion } from "framer-motion";
import UseAuth from "../Hooks/UseAuth";
import {
  FaUser,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaRegLightbulb,
  FaRocket,
  FaClock,
} from "react-icons/fa";
// 🛑 Imported Images
import Engineer1 from "../assets/Images/developer.jpg";
import Engineer2 from "../assets/Images/developer2.jpg";
import Engineer3 from "../assets/Images/coder3.jpg";

const JobApply = () => {
  const params = useParams();
  const { user } = UseAuth();

  const jobId = params.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const phoneNumber = form.phone_number.value;
    const currentLocation = form.current_location.value;
    const coverLetter = form.cover_letter.value;

    console.log(linkedIn,github,resume,phoneNumber,currentLocation,coverLetter);
  
   const application = {
    jobId,
    applicant: user.email,
    linkedIn,
    github,
    resume,
    currentLocation,
    phoneNumber,
    coverLetter
   }


};

  const AnimatedImage = ({ src, alt, delay = 0 }) => (
    <motion.img
      src={src}
      alt={alt}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0 20px 25px -5px rgba(124, 58, 237, 0.3), 0 10px 10px -5px rgba(124, 58, 237, 0.15)",
      }}
      className="w-full h-40 object-cover rounded-xl border-4 border-violet-600 shadow-xl cursor-pointer"
    />
  );

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h5 className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
            Job Application
          </h5>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            Apply For Desired Job!
          </h2>
          <p className="text-gray-500 mt-2">Job ID: **{jobId}**</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="grid  grid-cols-3 lg:grid-cols-1 gap-4">
              <AnimatedImage
                src={Engineer1}
                alt="Software Engineer at work 1"
                delay={0.4}
              />
              <AnimatedImage
                src={Engineer2}
                alt="Software Engineer at work 2"
                delay={0.5}
              />
              <AnimatedImage
                src={Engineer3}
                alt="Software Engineer at work 3"
                delay={0.6}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-violet-500 space-y-4"
            >
              <h3 className="text-lg font-bold text-gray-800 flex items-center">
                <FaRegLightbulb className="mr-3 text-violet-600" /> Quick
                Application Tips
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <FaRocket className="mt-1 mr-2 text-indigo-500 shrink-0" />{" "}
                  Ensure your Resume link is publicly accessible (View-only).
                </li>
                <li className="flex items-start">
                  <FaClock className="mt-1 mr-2 text-indigo-500 shrink-0" />{" "}
                  Double check the deadline before submitting.
                </li>
                <li className="flex items-start">
                  <FaUser className="mt-1 mr-2 text-indigo-500 shrink-0" />{" "}
                  Mention specific skills relevant to the job in your Cover
                  Letter.
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-2"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 md:p-10 rounded-xl shadow-2xl border-t-4 border-indigo-500"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">
                1. Basic Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1  items-center">
                    <FaUser className="mr-2 text-violet-600" /> Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.displayName || ""}
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500 transition duration-150"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1  items-center">
                    <FaEnvelope className="mr-2 text-violet-600" /> Email
                    Address
                  </label>
                  <input
                    type="email"
                    defaultValue={user?.email || ""}
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-violet-500 focus:border-violet-500 transition duration-150"
                    required
                    readOnly
                  />
                </div>
              </div>

              {/* 2. Professional Links & Resume Section */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">
                2. Professional Links & Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* LinkedIn URL */}
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1  items-center">
                    <FaLinkedin className="mr-2 text-indigo-600" /> LinkedIn
                    Profile URL
                  </label>
                  <input
                    type="url"
                    name="linkedin_url"
                    placeholder="e.g., https://linkedin.com/in/yourprofile"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 transition duration-150"
                    required
                  />
                </div>

                {/* GitHub URL */}
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
                    <FaGithub className="mr-2 text-gray-800" /> GitHub Profile
                    URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="github_url"
                    placeholder="e.g., https://github.com/yourusername"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 transition duration-150"
                  />
                </div>

                {/* Resume/CV Drive Link */}
                <div className="form-group md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700  items-center">
                    <FaFileAlt className="mr-2 text-violet-600" /> Resume/CV
                    Drive Link (Google Drive, Dropbox etc.)
                  </label>
                  <input
                    type="url"
                    name="resume_link"
                    placeholder="Provide a public link to your updated Resume/CV"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 transition duration-150"
                    required
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">
                3. Additional Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
                    <FaPhone className="mr-2 text-violet-600" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="+8801XXXXXXXXX"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 transition duration-150"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
                    <FaMapMarkerAlt className="mr-2 text-violet-600" /> Current
                    City/Location
                  </label>
                  <input
                    type="text"
                    name="current_location"
                    placeholder="e.g., Chattogram, Dhaka"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 transition duration-150"
                    required
                  />
                </div>

                <div className="form-group md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter / Why are you a good fit for this role?
                  </label>
                  <textarea
                    name="cover_letter"
                    rows="4"
                    placeholder="Briefly explain your relevant experience and motivation (Max 250 words)"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500 transition duration-150"
                    required
                  ></textarea>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full py-3 bg-violet-700 hover:bg-violet-800 text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-violet-300"
              >
                Submit Application
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
