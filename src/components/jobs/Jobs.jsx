import { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import JobCard from "../jobCard/JobCard";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("/jobs.json");
      const data = await res.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <SectionTitle
        title="Featured Jobs"
        desc="Explore thousands of job opportunities with all the information you need. Its your future"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {jobs.map((job) => (
          <JobCard key={job?.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
