import { useNavigate, useParams } from "react-router-dom";
import { useAllJobs } from "../../hooks/useAllJobs";
import { saveToLS } from "../../hooks/localStorage";

const JobDetails = () => {
  const { jobId } = useParams();
  const { jobs } = useAllJobs();
  const navigate = useNavigate();

  const findJob = jobs.find((job) => job?.id === parseInt(jobId));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
      <div className="md:col-span-2 shadow p-3">
        <h1 className="text-gray-500 mb-4">
          <span className="text-black font-semibold">Job Description: </span>{" "}
          {findJob?.job_description}
        </h1>
        <h1 className="text-gray-500 mb-4">
          <span className="text-black font-semibold">Job Responsibility: </span>{" "}
          {findJob?.job_responsibility}
        </h1>
        <h1 className="text-gray-500 mb-4">
          <span className="text-black font-semibold block">
            Educational Requirements:{" "}
          </span>{" "}
          {findJob?.educational_requirements}
        </h1>
        <h1 className="text-gray-500 mb-4">
          <span className="text-black font-semibold block">Experiences: </span>{" "}
          {findJob?.experiences}
        </h1>
      </div>

      <div className=" shadow p-3 flex flex-col flex-grow">
        <div className="">
          <h1 className="text-lg font-semibold">Job Details</h1>
          <hr className="my-5" />

          <div className="flex flex-col gap-3">
            <p className="">
              <span className="font-semibold">Salary: </span>
              {findJob?.salary}
            </p>
            <p>
              <span>Salary: </span>
              {findJob?.job_title}
            </p>
          </div>

          <h1 className="text-lg font-semibold">Contact Information</h1>

          <hr className="my-5" />
          <div className="flex flex-col gap-3 mb-4">
            <p className="">
              <span className="font-semibold">Phone: </span>
              {findJob?.contact_information.phone}
            </p>
            <p>
              <span className="font-semibold">Email: </span>
              {findJob?.contact_information.email}
            </p>
            <p>
              <span className="font-semibold">Address: </span>
              {findJob?.contact_information.address}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            saveToLS(findJob?.id);
            navigate(`/applied-jobs`);
          }}
          className="mt-auto py-3 rounded-lg text-white bg-primary"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
