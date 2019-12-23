import React, { Component } from "react";
import "./App.css";
import CardComponent from "./CardComponent";
import DownloadIcon from "./assets/download.svg";
import Thesis from "./assets/Using Interactive Data Visualizations in Agile Planning - MAGC  LUTV 2018.pdf";
import RambollReport from "./assets/BFOP Business Case Report Group D.pdf";
import GithubLogo from "./assets/github-logo.svg";
import TrackVisibility from "react-on-screen";

class ProjectsComponent extends Component {
  projectOne = [
    "This thesis examines how agile planning can be supported by interactive data visualizations. Agile planning is difficult, in part due to producing a large dataset that a project manager has to make their best efforts at drawing rationale from, in order to make plans. According to Mike Cohn, agile planning is best communicated through visualizations of the produced plans." +
      "Attempting to visualize agile planning data results in the visualization making a trade-off between richness of data and simplicity of visualizing. In examining state of the art visualizations, it was found that existing visualizations tend towards simplicity, providing lean rationale.",
    "We have in this thesis explored how data visualizations for planning purposes can include a richer data set through the use of modern, interactive digitalization techniques. We have found that following Shneiderman's visualization mantra lets us provide the viewer with much more data, in a way that  still maintains the simplicity of the visualization, through an explorative drill-down approach.",
    "The value of such a visualization was backed up by the evaluation of a prototype by the planning company Forecast."
  ];

  projectTwo = [
    "Rambøll Denmark uses Virtual Reality to showcase architecture, buildings and the building process for clients and engineers. Piloting the virtual reality equipment requires training, tbhat Rambøll had written guides on.",
    "These guides were originally stored in a Sharepoint solution, but it was quickly discovered that access to the guides was needed by visitors and guests, without the need for logging in to internal services.",
    "For this reason, I built an online, open and Web-based solution in Angular, exposing their guides and providing a platform for sharing and uploading of future guides for VR equipment." +
      " The code for this project can be found on my Github."
  ];

  projectThree = [
    "Digitalizing Knowledge Sharing in Rambøll Denmark." +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel pellentesque turpis, vitae pellentesque urna. Vestibulum lacinia sem enim, ut mollis libero molestie non. Pellentesque ut nunc congue, tristique mauris eget, viverra lacus. Phasellus ac odio ultricies, fermentum justo sed, commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis libero urna. Praesent ut massa metus."
  ];

  projectFour = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel pellentesque turpis, vitae pellentesque urna. Vestibulum lacinia sem enim, ut mollis libero molestie non. Pellentesque ut nunc congue, tristique mauris eget, viverra lacus. Phasellus ac odio ultricies, fermentum justo sed, commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis libero urna. Praesent ut massa metus." +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel pellentesque turpis, vitae pellentesque urna. Vestibulum lacinia sem enim, ut mollis libero molestie non. Pellentesque ut nunc congue, tristique mauris eget, viverra lacus. Phasellus ac odio ultricies, fermentum justo sed, commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis libero urna. Praesent ut massa metus."
  ];

  render() {
    return (
      <div className="projects-component">
        <div className="projects-parallax">
          <div className="shader-overlay">
            <div className="projects-content">
              <p className="projects-header">PROJECTS</p>
            </div>
            <div className="projects-grid">
              <VisibilityWrapper
                title="Thesis: Using Data Visualizations in Agile Planning"
                contents={this.projectOne}
                link={Thesis}
                logo={DownloadIcon}
              />
              <VisibilityWrapper
                title="Giving Virtual Solutions Lab Users Access to Guides on the fly in Rambøll - Frontend"
                contents={this.projectTwo}
                link="https://github.com/MagerlinC/VSLGuides"
                logo={GithubLogo}
              />
              <VisibilityWrapper
                title="Digitalizing Knowledge Sharing in Rambøll"
                contents={this.projectThree}
                link={RambollReport}
                logo={DownloadIcon}
              />
              <VisibilityWrapper
                title="Building a responsive personal website in React"
                contents={this.projectFour}
                link="https://github.com/MagerlinC/CVSite"
                logo={GithubLogo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const VisibilityWrapper = props => {
  const style = ""; //props.isVisible ? "animated fadeInUp" : "animation-hide";
  return (
    <div className={style}>
      <CardComponent
        title={props.title}
        contents={props.contents}
        link={props.link}
        logo={props.logo}
      />
    </div>
  );
};

export default ProjectsComponent;
