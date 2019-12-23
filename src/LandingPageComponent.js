import React, { Component } from "react";
import "./App.css";
import Hero from "./assets/MikkelITU.jpg";
import ScrollLogo from "./assets/scroll-arrow-to-down.svg";
import CardComponent from "./CardComponent";

import ListCardComponent from "./ListCardComponent";
import ScrollableAnchor from "react-scrollable-anchor";
import HistoryComponent from "./HistoryComponent";
import TrackVisibility from "react-on-screen";

class LandingPageComponent extends Component {
  cardOneContents = [
    "Hi there! My name is Mikkel. I'm a Copenhagen-based Software developer holding a BSc in Software Development from the IT University of Copenhagen, Denmark.",
    "I love anything Web, and currently spend my time working as a full stack developer at Forecast, while studying for my MSc."
  ];
  cardTwoContents = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Angular 5",
    "React",
    "Chart.js",
    "ASP.NET MVC",
    "Wordpress"
  ];
  cardThreeContents = ["Java", "C#", "F#", "MySQL, MSSQL"];
  cardFourContents = [
    "Agile Methodologies",
    "Requirements Elicitation",
    "Object Oriented Design",
    "IT Strategy & Business Analysis"
  ];

  render() {
    return (
      <div className="landing-page">
        <div className="scroll-down-section animated bounce">
          <a href="#section1">
            <img
              id="breathing-logo"
              src={ScrollLogo}
              className="scroll-logo"
              alt="ScrollDown"
            />
          </a>
        </div>
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
                          <p className="landing-page-role-text">
                            Software Developer
                          </p>
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
                          <p className="landing-page-role-text">
                            Coffee Enthusiast
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollableAnchor id={"section1"}>
          <TrackVisibility>
            <div className="CV-section">
              <div className="cv-card-grid">
                <div className="card-holder">
                  <CardComponent
                    title="Mikkel, BSc in Software Development"
                    contents={this.cardOneContents}
                  />
                  <div className="card-inner-grid">
                    <ListCardComponent
                      title="Web Skills"
                      contents={this.cardTwoContents}
                    />
                    <div className="card-inner-holder">
                      <ListCardComponent
                        title="Coding Skills"
                        contents={this.cardThreeContents}
                      />
                      <ListCardComponent
                        title="Other Skills"
                        contents={this.cardFourContents}
                      />
                    </div>
                  </div>
                </div>
                <div className="landing-page-hero">
                  <img src={Hero} className="hero-img" alt="hero" />
                  <p className="hero-img-text">
                    Mikkel, BSc in Software Development - ITU 2018
                  </p>
                </div>
              </div>
            </div>
          </TrackVisibility>
        </ScrollableAnchor>
        <HistoryComponent />
      </div>
    );
  }
}

/*
const VisibilityWrapper = props => {
  const style = props.isVisible ? "animated bounceIn" : "animation-hide";
  return <div className={style}></div>;
};*/

export default LandingPageComponent;
