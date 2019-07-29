import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
/*****************COLOR  ******************/
import {
  primary,
  secondary,
  tertiary,
  textColor
} from "./../assets/style/color/colorPalette";

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
    height: "100%",
    backgroundColor: tertiary
  },
  xl: {
    fontSize: "48px",
    color: textColor
  },
  sm:{
    color: textColor
  },
  header: {
    display: "flex",
    alignItems: "center",
    backgroundColor: primary,
    padding: "5px"
  },
  title: {
    flexGrow: "1",
    textAlign: "center",
    color: textColor
  },
  link:{
    color: textColor
  }
}));

const HeaderNav = () => {
  const classes = useStyles();
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
                  <CalendarToday className={classes.sm} />
                ) : null}
                {index === 1 ? <AddRounded className={classes.sm} /> : null}
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

export default HeaderNav;
