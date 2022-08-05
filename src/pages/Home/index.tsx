import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import React, { useState } from "react";
import SummonerCard from "../../components/SummonerCard";
import { app } from "../../configs/app";
import { tagLines } from "../../enums";
import { ISummoner } from "../../interfaces/ISummoner";
import { ChampionService } from "../../services/championService";
import { SummonerServices } from "../../services/summonerServices";
import SearchIcon from "@mui/icons-material/Search";
import darkTheme from "../../themes";

const Home: React.FC = () => {
  const summonerService = new SummonerServices();
  const championService = new ChampionService();

  const [search, setSearch] = useState("morteim");
  const [tagLine, setTagLine] = useState(tagLines[0]);
  const [summoner, setSummoner] = useState<ISummoner | undefined>(undefined);

  function handlerSetBG() {
    if (!summoner || summoner.masteryChampions.length <= 0)
      return;

    const image = championService.getChampionByKey(summoner.masteryChampions[0].championId);
    const url = `${app.champiomSplashUrl}${image.id}_0.jpg`

    return url;

  }

  async function handlerSearchSummoner(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();

    if (!search || !tagLine)
      return;

    const data = await summonerService.getSummoner(tagLine, search)
    const score = await summonerService.getMasteryScore(data.id, tagLine);
    const champions = await summonerService.getMasteryChampions(data.id, tagLine);

    setSummoner({
      ...data,
      tagLine: tagLine,
      masteryScore: score,
      masteryChampions: champions,
    })
  }

  const handlerRegionSelect = (e: SelectChangeEvent) => {
    setTagLine(e.target.value as string);
  }

  return (
    <Box component='main' sx={{
      display: 'flex',
      flexDirection: 'column',
      backgroundImage: `url(${handlerSetBG()})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'top center ',
      p: 1,
      flex: '1',
    }}>

      <Box
        sx={{
          display: 'flex',
          alignSelf: 'flex-end',
          justifyContent: 'center',
          borderRadius: '8px',
          p: 1,
          backgroundColor: darkTheme.palette.background.default,
          '&:focus': {
            backgroundColor: darkTheme.palette.background.default,
            opacity: 0.8
          }
        }}
        component='form'
        onSubmit={(e: React.FormEvent<HTMLInputElement>) => handlerSearchSummoner(e)}>
        <FormControl>
          <InputLabel id="label-region" >Region</InputLabel>
          <Select
            size='small'
            value={tagLine}
            labelId="label-region"
            label="Region"
            onChange={handlerRegionSelect}>
            {app.tagLine.map((tag) =>
              <MenuItem key={tag} value={tag}>{tag}</MenuItem>
            )}
          </Select>
        </FormControl>
        <TextField
          size='small'
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}>
        </TextField>
        <Button
          sx={{
            backgroundColor: darkTheme.palette.common.white,
            '&:hover': {
              backgroundColor: darkTheme.palette.common.white,
              opacity: 0.8
            }
          }}
          size='small' variant="contained" type="submit">
          <SearchIcon />
        </Button>
      </Box>
      {/* 
      <SearchSummoner /> */}

      {
        summoner &&
        (<SummonerCard summoner={summoner} />)
      }
    </Box >

  );
};

export default Home;  