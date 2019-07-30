import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
/*****************CORE COMPONENTS **********/
import {
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Link
} from "@material-ui/core";
/********************ICONS *******************/
import AddRounded from "@material-ui/icons/AddCircleRounded";
import CalendarToday from "@material-ui/icons/CalendarToday";
/*****************STYLE******************/
import style from "../assets/style/css/style"

const HeaderNav = (props) => {
  const {classes} = props;
  const [state, setState] = React.useState({
    left: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };
  /*******SIDE LIST CONTENT *******************/
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {[
          { title: "Calendar", ref: "/" },
          { title: "Create Event", ref: "/create" }
        ].map((text, index) => (
          <Link href={text.ref} className={classes.link}>
            <ListItem button key={text.title}>
              {index === 0}
              <ListItemIcon>
                {index === 0 ? (
                  <CalendarToday className={classes.iconColor} />
                ) : null}
                {index === 1 ? <AddRounded className={classes.iconColor} /> : null}
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <div className={classes.header}>
        <Button onClick={toggleDrawer("left", true)}>
          <CalendarToday className={classes.xl} />
        </Button>
        <Typography variant="h3" component="h1" className={classes.title}>
          My Agenda
        </Typography>
      </div>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
};

HeaderNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(HeaderNav);

