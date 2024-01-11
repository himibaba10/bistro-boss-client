import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useFood = (category = "") => {
  const [foods, setFoods] = useState([]);
  const [foodLoading, setFoodLoading] = useState(true);

  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic(`/food?category=${category}`).then((res) => {
      setFoods(res.data);
      setFoodLoading(false);
    });
  }, [category, axiosPublic]);

  return { foods, foodLoading, setFoodLoading };
};

export default useFood;
