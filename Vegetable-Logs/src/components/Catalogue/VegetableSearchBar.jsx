import { useState } from "react";


const VegetableSearchBar = ({ onSearch }) => {
  const [ search, setSearch ] = useState("");


  return (
    <div className="w-100 d-flex justify-content-center my-4">
      <input
        className="form-control me-2 w-50"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(event) => { setSearch(event.target.value) }}
      />
      <button className="btn btn-outline-primary" type="submit" onClick={() => onSearch(search) }>
        Search
      </button>
    </div>
  );
};

export default VegetableSearchBar;
