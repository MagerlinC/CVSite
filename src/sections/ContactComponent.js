import React, { Component } from "react";
import AddressIcon from "../assets/location-pin.svg";
import PhoneIcon from "../assets/phone-call.svg";
import MailIcon from "../assets/email.svg";
import TextareaAutosize from "react-autosize-textarea";
import "../App.css";

class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", msg: "" };
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateMsg = this.updateMsg.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  updateMsg(event) {
    this.setState({ msg: event.target.value });
  }

  handleSubmit(event) {
    this.sendMail(this.state.name, this.state.email, this.state.msg);
    event.preventDefault();
  }
  render() {
    return (
      <div className="contact-component">
        <div className="contact-parallax">
          <div className="shader-overlay">
            <div className="contact-content">
              <p className="contact-header">Contact</p>
            </div>
            <div className="contact-grid">
              <div className="mail">
                <form onSubmit={this.handleSubmit} className="mail-section">
                  <input
                    type="text"
                    className="contact-input"
                    value={this.state.name}
                    onChange={this.updateName}
                    placeholder="Your Name"
                  />
                  <input
                    type="text"
                    className="contact-input"
                    value={this.state.email}
                    onChange={this.updateEmail}
                    placeholder="Your Email"
                  />
                  <TextareaAutosize
                    rows={10}
                    id="messageInput"
                    className="message-input"
                    value={this.state.msg}
                    onChange={this.updateMsg}
                    placeholder="Message"
                  />
                  <input type="submit" value="Submit" className="send-button" />
                </form>
              </div>
              <div className="contact-section">
                <div className="icon-and-text">
                  <img
                    alt="mail-icon"
                    src={MailIcon}
                    className="contact-icon"
                  />
                  <p className="contact-text">mikkel_ac@hotmail.com</p>
                </div>
                <div className="icon-and-text">
                  <img
                    alt="adress-icon"
                    src={AddressIcon}
                    className="contact-icon"
                  />
                  <p className="contact-text">Copenhagen, Denmark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  sendMail(name, email, msg) {
    const templateId = "cv_site_contact";
    const templateParams = {
      from_name: name,
      from_email: email,
      message: msg,
    };
    window.emailjs
      .send("gmail", templateId, templateParams)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) => console.error("EmailJS Error: ", err));
    // Clean state
    this.setState({ email: "", msg: "", name: "" });
  }
}

export default ContactComponent;
