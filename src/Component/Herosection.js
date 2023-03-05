import "./Herosection.css";
import IntroImage from "../assets/images/intro-bg.jpg";
import {Link} from "react-router-dom";


const Herosection = () => {
    return (
      <div className="hero">
          <div className="mask">
              <img className="intro-img" src={IntroImage} alt=""/>
          </div>
          <div className="content">
              <p>Hi, I'M Mizanur Rahman</p>
              <h1>Software Engineer</h1>
              <div>
                  <Link to="/project" className="btn">Projects</Link>
                  <Link to="/contact" className="btn btn-light">Contact</Link>
              </div>
          </div>
      </div>
    );
}

export default Herosection;