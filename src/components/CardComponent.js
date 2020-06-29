/**
 * Created by mac on 17/07/2018.
 */

import React, { Component } from "react";
import "../App.css";

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreview: !!props.previewImg,
      isTouchBased: false,
    };
    this.togglePreview = this.togglePreview.bind(this);
  }

  hidePreview(e) {
    this.setState({ showPreview: false });
  }

  showPreview(e) {
    if (!this.state.showPreview && this.props.previewImg) {
      this.setState({ showPreview: true });
    }
  }

  togglePreview(e) {
    this.setState((prevState) => ({
      showPreview: !prevState.showPreview,
      isTouchBased: true,
    }));
  }

  onCardTouch(e) {
    // We already opened with a touch, so ignore re-tries,
    // by clicking the entire card (to avoid scrolling issues)
    if (this.state.isTouchBased && !this.state.showPreview) {
      return;
    }
    this.togglePreview(e);
  }

  render() {
    return (
      <div
        onTouchStart={this.onCardTouch.bind(this)}
        onMouseLeave={
          !this.state.isTouchBased ? this.showPreview.bind(this) : void 0
        }
        className={
          "card-component" + (this.state.showPreview ? " preview" : "")
        }
      >
        <h1 className="card-title">{this.props.title}</h1>
        {this.state.isTouchBased && !this.state.showPreview && (
          <div
            onClick={this.togglePreview.bind(this)}
            title="close"
            className={"touch-close"}
          >
            X
          </div>
        )}
        {this.state.showPreview ? (
          <div
            onMouseEnter={
              !this.state.isTouchBased ? this.hidePreview.bind(this) : void 0
            }
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
                <a title={this.props.btnHover} href={this.props.link}>
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
