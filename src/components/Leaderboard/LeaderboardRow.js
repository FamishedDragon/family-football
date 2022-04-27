import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material/";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const playerHasPicks = (player) => {return 'picks' in player};

// Element for a row of pokemon data to put into the table
const LeaderboardRow = ({ player, rank, handleOpen }) => (
  <TableRow>
    <TableCell>{rank}</TableCell>
    <TableCell>{player.name}</TableCell>
    <TableCell>{player.points}</TableCell>
    <TableCell>{player.potential}</TableCell>
    <TableCell>X</TableCell>
    <TableCell>
        {playerHasPicks(player)
            ? (<Button
                onClick={() => handleOpen(player)}
                variant="contained"
                color="primary"
              >
                  Show
              </Button>)
            : (<Button
                variant="contained"
                color="secondary"
            >
                Not Submitted
            </Button>)
        }
    </TableCell>
  </TableRow>
);

LeaderboardRow.propTypes = {
    player: PropTypes.shape({
    points: PropTypes.number,
    name: PropTypes.string,
    potential: PropTypes.number,
  }),
  onSelect: PropTypes.func
};

export default LeaderboardRow;