import React, { Component } from 'react';
import Logo from './assets/MLogo.svg';
import { stack as Menu } from 'react-burger-menu';
import './App.css';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
    }

    showSettings (event) {
        event.preventDefault();
    }


    render() {
        return (
            <div className="header-component">
                <div className="logo-img-container">
                    <a href="/">
                        <img src={Logo} className="logo-img"/>
                    </a>
                </div>
                    <Menu right>
                        <a id="home" className="menu-item" href="/"><p className="menu-item"><span>Home</span></p></a>
                        <a id="projects" className="menu-item" href="/projects"><p className="menu-item">PROJECTS</p></a>
                        <a id="history" className="menu-item" href="/history"><p className="menu-item">WORK & EDUCATION</p></a>
                        <a id="contact" className="menu-item" href="/contact"><p className="menu-item">CONTACT</p></a>
                    </Menu>
            </div>
        );
    }
}


export default HeaderComponent;
