import { app } from "../configs/app";
import apiContext from "./apiContext"

export class SummonerServices {

  getData = async (name: string) => {

    const url = `/lol/summoner/v4/summoners/by-name/${name}?api_key=${app.apiToken}`;

    const { data } = await apiContext.get(url);

    console.log(data);
    return data;
  }
  getMasteryScore = async (id: string) => {
    const url = `/lol/champion-mastery/v4/scores/by-summoner/${id}?api_key=${app.apiToken}`;
    const {data} = await apiContext.get(url);

    console.log(data);
    return data;
  }

}