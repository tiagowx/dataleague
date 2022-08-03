import { Icon, List, ListItem, Typography } from "@mui/material";
import { app } from "../../configs/app";

import { IChampion } from "../../interfaces/IChampion"
import { IMasteryChampion } from "../../interfaces/IMasteryChampiom";
import { ChampionService } from "../../services/championService";
import darkTheme from "../../themes";

interface Props {
  champions: IMasteryChampion[];
}

const ChampiomMasteryList: React.FC<Props> = (props: Props) => {

  const championService = new ChampionService();
  const champions: IChampion[] = props.champions.map(c =>
    championService.getChampionByKey(c.championId)
  );

  return (
    <List sx={{
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '240px',
      overflowY: 'auto',
      m: 1,
      '&::-webkit-scrollbar': {
        width: '8px',
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.5)',
        outline: '1px solid rgba(255,255,255, .5)',
        borderRadius: '50%'
      }

    }}>
      {champions.map((champion, index) =>
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