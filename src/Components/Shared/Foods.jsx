import { Link } from "react-router-dom";
import useFood from "../../hooks/useFood";
import Button from "../../utils/Button";
import Food from "./Food";
import PropTypes from "prop-types";

const Foods = ({ category = "" }) => {
  const { foods } = useFood(category);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {foods?.slice(0, 6)?.map((food) => (
          <Food key={food._id} food={food} />
        ))}
      </div>
      <div className="text-center">
        <Link to={`/shop?category=${category}`}>
          <Button type="white" />
        </Link>
      </div>
    </div>
  );
};

Foods.propTypes = {
  category: PropTypes.string,
};

export default Foods;
