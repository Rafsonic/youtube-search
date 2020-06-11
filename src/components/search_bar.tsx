import React, { useEffect, useState } from "react";
import { getVideos } from "../redux/actions";
import { useDispatch } from "react-redux";

interface Props {
  onSearchTermChange: (arg: string) => void;
}

const SearchBar = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideos("liverpool"));
  }, []);

  const { onSearchTermChange } = props;
  const [term, setTerm] = useState<string>("");

  /**
   * Function that is being called every time the input has been changed
   * @param {*} term
   */
  const onInputChange = (term: string) => {
    console.log(term);
    setTerm(term);
    onSearchTermChange(term);
  };

  return (
    <div className="search-bar">
      <input
        value={term}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
