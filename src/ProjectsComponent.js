import React, { Component } from 'react';
import './App.css';
import CardComponent from "./CardComponent";
import DownloadIcon from './assets/download.svg';
import Thesis from './assets/Using Interactive Data Visualizations in Agile Planning - MAGC  LUTV 2018.pdf';
import ColorHeader from "./ColorHeader";

class ProjectsComponent extends Component {

    projectOne = [1,2,3];

    render() {
        return (
            <div className="projects-component">
                <ColorHeader title="Projects"/>
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
