import React, { use } from "react";
import HotJobsCard from "../Shared Components/HotJobsCard";

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            <span className="text-violet-700">Hot Jobs</span> for You
          </h2>
          <p className="text-gray-600 text-lg">
            Opportunities are waiting. Discover the latest roles that match your
            profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <HotJobsCard key={job._id} job={job} />
          ))}
        </div>

        {jobs.length > 6 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
              View All Jobs ({jobs.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotJobs;
