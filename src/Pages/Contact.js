import react from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import PageHero from "../Component/PageHero";

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <PageHero heading="CONTACTS." text="My Contact Details"/>
            <Footer/>
        </div>
    );
}

export default Contact;