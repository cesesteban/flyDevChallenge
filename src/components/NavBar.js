import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import { useStyles } from "assets/jss/components/NavBarStyle";

function NavBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.position}>
      <Link to="/">
        <HomeIcon className={classes.positionHome} />
      </Link>
      <Link to="/profile">
        <AccountCircleIcon className={classes.positionProfile} />
      </Link>
    </div>
  );
}

export default NavBar;
