import axios from "axios";
import { KEY, URL } from "./env.js";

export default axios.create({
  baseURL: URL,
  headers: {
    Authorization: KEY,
  },
});
