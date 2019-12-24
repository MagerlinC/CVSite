/**
 * Created by mac on 17/07/2018.
 */

import React, { Component } from "react";
import "../App.css";

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreview: !!props.previewImg
    };
  }

  handlePreviewMouseEnter(e) {
    this.setState({ showPreview: false });
  }

  onCardMouseLeave(e) {
    if (!this.state.showPreview) {
      this.setState({ showPreview: true });
    }
  }

  render() {
    return (
      <div
        onMouseLeave={this.onCardMouseLeave.bind(this)}
        className={
          "card-component" + (this.state.showPreview ? " preview" : "")
        }
      >
        <h1 className="card-title">{this.props.title}</h1>
        {this.state.showPreview ? (
          <div
            onMouseEnter={this.handlePreviewMouseEnter.bind(this)}
            className={"card-content preview-content"}
          >
            {this.props.previewImg ? (
              <div className={"preview-image-container"}>
                <img
                  src={this.props.previewImg}
                  className={"preview-image"}
                  alt="previe-img"
                />
              </div>
            ) : (
              "Preview"
            )}
          </div>
        ) : (
          <div className="card-content animated fadeIn">
            {this.props.contents.map((listValue, index) => {
              return (
                <p key={index} className="card-item">
                  {listValue}
                </p>
              );
            })}
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
        )}
      </div>
    );
  }
}

export default CardComponent;
