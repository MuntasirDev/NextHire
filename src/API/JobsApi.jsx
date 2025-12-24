export const jobsCreatedBypromise = async (email) => {
    try {
        const res = await fetch(`http://localhost:3000/Jobs?email=${email}`, {
            method: 'GET',
           
            credentials: 'include' 
        });
        
        if (!res.ok) {
            
            throw new Error(`Server responded with status: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
};