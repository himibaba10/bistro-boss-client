import useFood from "../../hooks/useFood";
import Food from "./Food";
import PropTypes from "prop-types";

const Foods = ({ category = "" }) => {
  const { foods } = useFood(category);
  console.log(foods);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {foods?.map((food) => (
          <Food key={food._id} food={food} />
        ))}
      </div>
      <div className="text-center">
        <button className="uppercase text-xl font-medium text-[#1F2937] rounded-lg border-b-4 border-b-[#1F2937] px-7 py-5 hover:text-white hover:bg-[#1F2937] transition duration-300">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

Foods.propTypes = {
  category: PropTypes.string,
};

export default Foods;
