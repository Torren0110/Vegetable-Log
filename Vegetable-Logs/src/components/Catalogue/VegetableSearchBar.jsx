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
        className="form-control me-2 w-50"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button className="btn btn-outline-primary">Search</button>
    </form>
  );
};

export default VegetableSearchBar;
