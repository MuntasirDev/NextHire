// API/ApplicationViewAPI.jsx
export const fetchJobSpecificApplications = (jobId) => {
    return fetch(`http://localhost:3000/applications/job/${jobId}`,{credentials: "include"})
        .then(res => res.json());
};