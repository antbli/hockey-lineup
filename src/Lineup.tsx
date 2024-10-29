import { Grid2, Typography } from "@mui/material";
import { Player, PlayerModel } from "./Player";

export type LineupModel = {
  goalie?: PlayerModel;
  leftDefense?: PlayerModel;
  rightDefense?: PlayerModel;
  leftWing?: PlayerModel;
  center?: PlayerModel;
  rightWing?: PlayerModel;
};

type Props = {
  title: string;
  lineup: LineupModel;
  setLineup: (lineup: LineupModel) => void;
};

export const Lineup = ({ title, lineup, setLineup }: Props) => {
  return (
    <Grid2
      container
      spacing={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4">{title}</Typography>
      <Grid2 size={12}>
        <Player
          player={lineup.goalie}
          setPlayer={(player) => setLineup({ ...lineup, goalie: player })}
        ></Player>
      </Grid2>
      <Grid2 size={6}>
        <Player
          player={lineup.leftDefense}
          setPlayer={(player) => setLineup({ ...lineup, leftDefense: player })}
        ></Player>
      </Grid2>
      <Grid2 size={6}>
        <Player
          player={lineup.rightDefense}
          setPlayer={(player) => setLineup({ ...lineup, rightDefense: player })}
        ></Player>
      </Grid2>
      <Grid2 size={4}>
        <Player
          player={lineup.leftWing}
          setPlayer={(player) => setLineup({ ...lineup, leftWing: player })}
        ></Player>
      </Grid2>
      <Grid2 size={4}>
        <Player
          player={lineup.center}
          setPlayer={(player) => setLineup({ ...lineup, center: player })}
        ></Player>
      </Grid2>
      <Grid2 size={4}>
        <Player
          player={lineup.rightWing}
          setPlayer={(player) => setLineup({ ...lineup, rightWing: player })}
        ></Player>
      </Grid2>
    </Grid2>
  );
};
