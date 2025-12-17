export const jobsCreatedBypromise = async (email) => {
    const res = await fetch(`http://localhost:3000/Jobs?email=${email}`);
    if (!res.ok) {
        throw new Error("Failed to fetch jobs");
    }
    return res.json();
};