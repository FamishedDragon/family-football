import React from 'react';
import LeaderboardRow from "./LeaderboardRow";
import { reducerKeys } from "../../reducers/footballReducer";
import Table from '@material-ui/core/Table';
import TableHead from "@material-ui/core/TableHead";
import TableBody from '@material-ui/core/TableBody';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {FootballContext} from "../../providers/FootballContext";

const LeaderboardTable = () => {
    const {
        state: {playerData, filter, picks},
        dispatch
    } = React.useContext(FootballContext);

    const getPlayerPicks = (player) => {  
        return picks.find(x => x.id === player.id);
    }

    return (
        <Table width="100%">
            <TableHead>
                <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Points</TableCell>
                    <TableCell>Potential</TableCell>
                    <TableCell>Week 1 Picks</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {playerData
                    //.slice(0, 20)
                    //.filter((player) => player.name.english.toLowerCase().includes(filter) || player.type.join(" ").toLowerCase().includes(filter))
                    .sort((a, b) => a.points - b.points)
                    .map((player, index) => {
                        return (
                            <LeaderboardRow 
                                player={player} 
                                rank={index+1} 
                                key={player.id} 
                                handleOpen={(player) => dispatch({
                                    type: reducerKeys.SET_SELECTED_PLAYER,
                                    payload: {selectedPlayer: {...player, picks: getPlayerPicks(player)}, open: true}
                                })} 
                            />
                        );
                    })}
            </TableBody>
        </Table>
    )
};

export default LeaderboardTable;