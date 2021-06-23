import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "350px",
    maxHeight: "80px",
    minHeight: "80px",
    margin: "15px",
    [theme.breakpoints.up("md")]: {
      background: "transparent",
      top: "60px",
      marginLeft: "300px",
      marginRight: "255px",
    },
  },
  details: {
    width: "212px",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    alignItems: "center",
    padding: "15px",
  },
  contentTitle: {
    lineHeight: "1.2",
  },
  cover: {
    width: 75,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));
