import { Box, Button, InputBase } from "@mui/material";
import { useState } from "react";
import { ISummoner } from "../../interfaces/ISummoner";
import { SummonerServices } from "../../services/summonerServices";
import SearchIcon from '@mui/icons-material/Search';
import SummonerCard from "../SummonerCard";

const SearchSummoner = () => {
  const [search, setSearch] = useState("morteim");
  const [summoner, setSummoner] = useState<ISummoner | undefined>(undefined);

  async function handlerSearch() {
    if (search.length <= 3) {
      return;
    }
    const summonerService = new SummonerServices();
    const data = await summonerService.getData(search);

    setSummoner(data);
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