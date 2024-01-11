import { useSearchParams } from "react-router-dom";
import Banner from "../Components/Shared/Banner";
import ShopItems from "../Components/Shop/ShopItems";
import bannerImg from "../assets/shop/banner2.jpg";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  return (
    <main>
      <Banner
        bgImage={bannerImg}
        title="Our Shop"
        description="Would you like to try a dish?"
      />
      <ShopItems category={category} />
    </main>
  );
};

export default Shop;
