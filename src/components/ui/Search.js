import React, { useState } from "react";

function Search({ getQuery }) {
  const [text, setText] = useState("");
  console.log(getQuery);
  const handelOnChange = (query) => {
    setText(query);
    getQuery(query);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters..."
          autoFocus
          value={text}
          onChange={(e) => handelOnChange(e.target.value)}
        />
      </form>
    </section>
  );
}

export default Search;
