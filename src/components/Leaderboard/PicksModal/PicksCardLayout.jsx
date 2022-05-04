import React from 'react';
import Box from '@mui/material/Box';
import PickCard from './PickCard';
import { FootballContext } from "../../../providers/FootballContext";

const PicksCardLayout = () => {
    const {
        state: { selectedPlayer }
    } = React.useContext(FootballContext);

    const modalGridStyle = {
        display: 'grid',
        columnGap: 3,
        rowGap: 1,
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridAutoRows: '40px',
        margin:0
    };

    return (
        <Box
            sx={modalGridStyle}
        >
            {selectedPlayer?.picks["week 1"].map(pick => {
                return (
                    <PickCard pickData={pick} key={pick.value} />
                )
            })}
        </Box>
    );
};

export default PicksCardLayout;