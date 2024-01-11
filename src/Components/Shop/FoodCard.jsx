import PropTypes from "prop-types";
import Button from "../../utils/Button";

const FoodCard = ({ food }) => {
  const { _id, name, image, price, recipe } = food;
  const handleAddToCart = () => {
    console.log(_id, "Clicked");
  };
  return (
    <div className="card bg-[#F3F3F3] shadow-xl rounded-none">
      <figure>
        <img className="w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-center items-center justify-start">
        <h2 className="card-title font-cinzel font-bold">{name}</h2>
        <p>{recipe}</p>
        <span className="text-4xl font-medium mt-2 mb-6">${price}</span>
        <div className="card-actions justify-center">
          <Button handleBtnClick={handleAddToCart} type="gold">
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object,
};

export default FoodCard;
