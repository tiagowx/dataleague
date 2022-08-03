import { IMasteryChampion } from "./IMasteryChampiom";

export interface ISummoner {
  id: string;
  name: string;
  profileIconId: number;
  summonerLevel: number;
  masteryScore: number;
  tagLine: string;
  masteryChampions: IMasteryChampion[];
}