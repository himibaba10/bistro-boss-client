import useFood from "../../hooks/useFood";
import FoodCard from "../Shared/FoodCard";
import Heading from "../Shared/Heading";

const ChefRecommmend = () => {
  const { foods } = useFood("offered");
  return (
    <div className="my-20">
      <Heading title="CHEF RECOMMENDS" subTitle="Should Try" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foods?.slice(0, 3)?.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecommmend;
