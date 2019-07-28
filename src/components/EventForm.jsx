import React, { Component } from "react";
import moment from "moment";
//Style Component
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.event ? props.event.description : "",
      startDate: props.event ? moment(props.event.startDate) : moment(),
      endDate: props.vent ? moment(props.event.endDate) : moment(),
      error: ""
    };
  }
  handleDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  handleStartDateChange = e => {
    let startDate = e.target.value;
    startDate = moment(startDate)
    this.setState(() => ({ startDate }));
  };
  handleEndDateChange = e => {
    let endDate = e.target.value;
    endDate = moment(endDate);
    this.setState(() => ({ endDate }));
  };
  onSubmit=(e)=>{
    e.preventDefault();
    if (!this.state.description) {
      //Set error state equal to 'Please provide description
      this.setState(() => ({
        error: "Please provide description"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        startDate: this.state.startDate.unix(),
        endDate: this.state.endDate.unix(),
      });
    }
  }
  render() {
    return (
      <div>
        <Container>
          <Typography variant="h3">Create your event</Typography>
          {this.state.error && (
            <Typography variant="h5">{this.state.error}</Typography>
          )}
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Description"
              autoFocus
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
            <br />
            <TextField
              label="Event Start"
              type="date"
              defaultValue={this.state.startDate.format("YYYY-MM-DD")}
              InputLabelProps={{
                shrink: true
              }}
              onChange={this.handleStartDateChange.bind(this)}
            />
            <br />
            <TextField
              label="Event End"
              type="date"
              defaultValue={this.state.startDate.format("YYYY-MM-DD")}
              InputLabelProps={{
                shrink: true
              }}
              onChange={this.handleEndDateChange.bind(this)}
            />
            <br />
            <button type="submit">Add Event</button>
          </form>
        </Container>
      </div>
    );
  }
}
