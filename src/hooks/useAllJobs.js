import { useEffect, useState } from "react";

export const useAllJobs = () => {
  const [jobs, setJobs] = useState([]); // Store fetched jobs
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/jobs.json"); // Corrected path
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data); // Set jobs on success
      } catch (err) {
        setError(err.message); // Capture any errors
      } finally {
        setLoading(false); // Loading complete
      }
    };

    fetchJobs();
  }, []);

  return { jobs, loading, error };
};
