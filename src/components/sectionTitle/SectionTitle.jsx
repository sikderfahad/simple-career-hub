import PropTypes from "prop-types";

const SectionTitle = ({ title, desc }) => {
  return (
    <div className="text-center my-8 md:my-16">
      <h1 className="text-xl capitalize md:text-3xl text-black font-bold">
        {title}
      </h1>
      <p className="mt-2 md:mt-3 text-sm text-gray-500">{desc}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default SectionTitle;
