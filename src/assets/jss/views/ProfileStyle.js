import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: 75,
      display: "flex",
      justifyContent: "center",
    },
  },
  positionTitle: {
    fontFamily: "Arial",
    position: "fixed",
    zIndex: "0",
    left: "0px",
    right: "0px",
    height: "50px",
    top: "-15px",
    background: "white",
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
    alignItems: "center",
  },
  positionBody: {
    marginTop: "50px",
  },
  line: {
    display: "flex",
    alignItems: "center",
    marginTop: "5px",
    marginBottom: "5px",
  },
  lineTitle: {
    marginTop: "5px",
    marginBottom: "5px",
  },
  input: {
    border: "solid 1px",
    borderRadius: "5px",
    minHeight: "100px",
    marginBottom: "15px",
  },
  textInput: {
    marginTop: "5px",
    marginBottom: "5px",
    marginLeft: "5px",
  },
  inputStyle: {
    border: "solid 0px",
    marginLeft: "10px",
  },
  spanStyle: {
    marginLeft: "15px",
  },
  iconColor: {
    color: "green",
  },
}));
