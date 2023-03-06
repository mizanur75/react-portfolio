import react from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import PageHero from "../Component/PageHero";
import ContactForm from "../Component/ContactForm";

const Contact = () => {
    document.title = "Contact";
    return (
        <div>
            <Navbar/>
            <PageHero heading="CONTACTS." text="My Contact Details"/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default Contact;