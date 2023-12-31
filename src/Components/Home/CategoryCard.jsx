import PropTypes from "prop-types";

const CategoryCard = ({ image, title }) => {
  return (
    <div className="relative">
      <img className="w-full" src={image} alt={`Image of ${title}`} />
      <h3 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white font-cinzel text-3xl drop-shadow-2xl">
        {title}
      </h3>
    </div>
  );
};

CategoryCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default CategoryCard;
