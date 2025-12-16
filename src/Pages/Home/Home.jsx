import React, { Suspense } from 'react';
import Banner from './Banner';
import SearchCategory from './SearchCategory';
import BrowuseCategoryHome from './BrowuseCategoryHome';
import HiringRouts from './HiringRouts';
import HotJobs from './HotJobs';
import SearchJobs from './SearchJobs';
import Others from './Others';

const Home = () => {
    const jobsPromise = fetch('http://localhost:3000/Jobs').then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <SearchCategory></SearchCategory>
            <BrowuseCategoryHome></BrowuseCategoryHome>
            <HiringRouts></HiringRouts>
            <Suspense fallback={<div>Loading Hot Jobs...</div>}>
                <HotJobs jobsPromise={jobsPromise}></HotJobs>
            </Suspense>

            <SearchJobs></SearchJobs>
            <Others></Others>


        </div>
    );
};

export default Home;