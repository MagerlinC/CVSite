/**
 * Created by mac on 17/07/2018.
 */

import React, { Component } from "react";
import "./App.css";

class HistoryCardComponent extends Component {
  render() {
    if (this.props.year && this.props.text) {
      return (
        <div className="history-card-component">
          <div className="history-card-grid">
            <div className="history-card-left">
              <p className="history-card-title">{this.props.year}</p>
              <div className="history-card-content">
                <div>
                  <p className="card-item">{this.props.text}</p>
                </div>
              </div>
            </div>
            <div className="history-card-right">
              <img
                alt="history-card-img"
                src={this.props.icon}
                className="history-card-icon"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="empty-card-component">
          <div className="card-content">
            <div>
              <p className="card-item"></p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default HistoryCardComponent;
