import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import React, { useState } from "react";
import SearchSummoner from "../../components/SearchSummoner";
import { app } from "../../configs/app"
import { tagLines } from "../../enums";
//import { ISummoner } from "../../interfaces/ISummoner";

const Home = () => {

  const [search, setSearch] = useState("");
  const [tagLine, setTagLine] = useState(tagLines[0]);

  //const [summoner] = useState<ISummoner | undefined>(undefined);

  function handlerSearchSummoner(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log(search);
  }

  return (
    <Box >
      <Box
        display="flex"
        component="form"
        justifyContent="flex-end"
        p={1}
        onSubmit={(e: React.FormEvent<HTMLInputElement>) => handlerSearchSummoner(e)}>
        <FormControl sx={{
        }}>
          <InputLabel id="label-region" variant="standard" >Region</InputLabel>
          <Select
            labelId="label-region"
            label="Region"
            value={tagLine}
            onChange={(e) => setTagLine(e.target.value.toString())}>
            {app.tagLine.map((tag, index) =>
              <MenuItem key={tag} value={index}>{tag}</MenuItem>
            )}
          </Select>
        </FormControl>
        <TextField size="medium" onChange={(e) => setSearch(e.currentTarget.value)}>
        </TextField>
        <Button type="submit">Search</Button>
      </Box>

      <SearchSummoner />
    </Box >
  );
};

export default Home;