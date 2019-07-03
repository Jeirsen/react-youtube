import axios from "axios";

const KEY = "AIzaSyDLnXDcD2_DeRg3MvRsajsyRxUIhijb_LI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
