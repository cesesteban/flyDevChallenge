import React, { useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { getEpisodes } from "store/action";
import { useDispatch } from "react-redux";
import { useStyles } from "assets/jss/components/SearchBarStyles";

function SearchBar(props) {
  const classes = useStyles();
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodes(search));
  }, [dispatch, search]);

  return (
    <div className={classes.grow}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          {search === "" ? (
            <SearchIcon />
          ) : (
            <CloseIcon
              onClick={() => {
                setSearch("");
              }}
            />
          )}
        </div>
        <InputBase
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search…"
          value={search}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
