import { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import predictionService from "./prediction-service";
import PredictionForm from "./PredictionForm";
import "./prediction.css"

const Prediction = (data) => {
  const [result, setResult] = useState("");

  const onPredict = (data) => {
    predictionService
      .get(data)
      .then((res) => {
        setResult(res.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };


  return (
    <div className="predictionform">
          <h1>Prediction</h1>
      <div className="predictform">
          <div className="predict-content">
              <PredictionForm onPredict={(data) => onPredict(data)} />
          </div>  
<div className="resultdiv">
           <p>Result</p> 
           {result && <p>₹ {result} per kg</p>}
            </div>
      </div>
      </div>
  );
};

export default Prediction;
