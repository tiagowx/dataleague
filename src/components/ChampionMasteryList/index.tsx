import { Icon, List, ListItem, Typography } from "@mui/material";
import { useState } from "react";
import { app } from "../../configs/app";

import { IChampion } from "../../interfaces/IChampion"
import { IMasteryChampion } from "../../interfaces/IMasteryChampiom";
import { ChampionService } from "../../services/championService";

interface Props {
  champions: IMasteryChampion[];
}

const ChampiomMasteryList: React.FC<Props> = (props: Props) => {

  const championService = new ChampionService();
  const [champions] = useState<IChampion[]>(() => {
    const mapped = props.champions.map(c =>
      championService.getChampionByKey(c.championId)
    );
    return mapped;
  });

  return (
    <List sx={{
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '240px',
      overflowY: 'auto',
      m: 1,
      border: 1

    }}>
      { champions?.map((champion, index) =>
        <ListItem key={champion.id}>
          <Icon
            component="img"
            src={`${app.champiomIconsUrl}${champion.id}.png`}
            sx={{ width: '64px', height: '64px' }}
          >
          </Icon>
          <Typography component="p" p={1}>
            {champion?.name} <Typography component="span">
              ({props.champions[index]?.championPoints})
            </Typography>
          </Typography>
        </ListItem>
      )}
    </List>
  );

}
export default ChampiomMasteryList