import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar ui segment">
      <form
        className="ui form"
        onSubmit={(event) => {
          event.preventDefault();
          onFormSubmit(term);
        }}
      >
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
