import { useEffect, useState } from "react";
import useVegetable from "../../hooks/useVegetable";
import VegetableGrid from "./VegetableGrid";
import VegetableSearchBar from "./VegetableSearchBar";
import cartService from "../../services/cart-service";
import userService from "../../services/user-service";

const Catalogue = () => {
  const [ searchString, setSearchString ] = useState("");
  const { vegetables, isLoading } = useVegetable(searchString);

  // cartService.get("64d3c85791bf3bd7cea4af89")
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch(err => console.log(err));

  useEffect(() => {
    // userService.register({ username: "user test", email: "test@gmail.com", password1: "12345678", password2: "12345678" })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   })

    // userService.logIn({ username: "user test", password: "12345678" })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
    //   })

  }, []);


  return (
    <div >
      <VegetableSearchBar onSearch = {(str) => { setSearchString(str) }} />
      <VegetableGrid isLoading={isLoading} vegetables={vegetables} />
    </div>
  );
};

export default Catalogue;
