import { useState } from "react";
import { PlayerModel } from "./Player";
import { Lineup, LineupModel } from "./Lineup";

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
    <div style={{ width: "344px", margin: "auto" }}>
      <Lineup
        lineup={lineups.firstLine}
        setLineup={(lineup) => setLineups({ ...lineups, firstLine: lineup })}
      />
    </div>
  );
};

export default Lineups;
