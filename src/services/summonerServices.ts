import axios from "axios";
import { app } from "../configs/app";
import { IMatchInfo } from "../interfaces/IMatchInfo";
import { ISummoner } from "../interfaces/ISummoner";

export class SummonerServices {

  getSummoner = async (tagLine: string, gameName: string) => {
    const baseUrl = `https://${tagLine}.api.riotgames.com`;
    const token = `?api_key=${app.apiToken}`;
    const url = '/lol/summoner/v4/summoners/by-name/';

    const { data } = await axios.get(baseUrl + url + gameName + token);

    const puuId = await data.puuid;
    const name = await data.name;

    const summoner: ISummoner = await {
      ...data,
      matches: await this.getMatches(puuId),

    }

    this.getMatchInfo(summoner.matches[0], name);
    console.log(summoner);
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
    const url = `/lol/champion-mastery/v4/champion-masteries/by-summoner/`;

    const { data } = await axios.get(baseUrl + url + id + token);

    return data;
  }

  getMatches = async (puuid: string) => {
    const token = `?api_key=${app.apiToken}`;
    const url = `${app.urlRegionalServer}/lol/match/v5/matches/by-puuid/${puuid}/ids${token}`;

    const { data } = await axios.get(url);

    return data;
  }

  getMatchInfo = async (matchId: string, summonerName: string) => {
    const token = `?api_key=${app.apiToken}`;
    const url = `${app.urlRegionalServer}/lol/match/v5/matches/${matchId}${token}`;

    const { data } = await axios.get(url);

    const info: IMatchInfo[] = await data.info.participants;

    const response =  await info.filter(p => {
      console.log(p.summonerName)
      return p.summonerName === summonerName;
    });

    console.log(response);

  }

}