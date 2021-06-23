import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  colorBackground: {
    height: "350px",
    width: "300px",
    backgroundColor: "white",
    borderRadius: "15px",
    border: "solid 1px",
  },
  marginCard: {
    margin: "10px",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  spacing: {
    maxHeight: "30px",
    alignItems: "center",
    display: "flex",
    justifyContent: "start",
  },
  img: {
    borderRadius: "15px",
  },
}));
