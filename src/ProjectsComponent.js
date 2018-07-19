import React, { Component } from 'react';
import './App.css';
import CardComponent from "./CardComponent";

class ProjectsComponent extends Component {

    projectOne = [1,2,3];

    render() {
        return (
            <div className="projects-component">
                <h1>Projects</h1>
                <div className="projects-grid">
                    <CardComponent title="Project1" contents={this.projectOne}/>
                </div>
            </div>
        );
    }
}


export default ProjectsComponent;
