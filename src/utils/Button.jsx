import PropTypes from "prop-types";

const Button = ({ type, children = "View Full Menu", handleBtnClick }) => {
  return (
    <button
      onClick={handleBtnClick}
      className={`uppercase text-xl font-medium ${
        type === "gold" ? "text-yellow-600 bg-[#E8E8E8]" : "text-[#1F2937]"
      } rounded-lg border-b-4 ${
        type === "gold" ? "border-b-yellow-600" : "border-b-[#1F2937]"
      } px-7 py-5 hover:text-white hover:bg-[#1F2937] hover:border-b-[#1F2937] transition duration-300`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  handleBtnClick: PropTypes.func,
};

export default Button;
