import React, { useState } from "react";

interface Props {
  onSearchTermChange: (arg: string) => void;
}

const SearchBar = (props: Props) => {

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
        className='form-control'
        placeholder='What are you looking for?'
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
