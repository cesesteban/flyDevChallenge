import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  positionTitle: {
    fontFamily: "Arial",
    position: "fixed",
    zIndex: "0",
    left: "0px",
    right: "0px",
    height: "70px",
    top: "-15px",
    background: "white",
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
    alignItems: "center",
  },
  positionChapters: {
    marginTop: "120px",
    marginBottom: "50px",
  },
}));
