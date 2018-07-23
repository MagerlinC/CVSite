import React, { Component } from 'react';
import './App.css';
import CardComponent from "./CardComponent";
import DownloadIcon from './assets/download.svg';
import Thesis from './assets/Using Interactive Data Visualizations in Agile Planning - MAGC  LUTV 2018.pdf';
import ColorHeader from "./ColorHeader";

class ProjectsComponent extends Component {

    projectOne = [
        "In this thesis, we have examined how agile planning can be supported by interactive data visualizations. Agile planning is difficult, in part due to producing a large dataset that a project manager has to make their best efforts at drawing rationale from, in order to make plans. According to Mike Cohn, agile planning is best communicated through visualizations of the produced plans."
        + "Attempting to visualize agile planning data results in the visualization making a trade-off between richness of data and simplicity of visualizing. In examining state of the art visualizations, it was found that existing visualizations tend towards simplicity, providing lean rationale.",
        "We have in this thesis explored how data visualizations for planning purposes can include a richer data set through the use of modern, interactive digitalization techniques. We have found that following Shneiderman's visualization mantra lets us provide the viewer with much more data, in a way that  still maintains the simplicity of the visualization, through an explorative drill-down approach.",
        "The value of such a visualization was backed up by the evaluation of a prototype by the planning company Forecast."
    ];

    render() {
        return (
            <div className="projects-component">
                <ColorHeader title="PROJECTS"/>
                <div className="projects-grid">
                    <div className="card-and-overlay">
                        <CardComponent title="Thesis: Using Data Visualizations in Agile Planning" contents={this.projectOne}/>
                        <div className="card-overlay-button">
                            <a href={Thesis} download="thesis.pdf">
                                <img src={DownloadIcon} className="overlay-button-icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ProjectsComponent;
