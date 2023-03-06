import react from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import PageHero from "../Component/PageHero";
import AboutSection from "../Component/About";
import PricingCard from "../Component/PricingCard";

const About = () => {
    document.title = "About";
    return (
        <div>
            <Navbar/>
            <PageHero heading="ABOUT" text="Know more about me"/>
            <AboutSection/>
            <PricingCard />
            <Footer/>
        </div>
    );
}

export default About;