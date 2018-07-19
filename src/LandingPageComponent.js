import React, { Component } from 'react';
import './App.css';
import Hero from "./assets/MikkelITU.jpg";
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
}


export default LandingPageComponent;
