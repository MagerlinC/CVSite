/**
 * Created by mac on 17/07/2018.
 */


import React, { Component } from 'react';
import LinkedIn from "./assets/linkedin-button.svg";
import DownloadCV from './assets/DownloadCV.svg';
import Github from './assets/github-logo.svg';
import CV from './assets/CV - Mikkel Agerlin.pdf';
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
                            <img src={LinkedIn} className="social-logo" alt="LinkedIn"/>
                        </a>
                        <a href="https://github.com/MagerlinC">
                            <img src={Github} className="social-logo" alt="Github"/>
                        </a>
                        <a href={CV} download={'CV - Mikkel Agerlin.pdf'}>
                            <img src={DownloadCV} className="social-logo" alt="CV"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}


export default FooterComponent;

