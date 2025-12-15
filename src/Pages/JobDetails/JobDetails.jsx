import React from 'react';
import { useLoaderData } from 'react-router-dom'; 
import { 
    FaMapMarkerAlt, FaBriefcase, FaTag, 
    FaClock, FaDollarSign, FaUser, 
    FaEnvelope, FaTasks, FaClipboardList, FaArrowRight 
} from 'react-icons/fa';

const JobDetails = () => {
    
    const job = useLoaderData(); 
    
    
    const { 
        title, location, jobType, category, applicationDeadline, 
        salaryRange, description, company, requirements, 
        responsibilities, status, hr_email, hr_name, company_logo 
    } = job || {}; 
    const { min, max, currency } = salaryRange || {}; 
    const displaySalary = min && max && currency 
        ? `${currency.toUpperCase()} ${min.toLocaleString()} - ${currency.toUpperCase()} ${max.toLocaleString()}`
        : 'Negotiable'; 

    const formattedDeadline = applicationDeadline ? new Date(applicationDeadline).toLocaleDateString('en-GB') : 'N/A';


    if (!job) {
        return (
            <div className="text-center py-20 text-xl text-red-600">
                <p>Sorry, job details could not be loaded.</p>
                <p className="text-gray-500 text-base mt-2">Please check the job ID and API endpoint.</p>
            </div>
        );
    }


    return (
        <div className="bg-gray-50 py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-8 border-t-4 border-violet-600">
                    <div className="flex items-center space-x-4 mb-4">
                        {company_logo && (
                            <img 
                                src={company_logo} 
                                alt={`${company} logo`} 
                                className="w-16 h-16 object-contain rounded-lg border p-1"
                            />
                        )}
                        <div>
                            <p className="text-lg text-gray-500">{company}</p>
                            <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>
                        </div>
                    </div>
                    
                    
                    <div className="flex flex-wrap gap-3 mt-4 text-sm font-medium">
                        <span className="flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                            <FaBriefcase className="mr-2" /> {jobType}
                        </span>
                        <span className="flex items-center px-3 py-1 bg-violet-100 text-violet-700 rounded-full">
                            <FaTag className="mr-2" /> {category}
                        </span>
                        <span className="flex items-center px-3 py-1 bg-gray-200 text-gray-700 rounded-full">
                            <FaMapMarkerAlt className="mr-2" /> {location}
                        </span>
                        <span className="flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full">
                            Status: {status}
                        </span>
                    </div>
                </div>

             
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                   
                    <div className="lg:col-span-2 space-y-8">
                        
                       
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-400">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                <FaClipboardList className="mr-3 text-indigo-600" /> Job Description
                            </h2>
                            <p className="text-gray-700 leading-relaxed">{description}</p>
                        </div>

                        
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-400">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                <FaTasks className="mr-3 text-indigo-600" /> Key Responsibilities
                            </h2>
                            <ul className="list-none space-y-3 text-gray-700">
                                {responsibilities && responsibilities.map((task, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaArrowRight className="w-3 h-3 mt-1 mr-3 text-violet-600 shrink-0" />
                                        {task}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                       
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-indigo-400">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                <FaClipboardList className="mr-3 text-indigo-600" /> Required Skills & Qualifications
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {requirements && requirements.map((req, index) => (
                                    <span key={index} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold text-sm shadow-sm">
                                        {req}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                    
                    <div className="lg:col-span-1 space-y-6">

                        
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Job Summary</h3>
                            <div className="space-y-4">
                                <DetailItem icon={FaDollarSign} label="Salary Range" value={displaySalary} color="text-violet-600" />
                                <DetailItem icon={FaClock} label="Application Deadline" value={formattedDeadline} color="text-red-500" />
                            </div>
                        </div>

                       
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">HR Contact</h3>
                            <div className="space-y-4">
                                <DetailItem icon={FaUser} label="HR Name" value={hr_name} color="text-indigo-600" />
                                <DetailItem icon={FaEnvelope} label="Email" value={hr_email} color="text-indigo-600" />
                            </div>
                        </div>
                        
                        
                        <div className="sticky top-20">
                            <button className="w-full py-4 bg-violet-700 hover:bg-violet-800 text-white font-extrabold text-lg rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.02]">
                                Apply for this Position
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


const DetailItem = ({ icon: Icon, label, value, color }) => (
    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50">
        <div className="flex items-center space-x-3">
            <Icon className={`w-5 h-5 ${color}`} />
            <span className="text-gray-600 font-medium">{label}</span>
        </div>
        <span className="font-semibold text-gray-800">{value}</span>
    </div>
);


export default JobDetails;