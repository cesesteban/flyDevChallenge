import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardDetail from "components/CardDetail";
import axios from "axios";
import { useStyles } from "assets/jss/components/CardTitleStyles";

function CardTitle({ name, date, characters, episode }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [img, setImg] = React.useState("");
  const characterImgUrl = characters[characters.length - 1];

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const getData = async (setImg) => {
      const res = await axios
        .get(characterImgUrl)
        .then((res) => {
          return res.data.image;
        })
        .catch((err) => console.log(err));
      setImg(res);
    };
    getData(setImg);
  }, [characterImgUrl]);

  return (
    <Card className={classes.root} onClick={handleToggle}>
      {img ? (
        <CardMedia className={classes.cover} image={img} title={name} />
      ) : (
        <CircularProgress color="inherit" />
      )}
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.contentTitle}>{name}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {date}
          </Typography>
        </CardContent>
      </div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CardDetail name={name} episode={episode} img={img} />
      </Backdrop>
    </Card>
  );
}

export default CardTitle;
