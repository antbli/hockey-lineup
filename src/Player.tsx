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
  setPlayer: (player: PlayerModel) => void;
  paddingTop?: number;
};

export const Player = ({ player, setPlayer, paddingTop }: Props) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const onClosedDialog = (player: PlayerModel | null) => {
    setDialogOpen(false);

    console.log(player);

    if (player) {
      setPlayer(player);
    }
  };

  return (
    <div style={{ paddingTop: `${paddingTop}px` }}>
      <Stack
        onClick={() => setDialogOpen(true)}
        justifyContent="center"
        alignItems="center"
        sx={{ cursor: "pointer" }}
      >
        <Avatar variant="rounded" />
        <Typography align="center" variant="body1">
          {player?.fullname ?? "+"}
        </Typography>
      </Stack>
      <PlayerFinder open={dialogOpen} onClose={onClosedDialog} />
    </div>
  );
};
