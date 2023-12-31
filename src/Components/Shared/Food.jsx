import PropTypes from "prop-types";

const Food = ({ food = {} }) => {
  const { name, recipe, price, image } = food;
  return (
    <div className="flex gap-8">
      <img
        className="w-28 h-auto object-cover rounded-full rounded-tl-none"
        src={image}
        alt={`Image of ${name}`}
      />
      <div>
        <h3 className="font-cinzel text-xl mb-2">{name} --------</h3>
        <p className="text-[#737373] leading-7">{recipe}</p>
      </div>
      <span className="text-[#BB8506]">${price}</span>
    </div>
  );
};

Food.propTypes = {
  food: PropTypes.object,
};

export default Food;
