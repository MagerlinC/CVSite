import React, { Component } from 'react';
import './App.css';
import ColorHeader from "./ColorHeader";

class HistoryComponent extends Component {
    render() {
        return (
            <div className="history-component">
                <ColorHeader title="History"/>
                <h1>History works!</h1>
            </div>
        );
    }
}


export default HistoryComponent;
