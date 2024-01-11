import PropTypes from "prop-types";

const Banner = ({ bgImage, title, description }) => {
  return (
    <section
      className="p-28 pt-52 mb-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="px-40 py-32 text-center text-white font-cinzel"
        style={{ backgroundColor: `rgba(21, 21, 21, 0.60)` }}
      >
        <h2 className="font-bold text-[88px] uppercase">{title}</h2>
        <p className="leading-7 text-2xl uppercase font-semibold">
          {description}
        </p>
      </div>
    </section>
  );
};

Banner.propTypes = {
  bgImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Banner;
