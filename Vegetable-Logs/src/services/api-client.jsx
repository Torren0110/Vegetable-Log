import axios from "axios";

export default axios.create({
    baseURL:  'https://node-veg-backend.onrender.com/api'
});