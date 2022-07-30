import axios from "axios";
import { app } from "../configs/app";

const apiContext = axios.create({
  baseURL: `https://${app.urlRoutings.BR1}`,
  
});

export default apiContext;