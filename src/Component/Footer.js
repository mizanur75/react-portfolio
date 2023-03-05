import "./Footer.css";
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>12/3, Sohid Minar Road, Kallyanpur</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                            +8801710472020
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                            mizanurrahman615@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam atque consectetur consequatur ducimus eos excepturi.</p>
                    <div className="social">
                        <FaFacebook size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <FaTwitter size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        <FaLinkedin size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;