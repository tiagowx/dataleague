import { app } from "../configs/app";
import { ISummoner } from "../interfaces/ISummoner";
import apiContext from "./apiContext"

export class SummonerServices {
  summoner?: ISummoner;
  masteryScore?: number;


  getData = async (name: string) => {

    const url = `/lol/summoner/v4/summoners/by-name/${name}?api_key=${app.apiToken}`;

    const { data } = await apiContext.get(url);

    this.summoner = data;
    console.log(this.summoner);
    return data;
  }
  getMasteryScore = async (id: string) => {
    const url = `/lol/champion-mastery/v4/scores/by-summoner/${id}?api_key=${app.apiToken}`;
    const { data } = await apiContext.get(url);

    this.masteryScore = data;
    return data;
  }

  constructor(name?: string) {
    if (name)
      this.getData(name);

    if (this.summoner)
      this.getMasteryScore(this.summoner?.id);

  }
}