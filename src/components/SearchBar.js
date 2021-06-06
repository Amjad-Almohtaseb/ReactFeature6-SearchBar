import React from "react";
// Styling
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => props.setQuery(event.target.value)}
      /*on change always send an object when it call the ananumos fn
        and i should store it variable called event .*/
      placeholder="Search for a cookie name"
    />
  );
};

export default SearchBar;
