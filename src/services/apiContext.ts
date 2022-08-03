import axios from "axios";
import { app } from "../configs/app";

export const apiLocal = axios.create({
  baseURL: `https://${app.urlLocalRoutings.BR1}`

});
export const apiRegional = axios.create({
  baseURL: `https://${app.urlRegionalServer}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
});

