import axios from "axios";

const KEY = "AIzaSyDc-4HHZX1E1cDmPGKPmRzRqedH4w0udSw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`
  }
});
