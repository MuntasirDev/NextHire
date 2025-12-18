import React from "react";
import LottieWrapper from "lottie-react";
import { FaArrowUp, FaUsers, FaBriefcase, FaChartLine } from "react-icons/fa";
import statsLottie3 from "../../assets/Lotties/Working Online.json";
import statsLottie2 from "../../assets/Lotties/Company employees sharing thoughts and ideas.json";
import statsLottie from "../../assets/Lotties/sign in.json";

const Lottie = LottieWrapper.default || LottieWrapper;

const ApplicationStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-violet-600 relative group p-6">
        <div className="flex justify-between items-center relative z-10">
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Total Applications
            </p>
            <h3 className="text-4xl font-extrabold text-gray-900 mt-1">31K</h3>
            <div className="flex items-center text-green-500 text-xs mt-2 font-bold">
              <FaArrowUp className="mr-1" /> 12% Increase
            </div>
          </div>
          <div className="w-20 h-20 opacity-90 group-hover:scale-110 transition-transform duration-300">
            <Lottie
              style={{ height: 100, width: 100 }}
              animationData={statsLottie}
              loop={true}
            />
          </div>
        </div>

        <div className="absolute -bottom-2 -right-2 text-violet-100 opacity-20">
          <FaBriefcase size={80} />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-b-4 border-indigo-600 relative group p-6">
        <div className="flex justify-between items-center relative z-10">
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Active Users
            </p>
            <h3 className="text-4xl font-extrabold text-indigo-600 mt-1">
              4,200
            </h3>
            <div className="flex items-center text-indigo-400 text-xs mt-2 font-bold">
              <FaChartLine className="mr-1" /> ↗︎ 40 new today
            </div>
          </div>
          <div className="w-20 h-20 p-2 bg-indigo-50 rounded-full group-hover:rotate-12 transition-transform duration-300">
            <Lottie animationData={statsLottie2} loop={true} />
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 text-indigo-100 opacity-20">
          <FaUsers size={80} />
        </div>
      </div>

      <div className="bg-linear-to-br from-violet-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden relative group p-6">
        <div className="flex justify-between items-center relative z-10">
          <div className="text-white">
            <p className="text-sm font-semibold opacity-80 uppercase tracking-wider">
              New Registers
            </p>
            <h3 className="text-4xl font-extrabold mt-1">1,200</h3>
            <p className="text-xs mt-2 opacity-70">↘︎ 90 (This week)</p>
          </div>
          <div className="w-24 h-24 bg-white/10 rounded-xl backdrop-blur-sm">
            <Lottie animationData={statsLottie3} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStats;
