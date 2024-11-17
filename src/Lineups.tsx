import { useState } from "react";
import { PlayerModel } from "./Player";
import { Lineup, LineupModel } from "./Lineup";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";

type LineupId = "1stLine" | "2ndLine" | "3rdLine" | "4thLine";

type LineupsModel = {
  goalie?: PlayerModel;
  firstLine: LineupModel;
  secondLine: LineupModel;
  thirdLine: LineupModel;
  fourthLine: LineupModel;
  extraPlayers: PlayerModel[];
};

const initialLineups: LineupsModel = {
  firstLine: {},
  secondLine: {},
  thirdLine: {},
  fourthLine: {},
  extraPlayers: [],
};

const Lineups = () => {
  const [lineups, setLineups] = useState<LineupsModel>(initialLineups);

  const [selectedLineup, setSelectedLineup] = useState<LineupId>("1stLine");

  const getLineup = (): LineupModel => {
    switch (selectedLineup) {
      case "1stLine":
        return lineups.firstLine;
      case "2ndLine":
        return lineups.secondLine;
      case "3rdLine":
        return lineups.thirdLine;
      case "4thLine":
        return lineups.fourthLine;
      default:
        const exhaustiveCheck: never = selectedLineup;
        return exhaustiveCheck;
    }
  };

  const setGoalie = (goalie?: PlayerModel) =>
    setLineups({ ...lineups, goalie });

  const setLineup = (lineup: LineupModel): void => {
    switch (selectedLineup) {
      case "1stLine":
        setLineups({ ...lineups, firstLine: lineup });
        break;
      case "2ndLine":
        setLineups({ ...lineups, secondLine: lineup });
        break;
      case "3rdLine":
        setLineups({ ...lineups, thirdLine: lineup });
        break;
      case "4thLine":
        setLineups({ ...lineups, fourthLine: lineup });
        break;
      default:
        const exhaustiveCheck: never = selectedLineup;
        throw new Error(`Unhandled case: ${exhaustiveCheck}`);
    }
  };

  const copyLineups = () => {
    const lineupsCopyText = `First line:\n${
      lineups.goalie ?? "No player selected"
    }\n${lineups.firstLine.rightDefense ?? "No player selected"} ${
      lineups.firstLine.leftDefense ?? "No player selected"
    }\n${lineups.firstLine.rightWing ?? "No player selected"} ${
      lineups.firstLine.center ?? "No player selected"
    } ${lineups.firstLine.rightWing ?? "No player selected"}`;

    navigator.clipboard.writeText(lineupsCopyText);
  };

  return (
    <div style={{ width: "344px", margin: "auto" }}>
      <ToggleButtonGroup
        sx={{
          marginBottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        exclusive
        value={selectedLineup}
        onChange={(_, newLineup) => setSelectedLineup(newLineup)}
        size="small"
      >
        <ToggleButton value="1stLine">1st line</ToggleButton>
        <ToggleButton value="2ndLine">2nd line</ToggleButton>
        <ToggleButton value="3rdLine">3rd line</ToggleButton>
        <ToggleButton value="4thLine">4th line</ToggleButton>
      </ToggleButtonGroup>
      <Lineup
        goalie={lineups.goalie}
        lineup={getLineup()}
        setGoalie={setGoalie}
        setLineup={setLineup}
      />
      <Button variant="outlined" onClick={() => setLineups(initialLineups)}>
        Clear
      </Button>
      <Button variant="outlined" onClick={copyLineups}>
        Copy
      </Button>
    </div>
  );
};

export default Lineups;
