import react from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import PageHero from "../Component/PageHero";
import PricingCard from "../Component/PricingCard";
import ProjectCard from "../Component/ProjectCard";
import Work from "../Component/Work";

const Project = () => {
    document.title = "Project";
    return (
        <div>
            <Navbar/>
            <PageHero heading="PROJECTS." text="Some of my most recent works"/>
            <Work />
            <PricingCard />
            <Footer/>
        </div>
    );
}

export default Project;