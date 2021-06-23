import React from "react";
import { useStyles } from "assets/jss/components/CardDetailStyles";

function CardDetail({ name, episode, img }) {
  const classes = useStyles();

  return (
    <div className={classes.colorBackground}>
      <div className={classes.marginCard}>
        <img
          className={classes.img}
          src={img}
          alt=""
          width="280px"
          height="200px"
        />
        <div className={classes.content}>
          <h2 className={classes.spacing}>{name}</h2>
          <h4 className={classes.spacing}>Episode: {episode}</h4>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
