import { Card, CardContent, CardHeader, Icon, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { app } from "../../configs/app";
import { IMasteryChampion } from "../../interfaces/IMasteryChampiom";
import { ISummoner } from "../../interfaces/ISummoner";
import { ChampionService } from "../../services/championService";
import { SummonerServices } from "../../services/summonerServices";
import ChampiomMasteryList from "../ChampionMasteryList";

interface Props {
  summoner: ISummoner;
}

const SummonerCard: React.FC<Props> = (summoner: Props) => {
  const championService = new ChampionService();
  const summonerService = new SummonerServices();

  const [masteryScore, setMasteryScore] = useState(0);
  const [masteryChampions, setMasteryChampions] = useState<IMasteryChampion[]>([]);
  const [bg, setBg] = useState("");


  useEffect(() => {
    const updateChapiomMastery = async () => {
      function handlerSetBG() {
        const image = championService.getChampionByKey(masteryChampions[0].championId);
        const url = `${app.champiomLoadingsUrl + image.id}_0.jpg`
        return url;
      }
      if (!summoner) return;


      const score = await summonerService.getMasteryScore(summoner.summoner.id);
      const champions = await summonerService.getMasteryChampions(summoner.summoner.id);
      setMasteryScore(score);
      setMasteryChampions(champions);
      championService.getChampionByKey(3);
      setBg(handlerSetBG());
    }
    setTimeout(() => updateChapiomMastery(), 1000);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SummonerIcon = () => (
    <Icon
      component='img'
      src={`${app.profileIconsUrl}${summoner.summoner?.profileIconId}.png`}
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
      backgroundImage: `url(${bg})`,

    }}>
      <CardHeader
        avatar={<SummonerIcon />}
        title={summoner.summoner.name}
        subheader={`Lvl.:${summoner.summoner.summonerLevel} | Maestria: ${masteryScore}`}
        sx={{
          display: 'flex',
          width: '100%',
          bgcolor: 'rgba(255,255,255,0.8)',
          borderBottom: 1

        }}
      />
      <CardContent sx={{
        p: 0,
        m: 0,
        bgcolor: 'rgba(255,255,255,0.75)'
      }}>
        <Typography component='h3' variant='h6' p={1}>
          Maestria por Campeão
        </Typography>
        <ChampiomMasteryList champions={masteryChampions || []} />
      </CardContent>


    </Card>
  );
}

export default SummonerCard;