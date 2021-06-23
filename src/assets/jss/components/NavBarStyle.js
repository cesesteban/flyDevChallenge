import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  position: {
    position: "fixed",
    zIndex: "0",
    left: "0px",
    right: "0px",
    bottom: "0px",
    height: "40px",
    background: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      background: "transparent",
      top: "60px",
      marginLeft: "125px",
      marginRight: "125px",
    },
  },
  positionHome: {
    marginLeft: "35px",
    color: "black",
  },
  positionProfile: {
    marginRight: "35px",
    color: "black",
  },
}));
