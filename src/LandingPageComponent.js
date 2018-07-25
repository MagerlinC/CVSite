import React, { Component } from 'react';
import './App.css';
import Hero from "./assets/MikkelITU.jpg";
import ScrollLogo from './assets/scroll-arrow-to-down.svg';
import CardComponent from "./CardComponent";
import Waypoint from 'react-waypoint';
import ListCardComponent from "./ListCardComponent";
import ScrollableAnchor from 'react-scrollable-anchor';

class LandingPageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shouldAnimate: false
        };
        this._handleWaypointEnter = this._handleWaypointEnter.bind(this);
        this._handleWaypointLeave = this._handleWaypointLeave.bind(this);
    }


    cardOneContents = ["Hi there! My name is Mikkel. I'm a Copenhagen-based Software developer holding a BSc in Software Development from the IT University of Copenhagen, Denmark.", "I’m an interested learner, a hard worker and a go-getter. " +
    "I like to get things done, but I also like to get them done right. I love new experiences, to be challenged and to learn. ",
        "I have experience with every step of the software project process, from requirements elicitation and business cases, through development, to deployment and user testing. I am capable of working on both complex coding tasks, and building the bridge between client needs and software features. " +
        "This experience comes from both theoretical knowledge of software, project management and business analysis, and from practical experience of building software solutions in teams."];
    cardTwoContents = ["HTML", "CSS", "Javascript", "Typescript", "Angular 5", "React", "Chart.js" ,"ASP.NET MVC", "Wordpress"];
    cardThreeContents = ["Java", "C#", "F#", "MySQL, MSSQL"];
    cardFourContents = ["Agile Methodologies", "Requirements Elicitation", "Object Oriented Design", "IT Strategy & Business Analysis"];

    _handleWaypointEnter() {
        this.setState({
            shouldAnimate: true
        });
        console.log('Entered!');
    }
    _handleWaypointLeave() {
        this.setState({
            shouldAnimate: false
        });
        console.log('Left!');
    }

    render() {
        const classes = this.state.shouldAnimate ? 'animation-hide' : 'animation-show';
        return (
            <div className="landing-page">
                <div className="scroll-down-section">
                    <a href='#section1'>
                        <img id="breathing-logo" src={ScrollLogo} className="scroll-logo"/>
                    </a>
                </div>
                <div className="parallax">
                    <div className="shader-overlay">
                        <div className="landing-page-contents">
                            <div className="landing-page-text">
                                <p className="landing-page-text-header">Mikkel Agerlin</p>
                                <Waypoint
                                    onEnter={this._handleWaypointEnter}
                                    onLeave={this._handleWaypointLeave}
                                />
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
                <ScrollableAnchor id={'section1'}>
                    <div className="card-grid">
                        <div className="card-holder">
                            <div className={classes}>
                                <CardComponent title="Mikkel, BSc in Software Development" contents={this.cardOneContents}/>
                            </div>
                            <div className={classes}>
                                <div className="card-inner-grid">
                                    <ListCardComponent title="Web Skills" contents={this.cardTwoContents}/>
                                    <div className="card-inner-holder">
                                        <ListCardComponent title="Coding Skills" contents={this.cardThreeContents}/>
                                        <ListCardComponent title="Other Skills" contents={this.cardFourContents}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes}>
                            <div className="landing-page-hero">
                                <img src={Hero} className="hero-img" alt="hero"/>
                                <p className="hero-img-text">Mikkel, BSc in Software Development - ITU 2018</p>
                            </div>
                        </div>
                    </div>
                </ScrollableAnchor>
            </div>
        );
    }
}

export default LandingPageComponent;

