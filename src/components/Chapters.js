import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardTitle from "components/CardTitle";
import BadSearch from "components/BadSearch";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getEpisodes } from "store/action";

function Chapters(props) {
  const episodes = useSelector((state) => state.episodes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodes(""));
  }, [dispatch]);

  if (!episodes) {
    return <CircularProgress />;
  }
  if (episodes && episodes.results) {
    return episodes.results.map((episode) => {
      return (
        <CardTitle
          key={episode.name}
          name={episode.name}
          date={episode.air_date}
          characters={episode.characters}
          episode={episode.episode}
        />
      );
    });
  }
  if (episodes && episodes === "error") {
    return <BadSearch />;
  }
}

export default Chapters;
