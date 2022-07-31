import { Icon, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { app } from "../../configs/app";

import { IChampion } from "../../interfaces/IChampion"
import { IMasteryChampion } from "../../interfaces/IMasteryChampiom";
import { ChampionService } from "../../services/championService";

interface Props {
  champions: IMasteryChampion[];
}

const ChampiomMasteryList: React.FC<Props> = (props: Props) => {

  const [champions, setChampions] = useState<IChampion[]>([]);

  useEffect(() => {
    const updateChapiomMastery = () => {
      const championService = new ChampionService();
      const mapped = props.champions.map(c =>
        championService.getChampionByKey(c.championId)
      );
      setChampions(mapped);
    }

    if (props.champions)
      updateChapiomMastery();

  }, [props.champions]);

  return (
    <List sx={{
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '240px',
      overflowY: 'auto',
      m: 1,
      border: 1

    }}>
      {champions && champions.map((champion, index) =>
        <ListItem key={champion.id}>
          <Icon
            component="img"
            src={`${app.champiomIconsUrl}${champion.id}.png`}
            sx={{ width: '64px', height: '64px' }}
          >
          </Icon>
          <Typography component="h4" variant="h5" p={2}>
            {champion.name} <Typography component="span">
              ({props.champions[index].championPoints})
            </Typography>
          </Typography>
        </ListItem>
      )}
    </List>
  );

}
export default ChampiomMasteryList