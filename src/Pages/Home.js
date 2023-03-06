
import Navbar from "../Component/Navbar";
import Herosection from "../Component/Herosection"
import Footer from "../Component/Footer";
import Work from "../Component/Work";
import PricingCard from "../Component/PricingCard";

const Home = () => {
    document.title = "Welcome to my React Portfolio";
    return (
        <div>
            <Navbar/>
            <Herosection/>
            <Work />
            <PricingCard />
            <Footer/>
        </div>
    );
}

export default Home;