import { useState } from "react";
import useFood from "../../hooks/useFood";
import FoodCard from "./FoodCard";
import Loader from "../../utils/Loader";
import PropTypes from "prop-types";
import capitalizeFirstLetter from "../../lib/capitalizeFirstLetter";

const ShopItems = ({ category }) => {
  const [selectedItem, setSelectedItem] = useState(
    category === "offered" || category === "popular" || category === null
      ? "Salad"
      : capitalizeFirstLetter(category)
  );
  const { foods, foodLoading, setFoodLoading } = useFood(
    selectedItem.toLowerCase()
  );

  const handleItemClick = (e) => {
    if (e.target.type === "button") {
      setFoodLoading(true);
      setSelectedItem(e.target.textContent);
    }
  };

  const getBtnStyle = (itemName) => {
    return selectedItem === itemName
      ? "text-yellow-500 underline underline-offset-2"
      : "";
  };

  return (
    <section className="mb-20 section">
      <div
        className="uppercase flex gap-7 justify-center mb-10"
        onClick={handleItemClick}
      >
        {["Salad", "Pizza", "Soup", "Dessert", "Drinks"].map((item) => (
          <button key={item} type="button" className={getBtnStyle(item)}>
            {item}
          </button>
        ))}
      </div>
      {foodLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      )}
    </section>
  );
};

ShopItems.propTypes = {
  category: PropTypes.string,
};

export default ShopItems;
