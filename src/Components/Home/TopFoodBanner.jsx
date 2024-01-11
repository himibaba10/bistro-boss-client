import featuredImg from "../../assets/home/featured.jpg";
import useParallax from "../../hooks/useParallax";
import Heading from "../Shared/Heading";
const TopFoodBanner = () => {
  const [parallaxRef] = useParallax(0.5);
  return (
    <div
      ref={parallaxRef}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),
      url(${featuredImg})`,
      }}
      className="bg-cover bg-center py-32"
    >
      <Heading
        title="FROM OUR MENU"
        subTitle="Check it out"
        borderColor="white"
      />
      <div className="section flex items-center gap-16 mt-12">
        <img className="max-w-2xl" src={featuredImg} alt="Featured Image" />
        <div className="text-white">
          <p className="text-3xl">March 20, 2023</p>
          <h3 className="uppercase text-3xl">Where can I get some?</h3>
          <p className="leading-6 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="uppercase text-xl font-medium text-white rounded-lg border-b-4 border-b-white px-7 py-5 hover:text-black hover:bg-white transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopFoodBanner;
