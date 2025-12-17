import React, { Suspense, useMemo } from "react"; // useMemo যোগ করা হয়েছে
import UseAuth from "../../Hooks/UseAuth";
import { jobsCreatedBypromise } from "../../API/JobsApi";
import JobList from "../../JobList/JobList";

const MyPostedJobs = () => {
  const { user } = UseAuth();

  // প্রমিজটিকে stable করা হয়েছে যাতে বারবার নতুন রিকোয়েস্ট না যায়
  const jobsPromise = useMemo(() => {
    if (user?.email) {
      return jobsCreatedBypromise(user.email);
    }
    return null;
  }, [user?.email]); // শুধু ইমেইল চেঞ্জ হলে নতুন প্রমিজ তৈরি হবে

  if (!user?.email) return <p className="p-10 text-center">Loading user info...</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-violet-700">My Posted Jobs</h2>
      
      {/* jobsPromise থাকলেই কেবল Suspense কাজ করবে */}
      {jobsPromise ? (
        <Suspense fallback={<div className="loading loading-spinner loading-lg text-violet-600"></div>}>
          <JobList jobsCreatedBypromise={jobsPromise} />
        </Suspense>
      ) : (
        <p>No email found to fetch jobs.</p>
      )}
    </div>
  );
};

export default MyPostedJobs;