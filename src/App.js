import React, { Component } from "react";
import MikkelHead from "./assets/MikkelHead.png";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderComponent from "./sections/HeaderComponent";
import ProjectsComponent from "./sections/ProjectsComponent";
import LandingPageComponent from "./sections/LandingPageComponent";
import ContactComponent from "./sections/ContactComponent";
import FooterComponent from "./sections/FooterComponent";
import NotFoundComponent from "./sections/NotFoundComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent img={MikkelHead} name="Mikkel Agerlin Christensen" />
        <Router>
          <div id="root">
            <Route exact path="" component={LandingPageComponent} />
            <Route path="/projects" component={ProjectsComponent} />
            <Route path="/contact" component={ContactComponent} />
          </div>
        </Router>
        <FooterComponent />
      </div>
    );
  }
}

export default App;
