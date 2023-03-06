
import Navbar from "../Component/Navbar";
import Herosection from "../Component/Herosection"
import Footer from "../Component/Footer";

const Home = () => {
    document.title = "Welcome to my React Portfolio";
    return (
        <div>
            <Navbar/>
            <Herosection/>
            <Footer/>
        </div>
    );
}

export default Home;