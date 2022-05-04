import { Table, TableBody, TableHead, TableRow, TableCell, TableContainer } from '@mui/material';
import React from 'react'
import { FootballContext } from '../../../providers/FootballContext';

const PicksListLayout = () => {
    const {
        state: { selectedPlayer }
    } = React.useContext(FootballContext);

    const modalGridStyle = {
        display: 'grid',
        columnGap: 3,
        rowGap: 1,
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridAutoRows: '40px',
        margin: 0
    };

    return (
        <TableContainer sx={{width: '50%', margin:'auto'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Value</TableCell>
                        <TableCell>Team</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {selectedPlayer?.picks["week 1"].map(pick => {
                        const style = pick.status 
                            ? {
                                color: `${pick.status === 'win' ? 'green' : 'red'}`
                            }
                            : {
                                color: 'black'
                            }
                        return (
                            <TableRow>
                                <TableCell sx={style}><b>{pick.value}</b></TableCell>
                                <TableCell sx={style}><b>{pick.team}</b></TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PicksListLayout;