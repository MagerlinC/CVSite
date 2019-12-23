import React, { Component } from "react";
import "../App.css";
import CardComponent from "../components/CardComponent";
import DownloadIcon from "../assets/download.svg";
import Thesis from "../assets/Using Interactive Data Visualizations in Agile Planning - MAGC  LUTV 2018.pdf";
import RambollReport from "../assets/BFOP Business Case Report Group D.pdf";
import GithubLogo from "../assets/github-logo.svg";
import NPMLogo from "../assets/npm-logo.png";

class ProjectsComponent extends Component {
  render() {
    const projects = [
      {
        title: "Thesis: Using Data Visualizations in Agile Planning",
        contents: [
          "This thesis examines how agile planning can be supported by interactive data visualizations. Agile planning is difficult, in part due to producing a large dataset that a project manager has to make their best efforts at drawing rationale from, in order to make plans. According to Mike Cohn, agile planning is best communicated through visualizations of the produced plans.",
          "Attempting to visualize agile planning data results in the visualization making a trade-off between richness of data and simplicity of visualizing. In examining state of the art visualizations, it was found that existing visualizations tend towards simplicity, providing lean rationale.",
          "We have in this thesis explored how data visualizations for planning purposes can include a richer data set through the use of modern, interactive digitalization techniques. We have found that following Shneiderman's visualization mantra lets us provide the viewer with much more data, in a way that  still maintains the simplicity of the visualization, through an explorative drill-down approach.",
          "The value of such a visualization was backed up by the evaluation of a prototype by the planning company Forecast."
        ],
        link: Thesis,
        logo: DownloadIcon
      },
      {
        title:
          "React-Virtualized-DnD - A fully virtualized Drag and Drop framework for React",
        contents: [
          "In my work at Forecast, we often ran into issues of performance on large interactive web-components for clients with big projects.",
          "At the time, no drag and drop libraries supported virtualization technologies, forcing us to chose drag-and-drop functionality over performance.",
          "This, however, changed, when I built React-Virtualized-DnD.",
          "React-Virtualized-Dnd is a React-based, fully virtualized drag-and-drop framework, enabling the the cross over of great user interaction and great performance.",
          "I still develop and maintain this framework as open source software."
        ],
        link: "https://www.npmjs.com/package/react-virtualized-dnd",
        logo: NPMLogo
      },
      {
        title:
          "Giving Virtual Solutions Lab Users Access to Guides on the fly in Rambøll - Frontend",
        contents: [
          "Rambøll Denmark uses Virtual Reality to showcase architecture, buildings and the building process for clients and engineers. Piloting the virtual reality equipment requires training, tbhat Rambøll had written guides on.",
          "These guides were originally stored in a Sharepoint solution, but it was quickly discovered that access to the guides was needed by visitors and guests, without the need for logging in to internal services.",
          "For this reason, I built an online, open and Web-based solution in Angular, exposing their guides and providing a platform for sharing and uploading of future guides for VR equipment.",
          " The code for this project can be found on my Github."
        ],
        link: "https://github.com/MagerlinC/VSLGuides",
        logo: GithubLogo
      },
      {
        title:
          "Digitizing Knowledge Sharing in Rambøll - A business case analysis",
        contents: ["TEST"],
        link: RambollReport,
        logo: DownloadIcon
      }
    ];

    return (
      <div className="projects-component">
        <div className="projects-parallax">
          <div className="shader-overlay">
            <div className="projects-content">
              <p className="projects-header">PROJECTS</p>
            </div>
            <div className="projects-grid">
              {projects.map(project => (
                <VisibilityWrapper
                  title={project.title}
                  contents={project.contents}
                  link={project.link}
                  logo={project.logo}
                />
              ))}
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
