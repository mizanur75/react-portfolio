import react from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import PageHero from "../Component/PageHero";

const Project = () => {
    return (
        <div>
            <Navbar/>
            <PageHero heading="PROJECTS." text="Some of my most recent works"/>
            <Footer/>
        </div>
    );
}

export default Project;