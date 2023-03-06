import react from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import PageHero from "../Component/PageHero";
import PricingCard from "../Component/PricingCard";

const Project = () => {
    return (
        <div>
            <Navbar/>
            <PageHero heading="PROJECTS." text="Some of my most recent works"/>
            <PricingCard />
            <Footer/>
        </div>
    );
}

export default Project;