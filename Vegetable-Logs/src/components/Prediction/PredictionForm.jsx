import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";

const PredictionForm = ({ onPredict }) => {
  const [formData, setFormData] = useState({
    name: "",
    season: "",
    month: "",
    disaster: "",
    condition: "",
		temp: ""
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
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
				
				const data = { ...formData, disaster: formData.disaster === "1", temp: parseInt(formData.temp) }

				onPredict(data);
      }}
    >
      <FormControl fullWidth margin="normal">
        <TextField
          onInput={(e) => setFormData({ ...formData, name: e.target.value })}
          id="outlined-basic"
          label="Vegetable Name"
          variant="outlined"
          required
        />
      </FormControl>

			<FormControl fullWidth margin="normal">
        <TextField
          onInput={(e) => setFormData({ ...formData, temp: e.target.value })}
          label="Vegetable Temprature"
          variant="outlined"
					type="number"
          required
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel id="demo-simple-select-label">Season</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          value={formData.season}
          onChange={(e) => setFormData({ ...formData, season: e.target.value })}
          required
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
          onChange={(e) => setFormData({ ...formData, month: e.target.value })}
          required
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
            setFormData({ ...formData, disaster: e.target.value})
          }
          required
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
          required
        >
          {conditions.map((condition) => (
            <MenuItem key={condition} value={condition}>
              {condition}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <button type="submit" className="predictbtn">
          Predict
        </button>
      </FormControl>
    </form>
  );
};

export default PredictionForm;
