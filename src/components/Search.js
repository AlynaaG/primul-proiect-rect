import React, { useState, useEffect } from "react";

const Search = ({ data, searchData }) => {
  const [input, setImput] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(
      data.filter((find) =>
        find.message.toLowerCase().includes(input.toLowerCase())
      )
    );
    searchData(filterData);
  }, [input]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        name="search"
        value={input}
        onChange={(e) => setImput(e.target.value)}
      />
    </div>
  );
};

export default Search;
