import React, { Component } from "react";
import moment from "moment";
import PropTypes from "prop-types";
/**STYLE**/
import style from "../assets/style/css/style";
import { withStyles } from "@material-ui/styles";
import "./../assets/style/css/calendar.css";
/**ICONS**/
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import EventItem from "./EventItem";

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(),
      selectedDate : moment()
    };
  }
  subtractMonth() {
    this.setState(prevState => {
      return {
        currentDate: prevState.currentDate.subtract(1, "M")
      };
    });
  }
  addMonth() {
    this.setState(prevState => {
      return {
        currentDate: prevState.currentDate.add(1, "M")
      };
    });
  }
  renderHeader() {
    const dateFormat = "MMMM YYYY";
    const { classes } = this.props;
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.subtractMonth.bind(this)}>
            <ArrowBack />
          </div>
        </div>
        <div className="col col-center">
          <span>{this.state.currentDate.format(dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon" onClick={this.addMonth.bind(this)}>
            <ArrowForward />
          </div>
        </div>
      </div>
    );
  }
  renderWeekDay() {
    const dateFormat = "ddd";
    const days = [];
    let startDate = moment(this.state.currentDate).startOf("week");
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {moment(startDate)
            .add(i, "d")
            .format(dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  }
  renderCells() {
    const { currentDate } = this.state;
    const monthStart = moment(currentDate).startOf("month");
    const monthEnd = moment(currentDate).endOf("month");
    const startDate = moment(monthStart).startOf("week");
    const endDate = moment(monthEnd).endOf("week");

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;

    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = moment(day).format(dateFormat);
        let cloneDay = moment(day);
        days.push(
          <div key={day} className="col cell" onClick={()=>{
            this.setState(()=>{
              return {
                selectedDate : cloneDay
              }
          })}}>
            <span>{formattedDate}</span>
          </div>
        );
        day.add(1, "d");
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }
  render() {
    return (
      <div>
        <div className="calendar">
          {this.renderHeader()}
          {this.renderWeekDay()}
          {this.renderCells()}
        </div>
        <EventItem selectedDate = {this.state.selectedDate}/>
      </div>
    );
  }
}
MyCalendar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(MyCalendar);
