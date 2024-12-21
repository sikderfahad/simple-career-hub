import PropTypes from "prop-types";

const MainBtn = ({ name }) => {
  return (
    <>
      <button className="bg-gradient-to-r capitalize py-3 px-5 rounded-lg text-white font-medium from-[#7E90FE] to-[#9873FF]">
        {name}
      </button>
    </>
  );
};

MainBtn.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MainBtn;
