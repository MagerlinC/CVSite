/**
 * Created by mac on 17/07/2018.
 */


import React, { Component } from 'react';
import LinkedIn from "./assets/linkedin-button.svg";
import Facebook from './assets/facebook-logo-button.svg';
import Github from './assets/github-logo.svg';
import './App.css';

class FooterComponent extends Component {
    render() {
        return (
            <div className="footer-component">
                <div className="footer-grid">
                    <div className="person-info">
                        <p className="info-item">Mikkel Agerlin Christensen</p>
                        <p className="info-item">mikkel_ac@hotmail.com</p>
                        <p className="info-item">+45 29 93 11 57</p>
                        <p className="info-item">Smyrnavej 13b, 1tv, 2300 København S, Denmark.</p>
                    </div>
                    <div className="social-section">
                        <a href="https://www.linkedin.com/in/mikkel-agerlin-christensen-3a38ba166/">
                            <img src={LinkedIn} className="social-logo"/>
                        </a>
                        <a href="https://github.com/MagerlinC">
                            <img src={Github} className="social-logo"/>
                        </a>
                        <a href="https://www.facebook.com/MACMikkel">
                            <img src={Facebook} className="social-logo"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}


export default FooterComponent;

