import { Grid2 } from "@mui/material";
import { Player, PlayerModel } from "./Player";
import rinkImage from "./rink.svg";

export type LineupModel = {
  goalie?: PlayerModel;
  leftDefense?: PlayerModel;
  rightDefense?: PlayerModel;
  leftWing?: PlayerModel;
  center?: PlayerModel;
  rightWing?: PlayerModel;
};

type Props = {
  lineup: LineupModel;
  setLineup: (lineup: LineupModel) => void;
};

export const Lineup = ({ lineup, setLineup }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${rinkImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "344px 478px",
        height: "478px",
      }}
    >
      <Grid2 container rowSpacing="55px" paddingTop="50px">
        <Grid2 size={12}>
          <Player
            player={lineup.goalie}
            setPlayer={(player) => setLineup({ ...lineup, goalie: player })}
          ></Player>
        </Grid2>
        <Grid2 size={6}>
          <Player
            player={lineup.leftDefense}
            setPlayer={(player) =>
              setLineup({ ...lineup, leftDefense: player })
            }
          ></Player>
        </Grid2>
        <Grid2 size={6}>
          <Player
            player={lineup.rightDefense}
            setPlayer={(player) =>
              setLineup({ ...lineup, rightDefense: player })
            }
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
    </div>
  );
};
