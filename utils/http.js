import axios from "axios";
import { APIS } from "./CONSTS";
const instance = axios.create({
  baseURL: APIS.baseURL,
});

export default instance;
