import axios from "axios";
import { KEY, URL } from "./env.js";

const unsplash = axios.create({
  baseURL: URL,
  headers: {
    Authorization: KEY,
  },
});

export default unsplash;
