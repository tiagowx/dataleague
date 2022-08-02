import { Card, CardContent, CardHeader, Icon, Typography } from "@mui/material";
import { app } from "../../configs/app";
import { ISummoner } from "../../interfaces/ISummoner";
import { ChampionService } from "../../services/championService";
import ChampiomMasteryList from "../ChampionMasteryList";

interface Props {
  summoner: ISummoner;
}

const SummonerCard: React.FC<Props> = (props: Props) => {
  const championService = new ChampionService();
  


  function handlerSetBG() {
    if (!props.summoner.masteryChampions)
      return;

    const image = championService.getChampionByKey(props.summoner.masteryChampions[0].championId);
    const url = `${app.champiomLoadingsUrl}${image.id}_0.jpg`
    return url;
  }

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
    <Card sx={{
      m: 1,
      display: 'flex',
      flexDirection: 'column',
      width: '308px',
      backgroundImage: `url(${handlerSetBG()})`,
      
    }}>
      <CardHeader
        avatar={<SummonerIcon />}
        title={props.summoner.name}
        subheader={`Lvl.:${props.summoner.summonerLevel} | Maestria: ${props.summoner.masteryScore}`}
        sx={{
          display: 'flex',
          width: '100%',
          bgcolor: 'rgba(255,255,255,0.8)',
        }}
      />
      <CardContent sx={{
        p: 0,
        m: 0,
        bgcolor: 'rgba(255,255,255,0.80)'
      }}>
        <Typography component='h3' variant='h6' p={1}>
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