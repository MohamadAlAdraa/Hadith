import axios from "axios";

const instance = axios.create({
  baseURL: "https://dorar-hadith-api.cyclic.app/",
});

export default instance;
