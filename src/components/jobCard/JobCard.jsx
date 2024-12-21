import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="shadow rounded p-5">
      <img className="h-[50px] w-[100px]" src={logo} alt="" />
      <div className="mt-5">
        <h1>{job_title}</h1>
        <h3>{company_name}</h3>
        <div className="">
          <button>{remote_or_onsite}</button>
          <button>{job_type}</button>
          <div className="">
            <p>
              <span></span> {location}
            </p>
            <p>
              <span></span> {salary}
            </p>
          </div>
        </div>
        <Link to={`/job-details/${job?.id}`}>
          <button className="px-4 py-2 border rounded font-medium mt-3">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
    job_title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    remote_or_onsite: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    job_type: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
  }),
};

export default JobCard;
