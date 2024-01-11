import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic("/reviews")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.log(err));
  }, [axiosPublic]);

  return testimonials;
};

export default useTestimonials;
