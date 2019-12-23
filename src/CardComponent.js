/**
 * Created by mac on 17/07/2018.
 */

import React, { Component } from "react";
import "./App.css";

class CardComponent extends Component {
  render() {
    return (
      <div className="card-component">
        <h1 className="card-title">{this.props.title}</h1>
        <div className="card-content">
          {this.props.contents.map((listValue, index) => {
            return (
              <p key={index} className="card-item">
                {listValue}
              </p>
            );
          })}
        </div>
        {this.props.link && this.props.logo && (
          <div className="card-overlay-button">
            <a href={this.props.link}>
              <img
                alt="card-logo"
                src={this.props.logo}
                className="overlay-button-icon"
              />
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default CardComponent;
