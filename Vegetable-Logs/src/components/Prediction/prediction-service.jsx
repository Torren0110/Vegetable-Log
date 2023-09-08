import axios from "axios";

const con = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

class PredictionService {
  constructor() {
    this.endpoint = "predict/";
  }

  get(X) {
    const request = con.get(this.endpoint, {
				params: X
			});

    return request;
  }
}

export default new PredictionService();
