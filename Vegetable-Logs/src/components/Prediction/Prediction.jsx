import { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import predictionService from "./prediction-service";
import PredictionForm from "./PredictionForm";

const Prediction = (data) => {
  const [result, setResult] = useState("");

  const onPredict = (data) => {
    console.log(data);
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
      <Card>
        <CardContent sx={{ minWidth: "50%", maxWidth: "90%" }}>
          <h1>Prediction</h1>
          
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <PredictionForm onPredict={(data) => onPredict(data)} />
            </Grid>

            <Grid item xs={6} md={4}>
              Result: { result }
            </Grid>
          </Grid>

        </CardContent>
      </Card>
  );
};

export default Prediction;
