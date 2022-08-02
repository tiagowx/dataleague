import { IAccount } from "../interfaces/IAccount";
import apiContext from "./apiContext";


export class accountService {
  value?: IAccount;

  constructor(tagLine: string, gameName: string) {
    if (!gameName)
      return;

    const data = async () => {
      const url = `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
      const { data } = await apiContext.get(url);

      this.value = data;

      console.log(this.value);
      return;
    }

    data();
  }
}