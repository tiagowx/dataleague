import { IMasteryChampiom } from "./IMasteryChampiom";

export interface ISummoner {
  id: string;
  name: string;
  profileIconId: number;
  summonerLevel: number;
  masteryScore?: number;
  masteryChampions?: IMasteryChampiom[];
}