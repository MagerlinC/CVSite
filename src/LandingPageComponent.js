import React, { Component } from 'react';
import './App.css';
import Hero from "./assets/MikkelITU.jpg";
import Logo from './assets/MLogo.svg';
import CardComponent from "./CardComponent";
import ListCardComponent from "./ListCardComponent";


class LandingPageComponent extends Component {

    cardOneContents = ["Hi there! My name is Mikkel. I'm 23 year old Danish Software developer holding a BSc in Software Development from the IT University of Copenhagen, Denmark.", "I’m an interested learner, a hard worker and a go-getter. " +
    "I like to get things done, but I also like to get them done right. I love new experiences, to be challenged and to learn. ",
        "I have experience with every step of the software project process, from requirements elicitation and business cases, through development, and to deployment and user testing. I am both capable of working on complex coding tasks, as well as being a part of building the bridge between client needs and software features. " +
        "This experience comes from both theoretical knowledge of software, project management and business analysis, and from practical experience of building software solutions in teams."];
    cardTwoContents = ["HTML", "CSS", "Javascript", "Typescript", "Angular 5", "React", "Chart.js" ,"ASP.NET MVC", "Wordpress"];
    cardThreeContents = ["Java", "C#", "F#", "MySQL, MSSQL"];
    cardFourContents = ["Agile Methodologies", "Requirements Elicitation", "Object Oriented Design", "IT Strategy & Business Analysis"];

    render() {
        return (
            <div className="landing-page">
                <div className="parallax">
                    <div className="shader-overlay">
                        <div className="landing-page-contents">
                            <div className="landing-page-text">
                                <p className="landing-page-text-header">Mikkel Agerlin</p>
                                <div className="text-and-scrolling-text">
                                    <div className="slider-container">
                                    <p className="landing-page-text-subtitle">
                                        Copenhagen-based
                                    </p>
                                    </div>
                                    <div id="slider" className="slider">
                                        <ul>
                                            <li>
                                                <div className="slider-container">
                                                    <p className="landing-page-role-text">Software Developer</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="slider-container">
                                                    <p className="landing-page-role-text">Web Designer</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="slider-container">
                                                    <p className="landing-page-role-text">Musician</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="slider-container">
                                                    <p className="landing-page-role-text">Coffee Enthusiast</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-grid">
                    <div className="card-holder">
                        <CardComponent title="Mikkel, 23, BSc in Software Development" contents={this.cardOneContents}/>
                        <div className="card-inner-grid">
                            <ListCardComponent title="Web Skills" contents={this.cardTwoContents}/>
                            <div className="card-inner-holder">
                                <ListCardComponent title="Coding Skills" contents={this.cardThreeContents}/>
                                <ListCardComponent title="Other Skills" contents={this.cardFourContents}/>
                            </div>
                        </div>
                    </div>
                    <div className="landing-page-hero">
                        <img src={Hero} className="hero-img" alt="hero"/>
                        <p className="hero-img-text">Mikkel, 23. BSc in Software Development - ITU 2018</p>
                    </div>

                </div>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener("scroll", this.boundFun, false);
    }
}


export default LandingPageComponent;
