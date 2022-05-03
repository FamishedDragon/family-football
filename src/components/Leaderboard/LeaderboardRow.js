import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material/";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Badge from '@mui/material/Badge';
import CancelIcon from '@mui/icons-material/Cancel';
import { FootballContext } from "../../providers/FootballContext";
import { Test } from "./test";

const playerHasPicks = (player) => { return 'picks' in player };

// Element for a row of pokemon data to put into the table
const LeaderboardRow = ({ player, rank, handleOpen }) => {
    const {
        getTeamImageName
    } = React.useContext(FootballContext);

    return (
        <TableRow sx ={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{rank}</TableCell>
            <TableCell>{player.name}</TableCell>
            <TableCell>{player.points}</TableCell>
            <TableCell>{player.potential}</TableCell>
            <TableCell sx={{alignItems: 'center', paddingTop:0, paddingBottom:0}}>
                {/* <div className="elimination-cell">
                    <Test className="elimination-badge" /> */}
                    <img
                        style={{ height: '60px' , width:'60px'}}
                        src={`${process.env.PUBLIC_URL}/teamLogos/${getTeamImageName(player.elimination["week 3"])}`}
                        title={player.elimination["week 1"]} />
                {/* </div> */}
            </TableCell>
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
};

LeaderboardRow.propTypes = {
    player: PropTypes.shape({
        points: PropTypes.number,
        name: PropTypes.string,
        potential: PropTypes.number,
    }),
    onSelect: PropTypes.func
};

export default LeaderboardRow;