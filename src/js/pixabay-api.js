import axios from "axios";

const API_KEY = "55650574-c6a86cff692a63e47839b2642";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  }).then(res => res.data);
}