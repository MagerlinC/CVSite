import React, { Component } from 'react';
import './App.css';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="header-component">
                <a href="/">
                    <img src={this.props.img} className="logo-img" alt="logo"/>
                </a>
                <div className="header-items">
                    <header className="App-header">
                        <a href="/">
                            <h1 className="person-name">{this.props.name}</h1>
                        </a>
                    </header>
                    <div className="menu-bar">
                        <a href="/projects">
                            <div className="menu-item">Projects</div>
                        </a>
                        <a href="/history">
                            <div className="menu-item">Education & Work History</div>
                        </a>
                        <a href="/contact">
                            <div className="menu-item">Contact</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}


export default HeaderComponent;
