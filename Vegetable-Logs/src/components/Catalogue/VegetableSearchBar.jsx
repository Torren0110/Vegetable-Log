const VegetableSearchBar = () => {
  return (
    <div className="w-100 d-flex justify-content-center my-4">
      <input
        className="form-control me-2 w-50"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-primary" type="submit">
        Search
      </button>
    </div>
  );
};

export default VegetableSearchBar;
