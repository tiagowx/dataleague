import axios from "axios";
import { app } from "../configs/app";
import { ISummoner } from "../interfaces/ISummoner";


export class AccountService {

  async getAccountData(tagLine: string, gameName: string) {

    const baseUrl = `https://${tagLine}.api.riotgames.com`
    const token = `?api_key=${app.apiToken}`
    const url = '/lol/summoner/v4/summoners/by-name/'

    const { data } = await axios.get(baseUrl + url + gameName + token);

    console.log(data);

    return data as ISummoner;
  }


}