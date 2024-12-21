import PropTypes from "prop-types";
import MainBtn from "../mainBtn/MainBtn";
import { Link } from "react-router-dom";

const SaveJobCard = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="flex items-center gap-3 shadow rounded-xl p-5">
      <div className="w-[130px] flex items-center justify-center mx-auto text-center h-full rounded-lg bg-gray-400">
        <img className="w-[80%] block" src={logo} alt="" />
      </div>

      <div className="flex flex-grow items-center justify-between px-3">
        <div className="">
          <h1>{job_title}</h1>
          <p>{company_name}</p>
          <div className="">
            <button>{remote_or_onsite}</button>
            <button>{job_type}</button>
          </div>
          <div className="">
            <p>{location}</p>
            <p>
              <span>Salary:</span> {salary}
            </p>
          </div>
        </div>
        <Link to={`/job-details/${id}`}>
          <MainBtn name="View Details" />
        </Link>
      </div>
    </div>
  );
};

SaveJobCard.propTypes = {
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

export default SaveJobCard;
