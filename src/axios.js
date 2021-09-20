import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/item/",
});

export default axiosConfig;
