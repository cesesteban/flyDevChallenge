import React from "react";
import SearchBar from "components/SearchBar";
import Chapters from "components/Chapters";
import NavBar from "components/NavBar";
import { useStyles } from "assets/jss/views/HomeStyles";

function Home(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.positionTitle}>Rick And Morty</div>
      <SearchBar />
      <div className={classes.positionChapters}>
        <Chapters />
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
