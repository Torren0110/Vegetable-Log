import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

const endpoint = "/vegetables";

const useVegetable = (searchString = "") => {
  const [vegetables, setVegetables] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    apiClient
      .get(endpoint, { params: {
        search: searchString
      } })
      .then((res) => {
        setVegetables(res.data);
        console.log(vegetables);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    // if (searchString) {
    //   setVegetables(
    //     data.filter((veg) => {
    //       return veg.name.includes(searchString);
    //     })
    //   );
    // } else {
    //   setVegetables(data);
    // }
  }, [searchString]);

  return { vegetables, setVegetables, error, isLoading };
};

export default useVegetable;
