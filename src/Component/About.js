import "./About.css";
import {Link} from "react-router-dom";
import frontImg from "../assets/images/front.jpg";
import backImg from "../assets/images/back.webp";


const About = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>
                    Who Am I!
                </h1>
                <p>I'm a Full Stack Software Developer. I will build Management level application/software for you</p>
                <Link to="/contact"><button className="btn">Contact Me</button></Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={frontImg} alt="" className="img" alt="true"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={backImg} alt="" className="img" alt="true"/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;