import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { motion } from 'framer-motion';

const Error = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                {/* 404 বা Error Number */}
                <h1 className="text-9xl font-black text-violet-100 relative">
                    {error?.status || "404"}
                    <span className="absolute inset-0 flex items-center justify-center text-5xl text-violet-600">
                        Oops!
                    </span>
                </h1>

                {/* Message */}
                <h2 className="mt-4 text-3xl font-bold text-gray-800">
                    {error?.status === 401 ? "Unauthorized Access" : "Job Not Found!"}
                </h2>
                
                <p className="mt-4 text-gray-500 max-w-md mx-auto text-lg">
                    {error?.statusText || error?.message || "The page you are looking for might have been removed or is temporarily unavailable."}
                </p>

                {/* Illustration/Icon Replacement */}
                <div className="py-10">
                    <div className="w-24 h-24 bg-violet-100 rounded-full mx-auto flex items-center justify-center text-violet-600 animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <Link 
                        to="/" 
                        className="px-8 py-3 bg-violet-600 text-white font-bold rounded-xl shadow-lg shadow-violet-200 hover:bg-violet-700 transition-all"
                    >
                        Back to Home
                    </Link>
                    <Link 
                        to="/browsejobs" 
                        className="px-8 py-3 bg-white text-violet-600 border-2 border-violet-600 font-bold rounded-xl hover:bg-violet-50 transition-all"
                    >
                        Browse Jobs
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Error;