import { Box, Button, InputBase } from "@mui/material";
import { useState } from "react";
import { ISummoner } from "../../interfaces/ISummoner";
import { SummonerServices } from "../../services/summonerServices";
import SearchIcon from '@mui/icons-material/Search';
import SummonerCard from "../SummonerCard";

// import { Lol } from "../../services/lolService";
// import { ChampionService } from "../../services/championService";
import { IMasteryChampion } from "../../interfaces/IMasteryChampiom";

const SearchSummoner: React.FC = () => {
  const [search, setSearch] = useState("morteim");
  const [summoner, setSummoner] = useState<ISummoner | undefined>(undefined);

  //  const lolService = new Lol();



  async function handlerSearch() {
    const summonerService = new SummonerServices();

    const data: ISummoner = await summonerService.getData(search);

    const champions: IMasteryChampion[] = await summonerService.getMasteryChampions(data.id);
    const score = await summonerService.getMasteryScore(data.id);


    setSummoner({
      ...data,
      masteryScore: score,
      masteryChampions: champions
    });

    console.log(summoner)
  }


  return (
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        bgcolor: "#e3eeff"
      }}>
        <InputBase
          sx={{
            background: '#eee',
            m: 1,
            p: 1
          }}
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <Button sx={{
          height: '64px'
        }} onClick={handlerSearch}>
          <SearchIcon />
        </Button>
      </Box>
      {summoner &&
        <Box>

          <SummonerCard summoner={summoner} />
        </Box>
      }
    </Box>
  );
}

export default SearchSummoner;