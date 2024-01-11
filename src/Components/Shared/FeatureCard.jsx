import PropTypes from "prop-types";
// import { useEffect, useRef } from "react";
import Heading from "./Heading";
import Foods from "./Foods";
import useParallax from "../../hooks/useParallax";

const FeatureCard = ({
  bgImage,
  title,
  description,
  headingTitle,
  subheadingTitle,
  bgColor = "rgba(21, 21, 21, 0.60)",
  category = "",
}) => {
  const [parallaxRef] = useParallax(0.2);
  return (
    <section className="my-20">
      <div
        ref={parallaxRef}
        className="p-28 mb-24"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="px-40 py-24 text-center"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <h2 className="font-cinzel text-5xl mb-3 uppercase">{title}</h2>
          <p className="leading-7">{description}</p>
        </div>
      </div>
      <Heading title={headingTitle} subTitle={subheadingTitle} />
      <Foods category={category} />
    </section>
  );
};

FeatureCard.propTypes = {
  bgImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string,
  category: PropTypes.string,
  headingTitle: PropTypes.string,
  subheadingTitle: PropTypes.string,
};

export default FeatureCard;
