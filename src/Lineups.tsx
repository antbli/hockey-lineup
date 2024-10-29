import { useState } from "react";
import { PlayerModel } from "./Player";
import { Lineup, LineupModel } from "./Lineup";
import { Grid2, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

type LineupsModel = {
  firstLine: LineupModel;
  secondLine: LineupModel;
  thirdLine: LineupModel;
  fourthLine: LineupModel;
  extraPlayers: PlayerModel[];
};

const Lineups = () => {
  const [lineups, setLineups] = useState<LineupsModel>({
    firstLine: {},
    secondLine: {},
    thirdLine: {},
    fourthLine: {},
    extraPlayers: [],
  });

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={6}>
        <Lineup
          title="First line"
          lineup={lineups.firstLine}
          setLineup={(lineup) => setLineups({ ...lineups, firstLine: lineup })}
        />
      </Grid2>
      <Grid2 size={6}>
        <Lineup
          title="Second line"
          lineup={lineups.secondLine}
          setLineup={(lineup) => setLineups({ ...lineups, secondLine: lineup })}
        />
      </Grid2>
      <Grid2 size={6}>
        <Lineup
          title="Third line"
          lineup={lineups.thirdLine}
          setLineup={(lineup) => setLineups({ ...lineups, thirdLine: lineup })}
        />
      </Grid2>
      <Grid2 size={6}>
        <Lineup
          title="Fourth line"
          lineup={lineups.fourthLine}
          setLineup={(lineup) => setLineups({ ...lineups, fourthLine: lineup })}
        />
      </Grid2>
    </Grid2>
  );
};

export default Lineups;
