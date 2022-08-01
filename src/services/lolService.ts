import { app } from "../configs/app"
import apiContext from "./apiContext"

export class Lol {
  version: string;

  constructor() {
    const response = async () => {
      const result = await apiContext.get('');

      return result;
    }
    this.version = response.toString();
    console.log(this.version);


  }

}