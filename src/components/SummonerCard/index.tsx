import { Card, CardContent, CardHeader, Icon, Typography } from "@mui/material";
import { app } from "../../configs/app";
import { ISummoner } from "../../interfaces/ISummoner";
import darkTheme from "../../themes";
import ChampiomMasteryList from "../ChampionMasteryList";

interface Props {
  summoner: ISummoner;
}

const SummonerCard: React.FC<Props> = (props: Props) => {
  
  const SummonerIcon = () => (
    <Icon
      component='img'
      src={`${app.profileIconsUrl}${props.summoner?.profileIconId}.png`}
      sx={{
        width: '64px',
        height: 'auto',
        borderRadius: '50%'
      }} />
  );

  return (
    <Card variant="elevation" sx={{
      m: 1,
      display: 'flex',
      flexDirection: 'column',
      width: '309px',
      backgroundColor: darkTheme.palette.background.default,
      
    }}>
      <CardHeader
        avatar={<SummonerIcon />}
        title={props.summoner.name}
        subheader={`Lvl.:${props.summoner.summonerLevel} | Maestria: ${props.summoner.masteryScore}`}
        sx={{
          display: 'flex',
          width: '100%',
        }}
      />
      <CardContent sx={{
        p: 0,
        m: 0,
      }}>
        <Typography component='h3' variant='h6' px={2}>
          Maestria por Campeão
        </Typography>
        {props.summoner?.masteryChampions &&
          <ChampiomMasteryList champions={props.summoner?.masteryChampions} />
        }
      </CardContent>

    </Card>
  );
}

export default SummonerCard;