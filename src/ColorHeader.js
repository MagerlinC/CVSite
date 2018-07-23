import React, { Component } from 'react';
import './App.css';

class ColorHeader extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="color-header">
                <h1 className="color-header-title">{this.props.title}</h1>
            </div>
        );
    }
}


export default ColorHeader;
