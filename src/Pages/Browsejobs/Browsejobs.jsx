import React, { useState, useEffect } from 'react';
import HotJobsCard from '../Shared Components/HotJobsCard'; 

const Browsejobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    
    const API_URL = "http://localhost:3000/Jobs"; 

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const response = await fetch(API_URL);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setJobs(data);
                
            } catch (err) {
                setError(err.message || "Failed to fetch jobs.");
            } finally {
                setLoading(false);
            }
        };

        fetchAllJobs();
    }, []); 
    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-white">
                <span className="text-xl text-violet-700">Loading all job listings...</span>
               
            </div>
        );
    }

 
    if (error) {
        return (
            <div className="min-h-screen py-20 text-center bg-red-50">
                <h1 className="text-4xl font-extrabold text-red-700 mb-4">Error Loading Jobs</h1>
                <p className="text-lg text-red-600">
                    Could not load job data. Please check the server connection.
                </p>
                <p className="text-sm text-red-500 mt-2">Details: {error}</p>
            </div>
        );
    }
    
   
    return (
        <div className="min-h-screen py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
                        Browse <span className="text-violet-700">All Jobs</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        Total {jobs.length} open positions available. Find your next career move!
                    </p>
                </div>
                
                {jobs.length === 0 ? (
                    <div className="text-center p-10 bg-white rounded-xl shadow-lg">
                        <p className="text-2xl text-gray-700">Sorry, no job listings found.</p>
                    </div>
                ) : (
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobs.map((job) => (
                           
                            <HotJobsCard key={job._id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Browsejobs;