import "./PageHero.css";
import {Component} from "react";

class PageHero extends Component{
    render(){
        return (
            <div className="page-hero">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
};


export default PageHero;