import { useEffect, useState } from "react";
import { axiosFood } from "./useAxiosFood";

const useFood = (category = "") => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axiosFood(`/food?category=${category}`).then((res) => setFoods(res.data));
  }, [category]);

  return { foods };
};

export default useFood;
