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

type Props = { player?: PlayerModel; setPlayer: (player: PlayerModel) => void };

export const Player = ({ player, setPlayer }: Props) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const onClosedDialog = (player: PlayerModel | null) => {
    setDialogOpen(false);

    console.log(player);

    if (player) {
      setPlayer(player);
    }
  };

  return (
    <>
      <Stack
        onClick={() => setDialogOpen(true)}
        justifyContent="center"
        alignItems="center"
        sx={{ border: "solid", cursor: "pointer" }}
      >
        <Avatar
          src={`https://files.eliteprospects.com/layout/players/`}
          variant="rounded"
        />
        <Typography variant="body1">{player?.fullname ?? "+"}</Typography>
      </Stack>
      <PlayerFinder open={dialogOpen} onClose={onClosedDialog} />
    </>
  );
};
