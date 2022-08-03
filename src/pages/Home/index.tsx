import { Opacity } from "@mui/icons-material";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"
import React, { useEffect, useState } from "react";
import SummonerCard from "../../components/SummonerCard";
import { app } from "../../configs/app";
import { tagLines } from "../../enums";
import { ISummoner } from "../../interfaces/ISummoner";
import { ChampionService } from "../../services/championService";
import { SummonerServices } from "../../services/summonerServices";


const Home = () => {
  const summonerService = new SummonerServices();
  const championService = new ChampionService();

  const [search, setSearch] = useState("morteim");
  const [tagLine, setTagLine] = useState(tagLines[0]);
  const [summoner, setSummoner] = useState<ISummoner | undefined>(undefined);

  function handlerSetBG() {
    if (!summoner || summoner.masteryChampions.length <= 0)
      return;

    const image = championService.getChampionByKey(summoner.masteryChampions[0].championId);
    const url = `${app.champiomLoadingsUrl}${image.id}_0.jpg`

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

  useEffect(() => { handlerSetBG() }, [summoner]);

  const handlerRegionSelect = (e: SelectChangeEvent) => {
    setTagLine(e.target.value as string);
  }

  return (
    <Box component='main' >
      <Box sx={{
        backgroundImage: `${handlerSetBG()}`,
        opacity: 1,
      }}
        display="flex"
        component="form"
        justifyContent="center"
        p={2}
        onSubmit={(e: React.FormEvent<HTMLInputElement>) => handlerSearchSummoner(e)}>
        <FormControl sx={{
          width: '80px'
        }}>
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
        <TextField size='small' value={search} onChange={(e) => setSearch(e.currentTarget.value)}>
        </TextField>
        <Button type="submit">Search</Button>
      </Box>
      {/* 
      <SearchSummoner /> */}

      {summoner &&
        (<SummonerCard summoner={summoner} />)
      }
    </Box >
  );
};

export default Home;