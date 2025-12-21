import React, { use } from "react";
import { Link } from "react-router-dom"; // react-router না, react-router-dom ব্যবহার করুন

const JobList = ({ jobsCreatedBypromise }) => {
  const jobs = use(jobsCreatedBypromise);

  return (
    <div className="overflow-x-auto w-full bg-white rounded-xl shadow-md p-6">
      <h2 className="text-3xl font-bold text-violet-800 mb-6">
        Jobs Created By You: {jobs?.length || 0}
      </h2>

      <table className="table w-full">
        <thead>
          <tr className="bg-violet-100 text-violet-700">
            <th>No.</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Type</th>
            <th>Deadline</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs && jobs.length > 0 ? (
            jobs.map((job, index) => (
              <tr key={job._id} className="hover:bg-base-200 transition-colors">
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={job.company_logo} alt="Company Logo" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.jobTitle || job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>{job.company}</td>
                <td>
                  <span className="badge badge-ghost badge-sm">{job.jobType}</span>
                </td>
                <td>{job.deadline || job.applicationDeadline}</td>
                {/* এখানে ডাইনামিক কাউন্ট বসানো হয়েছে */}
                <td>
                  <span className="badge badge-primary font-bold">
                    {job.applicationCount || 0}
                  </span>
                </td>
                <td>
                  <Link
                    to={`/applications/${job._id}`}
                    className="btn btn-violet btn-xs text-white bg-violet-600 hover:bg-violet-700 border-none"
                  >
                    View Applications
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-10 text-gray-500 italic">
                No job posted yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;