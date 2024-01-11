import PropTypes from "prop-types";

const Heading = ({ title, subTitle, borderColor = "#E8E8E8" }) => {
  return (
    <div className="max-w-md mx-auto text-center mb-12">
      <span className="italic text-yellow-600 text-xl">---{subTitle}---</span>
      <h2
        className={`border-y-4 text-[${borderColor}] border-[${borderColor}] py-5 mt-4 uppercase text-4xl`}
      >
        {title}
      </h2>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  borderColor: PropTypes.string,
};

export default Heading;
