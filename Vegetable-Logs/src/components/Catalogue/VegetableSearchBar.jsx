import { useState } from "react";

const VegetableSearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <form
      className="w-100 d-flex justify-content-center my-4"
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(search);
      }}
    >
      <input
        className="searchbar"
        type="search"
        placeholder="Search Here..."
        aria-label="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button className=" searchbtn">Search </button>
    </form>
  );
};

export default VegetableSearchBar;
