import { Card, CardContent, CardHeader, Icon, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { app } from "../../configs/app";
import { ISummoner } from "../../interfaces/ISummoner";
import { SummonerServices } from "../../services/summonerServices";

interface Props {
  summoner: ISummoner;
}

const SummonerCard: React.FC<Props> = (summoner: Props) => {
  const [masteryScore, setMasteryScore] = useState(0);

  useEffect(() => {
    const updateChapiomMastery = async () => {
      if (!summoner) return;

      const summonerService = new SummonerServices();

      const score = await summonerService.getMasteryScore(summoner.summoner.id);

      setMasteryScore(score);
    }
    setTimeout(() => updateChapiomMastery(), 1000);
  }, [summoner]);

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
      width: '360px'
    }}>
      <CardHeader
        avatar={<SummonerIcon />}
        title={summoner.summoner.name}
        subheader={`Lvl.:${summoner.summoner.summonerLevel} | Maestria: ${masteryScore}`}

        sx={{
          width: '100%',
          textAlign: "right"
        }}
      />
      <CardContent>
        <Typography component='p'>
          { }
        </Typography>
      </CardContent>


    </Card>
  );
}

export default SummonerCard;