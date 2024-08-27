

import Advertisement from "@/components/ui/Home/Advertisement";
import CustomersReview from "@/components/ui/Home/CustomerReview";
import FeaturedRooms from "@/components/ui/Home/FeaturedRooms";
import HeroSection from "@/components/ui/Home/HeroSection";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Advertisement/>
            <FeaturedRooms/>
            <CustomersReview/>
        </div>
    );
};

export default Home;