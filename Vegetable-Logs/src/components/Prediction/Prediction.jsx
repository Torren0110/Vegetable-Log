import { useState } from "react";
import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import predictionService from "./prediction-service";

const Prediction = () => {
  const [formData, setFormData] = useState({
    name: "",
    season: "",
    month: "",
    disaster: "",
    condition: "",
  });

  const seasons = ["winter", "summer", "autumn", "monsoon", "spring"];

  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const conditions = ["fresh", "scrap", "average"];

  return (
    <>
      <h1>Prediction</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          predictionService.get(formData)
						.then((res) => {
							console.log("res", res);
						})
						.catch((err) => {
							console.log("err", err);
						})
        }}
      >
        <FormControl fullWidth>
          <TextField
            onInput={(e) => setFormData({ ...formData, name: e.target.value })}
            id="outlined-basic"
            label="Vegetable Name"
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Season</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            value={formData.season}
            onChange={(e) =>
              setFormData({ ...formData, season: e.target.value })
            }
          >
            {seasons.map((season) => (
              <MenuItem key={season} value={season}>
                {season}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Month</InputLabel>
          <Select
            label="Month"
            value={formData.month}
            onChange={(e) =>
              setFormData({ ...formData, month: e.target.value })
            }
          >
            {months.map((month) => (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Disaster</InputLabel>
          <Select
            label="Disaster"
            value={formData.disaster}
            onChange={(e) =>
              setFormData({ ...formData, disaster: e.target.value })
            }
          >
            <MenuItem value="1">Yes</MenuItem>
            <MenuItem value="0">No</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Veg Condition</InputLabel>
          <Select
            label="Condition"
            value={formData.condition}
            onChange={(e) =>
              setFormData({ ...formData, condition: e.target.value })
            }
          >
            {conditions.map((condition) => (
              <MenuItem key={condition} value={condition}>
                {condition}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <Button type="submit" variant="outlined">Predict</Button>
        </FormControl>
      </form>
    </>
  );
};

export default Prediction;
