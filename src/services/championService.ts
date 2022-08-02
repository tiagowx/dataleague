import champions from '../repo/champion.json';
import { IChampion } from '../interfaces/IChampion';

export class ChampionService {

  values: IChampion;

  getChampionByKey = (key: number) => {

    const result = Object.values(champions.data);

    const data = result.filter(c => c.key === key.toString());

    const { name, id } = data[0];

    return { name, key, id };
  }

  constructor(key?: number) {
    if (!key)
      this.values = {
        id: "",
        key: 0,
        name: ""
      };
    else
      this.values = {
        id: this.getChampionByKey(key).id || "",
        key: key,
        name: this.getChampionByKey(key).name || ""
      };

  }
}