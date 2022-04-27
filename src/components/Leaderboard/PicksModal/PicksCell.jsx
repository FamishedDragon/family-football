import React from "react";
import MuiTableCell from "@material-ui/core/TableCell";
import { withStyles } from '@material-ui/core/styles';
import { FootballContext } from "../../../providers/FootballContext";

// Remove line under every table row (looks weird with the color BG)
const TableCell = withStyles({
    root: {
        borderBottom: "none",
        borderRadius: "2em"
    }
})(MuiTableCell);

const PicksCell = ({pick}) => {
    const { state: { teams } } = React.useContext(FootballContext);

    // Get image name of a logo for a given team
    const getTeamLogo = (teamName) => {
        const team = teams.find(t => t.name.toLowerCase() === teamName.toLowerCase());

        return team?.city ? `${team.city}.png` : "";
    }

    return (
        <TableCell className={'status' in pick ? `${pick.status}-cell` : "picks-cell"} >
            {/* <div class="checkmark"></div> */}
            <b><p className="picks-value">{pick.value}</p></b>
            {teams.some(t => t?.name?.toLowerCase() === pick?.team?.toLowerCase())
                ? (
                    <img
                        src={`${process.env.PUBLIC_URL}/teamLogos/${getTeamLogo(pick.team)}`}
                        title={pick.team}
                        className="logo-img"
                    />
                )
                : (<b><p className="picks-name">{pick.team}</p></b>)
            }
        </TableCell>
    )
}

export default PicksCell;