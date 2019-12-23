/**
 * Created by mac on 18/07/2018.
 */

import React, { Component } from "react";
import CheckSquare from "../assets/check-square.svg";
import "../App.css";

class ListCardComponent extends Component {
  render() {
    return (
      <div className="card-component">
        <h1 className="card-title">{this.props.title}</h1>
        <div className="card-content">
          <div>
            {this.props.contents.map(function(listValue, index) {
              return (
                <div key={index} className="list-card-item">
                  <img
                    src={CheckSquare}
                    className="list-card-item-icon"
                    alt="icon"
                  />
                  <p className="list-card-item-text">{listValue}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ListCardComponent;
