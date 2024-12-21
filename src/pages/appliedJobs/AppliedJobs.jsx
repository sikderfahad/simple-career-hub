import SaveJobCard from "../../components/saveJobCard/SaveJobCard";
import { getFromLS } from "../../hooks/localStorage";
import { useAllJobs } from "../../hooks/useAllJobs";

const AppliedJobs = () => {
  const saveJobs = getFromLS();
  const { jobs } = useAllJobs();
  const appliedJobsFilter =
    jobs && jobs.filter((job) => saveJobs.includes(job?.id));
  return (
    <div className="grid grid-cols-1 gap-10">
      {appliedJobsFilter.map((job) => (
        <SaveJobCard key={job?.id} job={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;
