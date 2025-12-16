import React, { use } from "react";
// 💡 useNavigate যোগ করা হলো
import { useNavigate } from "react-router-dom"; 
import HotJobsCard from "../Shared Components/HotJobsCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);
  // 💡 useNavigate ইনিশিয়ালাইজ করা হলো
  const navigate = useNavigate(); 
  
  // প্রথম ৯টি কার্ড
  const trendingJobs = jobs.slice(0, 9);

  // View All বাটনের ক্লিক হ্যান্ডলার
  const handleViewAll = () => {
    // 💡 /browsejobs রুটে নেভিগেট করা হবে
    navigate('/browsejobs');
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            <span className="text-violet-700">Trending Jobs</span> for You {/* Hot Jobs কে Trending Jobs এ পরিবর্তন করা হলো */}
          </h2>
          <p className="text-gray-600 text-lg">
            Opportunities are waiting. Discover the latest roles that match your
            profile.
          </p>
        </div>

        {/* 💡 শুধুমাত্র trendingJobs (প্রথম 9টি) দেখানো হচ্ছে */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trendingJobs.map((job) => (
            <HotJobsCard key={job._id} job={job} />
          ))}
        </div>

        {/* 💡 যদি 9টির বেশি জব থাকে, তবেই বাটনটি দেখানো হবে */}
        {jobs.length > 9 && (
          <div className="text-center mt-12">
            <button 
              onClick={handleViewAll} 
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              View All Jobs ({jobs.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotJobs;