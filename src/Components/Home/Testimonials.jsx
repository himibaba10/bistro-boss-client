import Heading from "../Shared/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useTestimonials from "../../hooks/useTestimonials";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonials = useTestimonials();
  return (
    <div className="section py-32">
      <Heading title="Testimonials" subTitle="What Our Clients Say" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <Testimonial testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
