import { Helmet } from "react-helmet-async";
import BannerSlider from "../Components/Home/BannerSlider";
import Categories from "../Components/Home/Categories";
import ChefRecommmend from "../Components/Home/ChefRecommmend";
import Testimonials from "../Components/Home/Testimonials";
import TopFoodBanner from "../Components/Home/TopFoodBanner";
import FeatureCard from "../Components/Shared/FeatureCard";
import bgImage from "../assets/home/chef-service.jpg";

const Home = () => (
  <main>
    <Helmet>
      <title>Home | Bistro Boss Restaurant</title>
    </Helmet>
    <BannerSlider />
    <Categories />
    <div className="section">
      <FeatureCard
        bgImage={bgImage}
        title="Bistro Boss"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        bgColor="white"
        category="popular"
        headingTitle="FROM OUR MENU"
        subheadingTitle="Check it out"
      />
      <div className="bg-[#151515] text-white py-24 text-center text-5xl font-semibold font-cinzel">
        <h2>Call Us: +88 0192345678910</h2>
      </div>
      <ChefRecommmend />
    </div>
    <TopFoodBanner />
    <Testimonials />
  </main>
);

export default Home;
