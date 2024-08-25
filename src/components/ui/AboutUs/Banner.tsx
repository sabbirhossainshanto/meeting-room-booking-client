import assets from "@/assets";
import Heading from "@/components/shared/Heading";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[350px]"
      style={{ backgroundImage: `url(${assets.contactBanner})` }}
    >
      <div className="container mx-auto py-36">
        <h1 className="text-center text-3xl text-white mb-1">About us</h1>
        <div className="flex justify-center items-center">
          <Heading padding="0" title="About Us" to="/" color="text-white"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
