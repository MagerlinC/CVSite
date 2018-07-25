import React, { Component } from 'react';
import MikkelHead from './assets/MikkelHead.png';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HeaderComponent from "./HeaderComponent";
import ProjectsComponent from "./ProjectsComponent";
import LandingPageComponent from "./LandingPageComponent";
import HistoryComponent from "./HistoryComponent";
import ContactComponent from "./ContactComponent";
import FooterComponent from "./FooterComponent";

class App extends Component {

    render() {
        return (
            <div className="App">
                <HeaderComponent img={MikkelHead} name="Mikkel Agerlin Christensen"/>
                <Router>
                    <div id="root">
                        <Route exact path="" component={LandingPageComponent} />
                        <Route path="/projects" component={ProjectsComponent}/>
                        <Route path="/history" component={HistoryComponent}/>
                        <Route path="/contact" component={ContactComponent}/>
                    </div>
                </Router>
                <FooterComponent/>
            </div>
        );
    }
}


export default App;
