import Banner from "../Components/Home/Banner";
import Categories from "../Components/Home/Categories";
import ChefRecommmend from "../Components/Home/ChefRecommmend";
import TopFoodBanner from "../Components/Home/TopFoodBanner";
import FeatureCard from "../Components/Shared/FeatureCard";
import bgImage from "../assets/home/chef-service.jpg";

const Home = () => (
  <div>
    <Banner />
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
  </div>
);

export default Home;
