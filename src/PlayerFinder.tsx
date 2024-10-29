import { SyntheticEvent, useEffect, useState } from "react";
import { PlayerModel } from "./Player";
import {
  Autocomplete,
  AutocompleteChangeReason,
  AutocompleteCloseReason,
  AutocompleteInputChangeReason,
  Dialog,
  TextField,
} from "@mui/material";

type Props = {
  open: boolean;
  onClose: (player: PlayerModel | null) => void;
};

export const PlayerFinder = ({ open, onClose }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [players, setPlayers] = useState<PlayerModel[]>([]);

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    const timeoutId = setTimeout(() => {
      fetch(`https://autocomplete.eliteprospects.com/players?q=${inputValue}`)
        .then((response) => {
          return response.json();
        })
        .then((data: PlayerModel[]) => {
          if (data.length > 0) {
            setPlayers(data);
          } else {
            setPlayers([]);
          }
        });
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  const handleInputChange = (
    _: SyntheticEvent<Element, Event>,
    newInputValue: string,
    reason: AutocompleteInputChangeReason
  ) => {
    if (reason === "input") {
      setInputValue(newInputValue);
    }
  };

  const handleChange = (
    _: SyntheticEvent<Element, Event>,
    player: PlayerModel | null,
    reason: AutocompleteChangeReason
  ) => {
    if (reason === "selectOption") {
      onClose(player);
    }
  };

  const handleClose = () => {
    setInputValue("");
    setPlayers([]);
  };

  return (
    <Dialog open={open} onClose={() => onClose(null)}>
      <Autocomplete
        options={players}
        inputValue={inputValue}
        getOptionLabel={(player) => player.fullname}
        getOptionKey={(player) => player.id}
        onInputChange={handleInputChange}
        filterOptions={(x) => x}
        renderInput={(params) => <TextField {...params} label="Player" />}
        onChange={handleChange}
        onClose={handleClose}
      />
    </Dialog>
  );
};
