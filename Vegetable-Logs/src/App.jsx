import { useState } from "react";
import "./App.css";
import Catalogue from "./components/Catalogue/Catalogue";
import SellForm from "./components/SellForm/SellForm";

function App() {

  vegetableService.get(10)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <Catalogue />
      {/* <SellForm /> */}
    </>
  );
}

export default App;
