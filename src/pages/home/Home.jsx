import PropTypes from "prop-types";
import Banner from "../../components/banner/Banner";
import JobCategory from "../../components/jobCategory/JobCategory";
import Jobs from "../../components/jobs/Jobs";

const Home = ({ props }) => {
  return (
    <div>
      <Banner />
      <JobCategory />
      <Jobs />
    </div>
  );
};

Home.propTypes = {};

export default Home;
