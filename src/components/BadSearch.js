import React from "react";
import { useStyles } from "assets/jss/components/BadSearchStyles";

function BadSearch(props) {
  const classes = useStyles();

  return (
    <div className={classes.display}>
      <img
        className={classes.img}
        src="https://img.wattpad.com/b5dd20f7aa0a482fce1c9e8d1fec253651052cbb/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f665738726f707639414655516e513d3d2d3833313337313530362e313565636663386531383665373865633535393635323633343834362e6a7067?s=fit&w=720&h=720"
        alt=""
        width="250"
        height="150"
      />
      <div className={classes.display}>
        <h4>No Result</h4>
      </div>
    </div>
  );
}

export default BadSearch;
