import React from "react";
import { useParams, useNavigate } from "react-router"; // useNavigate যোগ করা হয়েছে
import { motion } from "framer-motion";
import UseAuth from "../Hooks/UseAuth";
import {
  FaUser, FaEnvelope, FaLinkedin, FaGithub, FaFileAlt,
  FaMapMarkerAlt, FaPhone, FaRegLightbulb, FaRocket, FaClock,
} from "react-icons/fa";
import Engineer1 from "../assets/Images/developer.jpg";
import Engineer2 from "../assets/Images/developer2.jpg";
import Engineer3 from "../assets/Images/coder3.jpg";
import Swal from "sweetalert2";
import axios from "axios";

const JobApply = () => {
  const { id } = useParams(); // params.id এর পরিবর্তে সরাসরি Destructure
  const { user } = UseAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!user || !user.email) {
      Swal.fire({
        icon: "error",
        title: "Authentication Required",
        text: "Please log in to submit your application.",
      });
      return;
    }

    // ফর্ম থেকে ডেটা নেওয়া
    const linkedIn = form.linkedIn_url.value;
    const github = form.github_url.value;
    const resume = form.resume_link.value;
    const phoneNumber = form.phone_number.value;
    const currentLocation = form.current_location.value;
    const coverLetter = form.cover_letter.value;

    const application = {
      jobId: id, // useParams থেকে পাওয়া ID
      applicant: user.email,
      linkedIn,
      github,
      resume,
      currentLocation,
      phoneNumber,
      coverLetter,
      appliedDate: new Date().toISOString() // তারিখ যোগ করা ভালো প্র্যাকটিস
    };

    try {
      // Axios Call
      const res = await axios.post('http://localhost:3000/applications', application);
      
      console.log("Server Response:", res.data);

      // আপনার ব্যাকএন্ড যদি সরাসরি insertedId পাঠায় (যেমন MongoDB)
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Successfully Applied!",
          text: "Your application has been submitted to the HR team.",
          confirmButtonColor: "#6D28D9", // Violet color
        }).then(() => {
          navigate('/my-applications'); // সফল হলে অন্য পেজে পাঠিয়ে দেওয়া
        });
        form.reset(); // ফর্ম ক্লিয়ার করা
      } else {
        // যদি অন্য কোনো রেসপন্স আসে
        throw new Error("Application failed to save.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.response?.data?.message || "Something went wrong! Please try again.",
      });
    }
  };

  // ... (AnimatedImage এবং variants আগের মতোই থাকবে)
  const AnimatedImage = ({ src, alt, delay = 0 }) => (
    <motion.img
      src={src} alt={alt}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.3)" }}
      className="w-full h-40 object-cover rounded-xl border-4 border-violet-600 shadow-xl cursor-pointer"
    />
  );

  const isSubmittingEnabled = !!user;

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h5 className="text-sm font-semibold text-violet-600 uppercase">Job Application</h5>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Apply For Your Dream Job</h2>
          <p className="text-gray-500 mt-2">Applying for Job ID: <span className="text-violet-700 font-mono">{id}</span></p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side: Images & Tips */}
          <div className="lg:col-span-1 space-y-8">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              <AnimatedImage src={Engineer1} alt="Dev 1" delay={0.1} />
              <AnimatedImage src={Engineer2} alt="Dev 2" delay={0.2} />
              <AnimatedImage src={Engineer3} alt="Dev 3" delay={0.3} />
            </div>
            {/* Tips Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-violet-500">
              <h3 className="font-bold text-gray-800 flex items-center mb-3"><FaRegLightbulb className="mr-2 text-violet-600" /> Tips</h3>
              <ul className="text-xs text-gray-600 space-y-3">
                <li className="flex gap-2"><FaRocket className="text-violet-500 shrink-0"/> Public Resume link is must.</li>
                <li className="flex gap-2"><FaClock className="text-violet-500 shrink-0"/> Check deadline before submit.</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-violet-600 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                  <input type="text" defaultValue={user?.displayName} className="w-full p-3 bg-gray-50 border rounded-lg" readOnly />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" defaultValue={user?.email} className="w-full p-3 bg-gray-50 border rounded-lg" readOnly />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><FaLinkedin className="text-blue-600"/> LinkedIn</label>
                  <input type="url" name="linkedIn_url" placeholder="https://linkedin.com/..." className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><FaGithub/> GitHub</label>
                  <input type="url" name="github_url" placeholder="https://github.com/..." className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><FaFileAlt className="text-violet-600"/> Resume Link</label>
                <input type="url" name="resume_link" placeholder="Drive or Dropbox Link" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><FaPhone className="text-green-600"/> Phone</label>
                  <input type="tel" name="phone_number" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><FaMapMarkerAlt className="text-red-500"/> Location</label>
                  <input type="text" name="current_location" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Cover Letter</label>
                <textarea name="cover_letter" rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500" required></textarea>
              </div>

              <button
                type="submit"
                disabled={!isSubmittingEnabled}
                className={`w-full py-4 font-bold rounded-lg transition-all ${
                  isSubmittingEnabled ? "bg-violet-700 hover:bg-violet-800 text-white shadow-lg" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {isSubmittingEnabled ? 'Submit Application' : 'Login to Apply'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;