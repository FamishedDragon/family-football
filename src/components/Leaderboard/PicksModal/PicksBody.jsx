import React from "react";
import TableBody from '@material-ui/core/TableBody';
import TableRow from "@material-ui/core/TableRow";
import PicksCell from "./PicksCell";

const PicksBody = ({ selectedPlayer }) => {
    const halfWayIndex = Math.ceil(selectedPlayer?.picks["week 1"].length / 2)
    const firstHalfOfArray = selectedPlayer?.picks["week 1"].slice(0, halfWayIndex)
    const secondHalfOfArray = selectedPlayer?.picks["week 1"].slice(halfWayIndex)

    return (
        <TableBody>
            {firstHalfOfArray.map((pick, index) => {
                return (
                    <TableRow key={pick.value} className="picks-row">
                        <PicksCell pick={pick} />
                        {
                            'team' in secondHalfOfArray[index]
                                ? (<PicksCell pick={secondHalfOfArray[index]} />)
                                : null
                        }
                    </TableRow>
                )
            })}
        </TableBody >
    );
}

export default PicksBody