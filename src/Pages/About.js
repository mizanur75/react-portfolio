import react from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import PageHero from "../Component/PageHero";

const About = () => {
    return (
        <div>
            <Navbar/>
            <PageHero heading="ABOUT" text="Know more about me"/>
            <Footer/>
        </div>
    );
}

export default About;