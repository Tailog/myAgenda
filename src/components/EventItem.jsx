import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvents } from "../assets/reducers/eventsReducer";
import moment from "moment";
import { db } from "../assets/firebase/config";

class EventItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsList: [],
      dbEventsList : []
    };
  }
  componentDidMount() {
    let dbEvents = [];
    let startDay = moment(this.props.selectedDate)
      .startOf("day")
      .unix();
    let endDay = moment(this.props.selectedDate)
      .endOf("day")
      .unix();
    var eventsRef = db.collection("events");
    var query = eventsRef
      .where("startDate", ">=", startDay)
      .where("startDate", "<=", endDay);
    query
      .get()
      .then(snapShot => {
        snapShot.forEach(doc => {
          dbEvents=[...dbEvents,doc.data()]
        });
      })
      .then(()=>{
        let tab = dbEvents;
        this.setState(()=>{
          return {
            dbEventsList: dbEvents
          }
        })
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }
  render() {
    // let dbEvents = []
    // let startDay = moment(this.props.selectedDate)
    //   .startOf("day")
    //   .unix();
    // let endDay = moment(this.props.selectedDate)
    //   .endOf("day")
    //   .unix();
    // var eventsRef = db.collection("events");
    // var query = eventsRef
    //   .where("startDate", ">=", startDay)
    //   .where("startDate", "<=", endDay);
    // query
    //   .get()
    //   .then(snapShot => {
    //     snapShot.forEach(doc => {
    //       dbEvents.push(doc.data());

    //       // console.log(doc.data());
    //       // setEvent([...events,doc.data()])
    //     });
    //   })
    //   .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    //   });
    // console.log(dbEvents);
    return <div>50</div>;
  }
}

// const EventItem = props => {
//   const [eventsList,setEventList] = useState(0)
//   let startDay = moment(props.selectedDate)
//     .startOf("day")
//     .unix();
//   let endDay = moment(props.selectedDate)
//     .endOf("day")
//     .unix();
//   var eventsRef = db.collection("events");
//   var query = eventsRef
//     .where("startDate", ">=", startDay)
//     .where("startDate", "<=", endDay);
//   query
//     .get()
//     .then(snapShot => {
//       snapShot.forEach(doc => {
// events.push(doc.data());
// console.log(doc.data());
// setEvent([...events,doc.data()])
//       });
//     })
//     .catch(function(error) {
//       console.log("Error getting documents: ", error);
//     });
//     console.log({eventsList});
//     setEventList(eventsList+1);
//     console.log({ eventsList });
//   return (
//     <div>
//       <h3>Event For {props.selectedDate.format("DD/MM/YYYY")}</h3>
//     </div>
//   );
// };

// <div>
//       <Link to={`/edit/${id}`}>
//         <h3>{description}</h3>
//       </Link>
//       <p>
//         {moment.unix(startDate).format("DD-MM-YY")}
//         -----{moment.unix(endDate).format("DD-MM-YY")}
//       </p>
//     </div>
const mapStateToProps = state => ({
  eventsList: getEvents(state)
});

export default connect(mapStateToProps)(EventItem);
