import axios from "axios";

export default {
  getItems: function(query) {
    return axios.get("/api/items", { params: { q: query } });
  }
};
