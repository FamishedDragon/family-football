import React from 'react';
import styled from "@emotion/styled";
import LeaderboardTable from "../components/Leaderboard";
import PicksModal from "../components/Leaderboard/PicksModal";
import { FootballDataProvider } from "../providers/FootballContext";
import { Title, Container } from '../styles/style';
import TableContainer from '@mui/material/TableContainer';
import { Paper } from '@mui/material';

const ColumnLayout = styled.div`
    grid-template-columns: 78% 38%;
    grid-column-gap: 1Rem;
`;

const style = {
    height: "100%", 
    paddingBottom: "0px",
}

const HomePage = () => {
    return (
        <FootballDataProvider>
            <Container style={{marginTop:'1rem'}}>
            <TableContainer sx={style} component={Paper}>
                <Title>Week 3 NFL Picks</Title>
                <PicksModal />
                <ColumnLayout>
                    <LeaderboardTable />
                </ColumnLayout>
            </TableContainer>
            </Container>
        </FootballDataProvider>
    )
}

export default HomePage;