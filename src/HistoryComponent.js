import React, { Component } from 'react';
import './App.css';
import TrackVisibility from 'react-on-screen';
import HistoryCardComponent from "./HistoryCardComponent";
import BasketBall from './assets/history card icons/basketball.svg';
import BookStack from './assets/history card icons/books-stack-of-three.svg';
import Classroom from './assets/history card icons/classroom.svg';
import Clerk from './assets/history card icons/clerk.svg';
import Computer from './assets/history card icons/computer.svg';
import CustomerService from './assets/history card icons/customer-service.svg';
import OpenBook from './assets/history card icons/open-magazine.svg';
import Graduate from './assets/history card icons/graduate-student-avatar.svg';
import Diploma from './assets/history card icons/diploma.svg';
import Code from './assets/history card icons/code.svg';

class HistoryComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shouldAnimateOnce: false
        }
    }

    render() {
        return (
            <div className="history-component">
                <div className="job-and-education-grid">
                    <div className="education">
                        <TrackVisibility once={this.state.shouldAnimateOnce} offset={100}>
                            <HistoryCardItem year="2001-2011" text="Primary School at Hørsholm Skole" icon={Classroom}>
                            </HistoryCardItem>
                        </TrackVisibility>
                        <TrackVisibility once={this.state.shouldAnimateOnce}>
                            <HistoryCardItem year="2011-2014" text="Gymnasium at Nærum Gymnasium.
                                Major in math & music." icon={OpenBook}>
                            </HistoryCardItem>
                        </TrackVisibility>
                        <TrackVisibility once={this.state.shouldAnimateOnce}>
                            <HistoryCardItem/>
                        </TrackVisibility>
                        <TrackVisibility once={this.state.shouldAnimateOnce}>
                            <HistoryCardItem year="2015-2018" text="Bachelor in Software Development at ITU." icon={Graduate}>
                            </HistoryCardItem>
                        </TrackVisibility>
                        <TrackVisibility once={this.state.shouldAnimateOnce}>
                            <HistoryCardItem year="2018" text="Finished degree with thesis on the use of Data Visualizations in Agile Planning" icon={Diploma}>
                            </HistoryCardItem>
                        </TrackVisibility>
                    </div>
                    <div className="timeline"/>
                    <div className="job">
                        <TrackVisibility once={this.state.shouldAnimateOnce} offset={100}>
                            <HistoryCardItem year="2011-2013" text="Cashier at Netto" icon={Clerk}>
                            </HistoryCardItem>
                        </TrackVisibility>
                        <TrackVisibility once={this.state.shouldAnimateOnce}>
                            <HistoryCardItem year="2013-2014" text="Tutor in Math, Music, Danish & English" icon={BookStack}>
                            </HistoryCardItem>
                        </TrackVisibility>
                        <TrackVisibility once={this.state.shouldAnimateOnce}>
                            <HistoryCardItem year="2014-2015" text="Year off working with children at Hørsholm Skole." icon={BasketBall}>
                            </HistoryCardItem>
                        </TrackVisibility>
                        <TrackVisibility once={this.state.shouldAnimateOnce}>
                            <HistoryCardItem year="2015-2016" text="IT-Support at Moalem Weitemeyer Bendtsen law firm." icon={CustomerService}>
                            </HistoryCardItem>
                        </TrackVisibility>
                        <TrackVisibility once={this.state.shouldAnimateOnce}>
                            <HistoryCardItem year="2017-2018" text="Student Developer at SmartRPA.
                                Java APIs, Wordpress, RPA." icon={Computer}>
                            </HistoryCardItem>
                        </TrackVisibility>
                        <TrackVisibility once={this.state.shouldAnimateOnce}>
                            <HistoryCardItem year="2018" text="Student Developer at Rambøll DK.
                                Web, apps and IT Strategy" icon={Code}>
                            </HistoryCardItem>
                        </TrackVisibility>
                    </div>
                </div>
            </div>
        );
    }


}

const HistoryCardItem = (props) => {
    const style = props.isVisible ? 'come-in' : 'animation-hide';
    return (
        <div className={style}>
            <HistoryCardComponent year={props.year} text={props.text} icon={props.icon}/>
        </div>
    );
}


export default HistoryComponent;
