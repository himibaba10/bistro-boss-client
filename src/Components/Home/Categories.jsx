import Heading from "../Shared/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Categories.css";

// import required modules
import { Pagination } from "swiper/modules";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className="my-20 section">
      <Heading subTitle="From 11:00am to 10:00pm" title="Order Online" />

      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-12"
      >
        <SwiperSlide>
          <CategoryCard image={slider1} title="Salad" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard image={slider2} title="Pizza" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard image={slider3} title="Soup" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard image={slider4} title="Cake" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard image={slider5} title="Salad" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
