import React from "react";
import {
  FaBolt,
  FaClock,
  FaMapMarkerAlt,
  FaBriefcase,
  FaTag,
  FaUser,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const HotJobsCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  const { min, max, currency } = salaryRange || {};
  const Range = "";

  const displaySalary =
    min && max && currency
      ? `${currency.toUpperCase()} ${min.toLocaleString()} - ${currency.toUpperCase()} ${max.toLocaleString()}` +
        (Range || "")
      : "Negotiable";

  const formattedDeadline = applicationDeadline
    ? new Date(applicationDeadline).toLocaleDateString("en-GB")
    : "N/A";

  const CompanyIcon = SiLinkedin;

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 p-6 md:p-8 w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          <div className="shrink-0 p-3 bg-indigo-100 text-indigo-700 rounded-lg w-12 h-12 flex items-center justify-center">
            {company_logo ? (
              <img
                src={company_logo}
                alt={`${company} logo`}
                className="w-full h-full object-contain rounded-md"
              />
            ) : (
              <CompanyIcon className="text-2xl" />
            )}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">{company}</h4>
            <p className="text-sm text-gray-500 flex items-center">
              <FaMapMarkerAlt className="w-3 h-3 mr-1" /> {location}
            </p>
          </div>
        </div>

        {status === "Hot" && (
          <div className="text-green-500">
            <FaBolt className="text-2xl" title="Hot Job" />
          </div>
        )}
      </div>

      <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-snug">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600 border-b pb-4 mb-4">
        <div className="flex items-center space-x-2">
          <FaBriefcase className="w-4 h-4 text-violet-600" />
          <span>Type : {jobType}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaClock className="w-4 h-4 text-violet-600" />

          <span>Deadline: {formattedDeadline}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaTag className="w-4 h-4 text-violet-600" />
          <span>Category : {category}**</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaUser className="w-4 h-4 text-violet-600" />
          <span>HR: {hr_name || "N/A"}</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {description ||
          "Lorem ipsum as ynt is amet, consecttueetur aipisizing elit. Recusands architecto, dolor quo repellendus paritar."}
      </p>

      <div className="mb-4 space-y-2 text-sm text-gray-600">
        <p className="flex items-center space-x-2">
          <FaCheckCircle className="w-4 h-4 text-indigo-600" />

          <span>
            Responsibilities:{" "}
            {responsibilities && Array.isArray(responsibilities)
              ? responsibilities[0]
              : "See Details"}
          </span>
        </p>
        <p className="flex items-center space-x-2">
          <FaEnvelope className="w-4 h-4 text-indigo-600" />
          <span>HR Contact: {hr_email || "N/A"}</span>
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6 border-t pt-4">
        <span className="text-sm font-semibold text-gray-700">Skills:</span>
        {Array.isArray(requirements) && requirements.length > 0 ? (
          requirements.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-gray-100 text-indigo-600 rounded-full font-medium"
            >
              {skill}
            </span>
          ))
        ) : (
          <span className="text-xs px-3 py-1 bg-gray-100 text-gray-500 rounded-full font-medium">
            No specific skills listed
          </span>
        )}
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="text-2xl font-bold text-gray-900">{displaySalary}</div>
        <button className="px-6 py-3 bg-violet-700 hover:bg-violet-800 text-white font-semibold rounded-lg shadow-md transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default HotJobsCard;
