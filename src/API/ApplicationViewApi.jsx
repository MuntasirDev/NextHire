export const fetchJobSpecificApplications = (jobId) => {
  return fetch(
    `https://next-hire-server-steel.vercel.app/applications/job/${jobId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error("Fetch error in fetchJobSpecificApplications:", err);
      throw err;
    });
};
