import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    name: "item 1",
    image: [],
    price: 10,
  },
  {
    id: 2,
    name: "item 2",
    image: [],
  },
  {
    id: 3,
    name: "item 3",
    image: [],
    price: 20,
  },
  {
    id: 4,
    name: "item 4",
    image: [],
    price: 20,
  },
  {
    id: 5,
    name: "item 5",
    image: [],
    price: 20,
  },
  {
    id: 6,
    name: "item 6",
    image: [],
    price: 20,
  },
];
const useVegetable = (searchString = null) => {
  const [vegetables, setVegetables] = useState(data);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (searchString) {
      setVegetables(
        data.filter((veg) => {
          return veg.name.includes(searchString);
        })
      );
    } else {
      setVegetables(data);
    }
  }, [searchString]);

  return { vegetables, setVegetables, error, isLoading };
};

export default useVegetable;
