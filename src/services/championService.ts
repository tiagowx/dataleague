import champions from '../repo/champion.json';

export class ChampionService {

  getChampionByKey = (key: number) => {


    const result = Object.values(champions.data);

    const data = result.filter(c => c.key === key.toString());

    const { name, id } = data[0];

    return { name, key, id };
  }

}