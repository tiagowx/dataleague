import axios from "axios";
import { app } from "../configs/app";
import { ISummoner } from "../interfaces/ISummoner";

export class SummonerServices {

  getSummoner = async (tagLine: string, gameName: string) => {
    const baseUrl = `https://${tagLine}.api.riotgames.com`;
    const token = `?api_key=${app.apiToken}`;
    const url = '/lol/summoner/v4/summoners/by-name/';

    const { data } = await axios.get(baseUrl + url + gameName + token);

    return data as ISummoner;
  }

  getMasteryScore = async (id: string, tagline: string) => {
    const baseUrl = `https://${tagline}.api.riotgames.com`;
    const token = `?api_key=${app.apiToken}`;
    const url = '/lol/champion-mastery/v4/scores/by-summoner/';


    // const { data, status } = 
    return await axios.get(baseUrl + url + id + token)
      .then((res) => {
        if (res.status === 404) {
          console.log('erro');
        }
        return res.data
      })
      .catch((err) => {
        console.log(err)
      });
  }

  getMasteryChampions = async (id: string, tagline: string) => {
    const baseUrl = `https://${tagline}.api.riotgames.com`;
    const token = `?api_key=${app.apiToken}`;
    const url =`/lol/champion-mastery/v4/champion-masteries/by-summoner/`;

    const { data } = await axios.get(baseUrl + url + id + token);

    return data;
  }

}