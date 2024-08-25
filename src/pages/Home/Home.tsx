

import Advertisement from "@/components/ui/Home/Advertisement";
import FeaturedRooms from "@/components/ui/Home/FeaturedRooms";
import HeroSection from "@/components/ui/Home/HeroSection";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Advertisement/>
            <FeaturedRooms/>
        </div>
    );
};

export default Home;