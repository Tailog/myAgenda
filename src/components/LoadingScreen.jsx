import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import './../assets/css/loadingScreen.css'

const useStyles = makeStyles(theme => ({
  loadingScreen: {
    backgroundColor: "#64b5f6",
    width: "100%",
    height: "100vh",
    position: "relative"
  },
  progress: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)"
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.loadingScreen}>
      <div className={classes.progress}>
        <CircularProgress />
      </div>
    </div>
  );
}
