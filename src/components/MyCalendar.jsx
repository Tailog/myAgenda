import React, { Component } from "react";
import moment from "moment";
import PropTypes from "prop-types";
/**STYLE**/
import style from "../assets/style/css/style";
import { withStyles } from "@material-ui/styles";
/**ICONS**/
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment()
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
      <div className={classes.headerCalendarMain}>
        <div onClick={this.subtractMonth.bind(this)}>
          <ArrowBack />
        </div>
        <h3>{this.state.currentDate.format(dateFormat)}</h3>
        <div onClick={this.addMonth.bind(this)}>
          <ArrowForward />
        </div>
      </div>
    );
  }
  renderWeekDay(){
    const dateFormat = "ddd";
    const { classes } = this.props;
    const startDate = moment(this.state.currentDate).startOf('month');
    let days = []
      for (let i = 0; i < 7; i++) {
        days.push(
          <div key={i}>
          {moment(startDate)
              .add(i, "d")
              .format(dateFormat)}
          </div>
        )
      }
      return <div>{days}</div>
  }
  render() {
    return (
    <div>
      {this.renderHeader()}
      {this.renderWeekDay()}
    </div>
    )
  }
}
MyCalendar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(MyCalendar);
