import { useEffect, useState } from "react";
import vegetableService from "../services/vegetable-service";

const useVegetable = (searchString = "") => {
  const [vegetables, setVegetables] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);

    vegetableService.getAll(searchString).then((res) => {
      setVegetables(res.data);
      setLoading(false);
    })
    .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

  }, [searchString]);

  return { vegetables, setVegetables, error, isLoading };
};

export default useVegetable;
