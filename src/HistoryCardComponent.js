/**
 * Created by mac on 17/07/2018.
 */


import React, { Component } from 'react';
import './App.css';

class HistoryCardComponent extends Component {
    render() {
        return (
            <div className="card-component">
                <h1 className="card-title">{this.props.title}</h1>
                <div className="card-content">
                    <div>
                        {this.props.contents.map(function(listValue, index){
                            return <p key={index} className="card-item">{listValue}</p>;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}


export default HistoryCardComponent;

