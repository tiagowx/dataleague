import { app } from "../configs/app"
import { apiLocal } from "./apiContext"

export class Lol {
  version: string;

  constructor() {
    const response = async () => {
      const result = await apiLocal.get('');

      return result;
    }
    this.version = response.toString();
    console.log(this.version);


  }

}