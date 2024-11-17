import { Avatar, Stack, Typography } from "@mui/material";
import { PlayerFinder } from "./PlayerFinder";
import { useState } from "react";

export type PlayerModel = {
  id: number;
  fullname: string;
  team: string;
  position: string;
  photo: string;
};

type Props = {
  player?: PlayerModel;
  setPlayer: (player?: PlayerModel) => void;
  paddingTop?: number;
};

export const Player = ({ player, setPlayer, paddingTop }: Props) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const onClosedDialog = (player: PlayerModel | null) => {
    setDialogOpen(false);

    if (player) {
      setPlayer(player);
    }
  };

  return (
    <div style={{ paddingTop: `${paddingTop}px` }}>
      <Stack alignItems="center">
        <Avatar
          onClick={() => setDialogOpen(true)}
          variant="circular"
          sx={{ cursor: "pointer" }}
        />
        <Typography
          onClick={() => setDialogOpen(true)}
          align="center"
          variant="body1"
          sx={{ cursor: "pointer" }}
        >
          {player?.fullname ?? "+"}
        </Typography>
      </Stack>
      <PlayerFinder open={dialogOpen} onClose={onClosedDialog} />
    </div>
  );
};
