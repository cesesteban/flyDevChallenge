import React from "react";
import NavBar from "components/NavBar";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { useStyles } from "assets/jss/views/ProfileStyle";

function Profile(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.positionTitle}>Account</div>
      <div className={classes.positionBody}>
        <div className={classes.line}>
          <h4 className={classes.lineTitle}>Developer:</h4>
          <span>Esteban Cespedes</span>
        </div>
        <div className={classes.line}>
          <h4 className={classes.lineTitle}>Years of experience in RN:</h4>
          <span>1</span>
        </div>
        <div className={classes.line}>
          <h4 className={classes.lineTitle}>Email:</h4>
          <span>ces.esteban@gmail.com</span>
        </div>
        <h4 className={classes.lineTitle}>Skills:</h4>
        <span className={classes.spanStyle}>
          <CheckCircleOutlineIcon
            fontSize="small"
            className={classes.iconColor}
          />
          Skill - React -
        </span>
        <br />
        <span className={classes.spanStyle}>
          <CheckCircleOutlineIcon
            fontSize="small"
            className={classes.iconColor}
          />
          Skill - Node -
        </span>
        <br />
        <span className={classes.spanStyle}>
          <CheckCircleOutlineIcon
            fontSize="small"
            className={classes.iconColor}
          />
          Skill - Python -
        </span>
        <br />
        <div className={classes.line}>
          <h4 className={classes.lineTitle}>Github:</h4>
          <a href="http://www.github.com/cesesteban">Link Github</a>
        </div>
        <div className={classes.input}>
          <h4 className={classes.textInput}>What was you biggest challenge?</h4>
          <input
            className={classes.inputStyle}
            placeholder="write here..."
          ></input>
        </div>
        <div className={classes.input}>
          <h4 className={classes.textInput}>
            Tell us something about yourself
          </h4>
          <input
            className={classes.inputStyle}
            placeholder="write here..."
          ></input>
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Profile;
