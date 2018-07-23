import React, { Component } from 'react';
import AddressIcon from './assets/location-pin.svg';
import PhoneIcon from './assets/phone-call.svg';
import MailIcon from './assets/email.svg';
import TextareaAutosize from 'react-autosize-textarea';
import './App.css';
import ColorHeader from "./ColorHeader";

class ContactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', msg: ''};
        this.updateName = this.updateName.bind(this);
        this.updateEmail= this.updateEmail.bind(this);
        this.updateMsg = this.updateMsg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateMsg(event) {
        this.setState({msg: event.target.value});
    }

    handleSubmit(event) {
        this.sendMail(this.state.name, this.state.email, this.state.msg);
        event.preventDefault();
    }
    render() {
        return (
            <div className="contact-component">
                <ColorHeader title="Contact Me!"/>
                <div className="contact-grid">
                    <div className="mail">
                        <form onSubmit={this.handleSubmit} className="mail-section">
                            <input type="text" className="contact-input" value={this.state.name} onChange={this.updateName} placeholder="Your Name"/>
                            <input type="text" className="contact-input" value={this.state.email} onChange={this.updateEmail} placeholder="Your Email"/>
                            <TextareaAutosize rows={10} id="messageInput" className="message-input" value={this.state.msg} onChange={this.updateMsg} placeholder="Message"/>
                            <input type="submit" value="Submit" className="send-button"/>
                        </form>
                    </div>
                    <div className="contact-section">
                        <div className="icon-and-text">
                            <img src={MailIcon} className="contact-icon"/>
                            <p className="contact-text">
                                mikkel_ac@hotmail.com
                            </p>
                        </div>
                        <div className="icon-and-text">
                            <img src={PhoneIcon} className="contact-icon"/>
                            <p className="contact-text">
                                +45 29 93 11 57
                            </p>
                        </div>
                        <div className="icon-and-text">
                            <img src={AddressIcon} className="contact-icon"/>
                            <p className="contact-text">
                               Smyrnavej 13b, 1tv, 2300 København S, Denmark
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contact-bottom-spacer"></div>
            </div>
        );
    }
    sendMail(name, email, msg) {
        console.log(name, email, msg);
    }
}


export default ContactComponent;
