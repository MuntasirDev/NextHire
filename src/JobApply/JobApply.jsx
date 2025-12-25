import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import UseAuth from "../Hooks/UseAuth";
import { FaRegLightbulb } from "react-icons/fa";
import Engineer1 from "../assets/Images/developer.jpg";
import Engineer2 from "../assets/Images/developer2.jpg";
import Engineer3 from "../assets/Images/coder3.jpg";
import Swal from "sweetalert2";
import axios from "axios";

const JobApply = () => {
  const { id } = useParams();
  const { user } = UseAuth();
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("Loading...");

  useEffect(() => {
    
    fetch(`https://next-hire-server-steel.vercel.app/jobs/${id}`, {
      credentials: "include"
    })
      .then((res) => {
        if (!res.ok) throw new Error("Job details not found");
        return res.json();
      })
      .then((data) => {
        setJobTitle(data.title || data.jobTitle || "Unknown Job");
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setJobTitle("Error loading job info");
      });
  }, [id]);

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

    const application = {
      jobId: id,
      applicant: user.email,
      linkedIn: form.linkedIn_url.value,
      github: form.github_url.value,
      resume: form.resume_link.value,
      currentLocation: form.current_location.value,
      phoneNumber: form.phone_number.value,
      coverLetter: form.cover_letter.value,
      appliedDate: new Date().toISOString(),
    };

    try {
      const res = await axios.post(
        "https://next-hire-server-steel.vercel.app/applications",
        application,
        { withCredentials: true } 
      );

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Successfully Applied!",
          text: `You have successfully applied for ${jobTitle}`,
          confirmButtonColor: "#6D28D9",
        }).then(() => {
          navigate("/dashboard"); // রাউট চেক করে নিস
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.response?.data?.message || "Could not submit application. Try again.",
      });
    }
  };

  const isSubmittingEnabled = !!user;

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h5 className="text-sm font-semibold text-violet-600 uppercase tracking-widest">
            Job Application
          </h5>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
            Apply For: <span className="text-violet-700">{jobTitle}</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">Ref ID: {id}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              <img src={Engineer1} className="w-full h-32 object-cover rounded-xl border-2 border-violet-200" alt="img" />
              <img src={Engineer2} className="w-full h-32 object-cover rounded-xl border-2 border-violet-200" alt="img" />
              <img src={Engineer3} className="w-full h-32 object-cover rounded-xl border-2 border-violet-200" alt="img" />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-violet-500">
              <h3 className="font-bold text-gray-800 flex items-center mb-3">
                <FaRegLightbulb className="mr-2 text-violet-600" /> Tips
              </h3>
              <ul className="text-xs text-gray-600 space-y-3">
                <li>1. Make sure your drive link is public.</li>
                <li>2. Double check your phone number.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-violet-600 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" defaultValue={user?.displayName} className="w-full p-3 bg-gray-50 border rounded-lg outline-none" readOnly />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input type="email" defaultValue={user?.email} className="w-full p-3 bg-gray-50 border rounded-lg outline-none" readOnly />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2">LinkedIn URL</label>
                  <input type="url" name="linkedIn_url" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">GitHub URL</label>
                  <input type="url" name="github_url" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Resume Drive Link</label>
                <input type="url" name="resume_link" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" name="phone_number" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-violet-500" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Current Location</label>
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
                className={`w-full py-4 font-bold rounded-lg transition-all shadow-md ${
                  isSubmittingEnabled ? "bg-violet-700 hover:bg-violet-800 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {isSubmittingEnabled ? "Submit Application" : "Login to Apply"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;