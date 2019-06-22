import axios from "axios";
const BASEURL = "https://api.giphy.com/v1/gifs/search?";
const APIKEY = "api_key=dc6zaTOxFJmzC&q=";

export default {
  search: function(query) {
    return axios.get(BASEURL +  APIKEY + query);
  }
};
