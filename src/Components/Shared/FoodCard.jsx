import PropTypes from "prop-types";

const FoodCard = ({ food = {} }) => {
  const { name, recipe, image } = food;
  return (
    <div className="card bg-[#F3F3F3] rounded-none">
      <figure>
        <img
          className="w-full h-[300px] object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title text-[#151515] text-2xl font-semibold">
          {name}
        </h2>
        <p className="text-center leading-7 mb-3">{recipe}</p>
        <button className="uppercase text-xl font-medium text-[#BB8506] bg-[#E8E8E8] rounded-lg border-b-4 border-b-[#BB8506] px-7 py-5 hover:bg-[#1F2937] hover:border-b-[#1F2937] transition duration-300">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object,
};

export default FoodCard;
