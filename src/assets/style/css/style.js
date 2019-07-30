import { makeStyles } from "@material-ui/core/styles";
/**COLOR**/
import {
  primary,
  secondary,
  tertiary,
  textColor
} from "./../color/colorPalette";


const style = {
  /***DRAWER CSS***/
  list: {
    width: 250,
    height: "100%",
    backgroundColor: tertiary
  },
  xl: {
    fontSize: "48px",
    color: textColor
  },
  iconColor: {
    color: textColor
  },
  link: {
    color: textColor
  },
  /**TITLE CSS**/
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
  /**CALENDAR CSS***/
  //Header
  headerCalendarMain:{
    display: 'flex',
    backgroundColor: tertiary,
    alignItems: "center",
    justifyContent:'space-around',
    color: textColor
  }

};

export default style;