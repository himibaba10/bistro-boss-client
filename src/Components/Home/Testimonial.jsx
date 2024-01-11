import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import { FaQuoteLeft } from "react-icons/fa6";

import "@smastrom/react-rating/style.css";

const Testimonial = ({ testimonial }) => {
  const { name, details, rating } = testimonial;
  return (
    <div className="flex flex-col items-center px-20">
      <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
      <FaQuoteLeft className="my-4" size={100} />
      <p className="text-center text-xl text-[#444] leading-relaxed">
        {details}
      </p>
      <h3 className="text-[#CD9003] text-3xl mt-2 font-medium">{name}</h3>
    </div>
  );
};

Testimonial.propTypes = {
  testimonial: PropTypes.object,
};

export default Testimonial;
