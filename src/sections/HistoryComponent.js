import React, { Component } from "react";
import "../App.css";
import TrackVisibility from "react-on-screen";
import HistoryCardComponent from "../components/HistoryCardComponent";
import BasketBall from "../assets/history card icons/basketball.svg";
import Classroom from "../assets/history card icons/classroom.svg";
import Computer from "../assets/history card icons/computer.svg";
import CustomerService from "../assets/history card icons/customer-service.svg";
import OpenBook from "../assets/history card icons/open-magazine.svg";
import Graduate from "../assets/history card icons/graduate-student-avatar.svg";
import Diploma from "../assets/history card icons/diploma.svg";
import Code from "../assets/history card icons/code.svg";

class HistoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldAnimateOnce: false
    };
  }

  render() {
    const educationCards = [
      {
        year: "2001-2011",
        text: "Primary School at Hørsholm Skole",
        icon: Classroom
      },
      {
        year: "2011-2014",
        text: "Gymnasium at Nærum Gymnasium. \n Major in math & music.",
        icon: OpenBook
      },
      {
        year: "2015-2018",
        text: "Studying Bachelor in Software Development at ITU.",
        icon: Graduate
      },
      {
        year: "2018",
        text:
          "Finished degree with thesis on the use of Data Visualizations in Agile Planning.",
        icon: Diploma
      },
      {
        year: "2019-present",
        text:
          "Studying MSc in Computer Science (Specialization in Software Project Management) at ITU.",
        icon: Diploma
      }
    ];

    const workCards = [
      {
        year: "2014-2015",
        text: "Working with children at Hørsholm Skole.",
        icon: BasketBall
      },
      {
        year: "2015-2016",
        text: "IT-Support at Moalem Weitemeyer Bendtsen law firm.",
        icon: CustomerService
      },
      {
        year: "2017-2018",
        text: "Student Developer at SmartRPA.\n Java APIs, Wordpress, RPA.",
        icon: Computer
      },
      {
        year: "2018-2019",
        text: "Student Developer at Rambøll DK.\n Web, apps and IT Strategy",
        icon: Code
      },
      {
        year: "2019-present",
        text: "Full Stack Developer at Forecast.",
        icon: Code
      }
    ];

    return (
      <div className="history-component">
        <h1 className="history-component-title">Education & Work History</h1>
        <div className="job-and-education-grid">
          <div className="education">
            {educationCards.map((card, idx) => (
              <TrackVisibility
                once={this.state.shouldAnimateOnce}
                offset={idx === 0 ? 100 : 0}
              >
                <HistoryCardItem
                  year={card.year}
                  text={card.text}
                  icon={card.icon}
                />
              </TrackVisibility>
            ))}
          </div>
          <div className="timeline" />
          <div className="job">
            {workCards.map((card, idx) => (
              <TrackVisibility
                offset={idx === 0 ? 100 : 0}
                once={this.state.shouldAnimateOnce}
              >
                <HistoryCardItem
                  year={card.year}
                  text={card.text}
                  icon={card.icon}
                ></HistoryCardItem>
              </TrackVisibility>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const HistoryCardItem = props => {
  const style = props.isVisible ? "come-in" : "animation-hide";
  return (
    <div className={style}>
      <HistoryCardComponent
        year={props.year}
        text={props.text}
        icon={props.icon}
      />
    </div>
  );
};

export default HistoryComponent;
