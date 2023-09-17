import { useState } from "react";
import {
  CircularProgress
} from "@mui/material";
import predictionService from "./prediction-service";
import PredictionForm from "./PredictionForm";
import "./prediction.css"

const Prediction = (data) => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onPredict = (data) => {
    setLoading(true);
    predictionService
      .get(data)
      .then((res) => {
        setLoading(false);
        setResult(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
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
           { loading && <p> <CircularProgress /> </p>}
           { !loading && result && <p>₹ {result} per kg</p>}
            </div>
      </div>
      </div>
  );
};

export default Prediction;
