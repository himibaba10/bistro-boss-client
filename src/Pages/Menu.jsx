import { Helmet } from "react-helmet-async";
import Banner from "../Components/Shared/Banner";
import FeatureCard from "../Components/Shared/FeatureCard";
import Foods from "../Components/Shared/Foods";
import Heading from "../Components/Shared/Heading";
import bannerImg from "../assets/menu/banner3.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";

const Menu = () => {
  return (
    <main>
      <Helmet>
        <title>Menu | Bistro Boss Restaurant</title>
      </Helmet>
      <Banner
        bgImage={bannerImg}
        title="OUR MENU"
        description="Would you like to try a dish?"
      />
      <div className="section mb-10">
        <Heading title="Today's Offer" subTitle="Don't Miss" />
        <Foods category={"offered"} />
      </div>
      <FeatureCard
        styles="text-white"
        bgImage={dessertImg}
        title="Desserts"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        category="dessert"
      />
      <FeatureCard
        styles="text-white"
        bgImage={pizzaImg}
        title="Pizza"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        category="pizza"
      />
      <FeatureCard
        styles="text-white"
        bgImage={saladImg}
        title="Salads"
        description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        category="salad"
      />
    </main>
  );
};

export default Menu;
