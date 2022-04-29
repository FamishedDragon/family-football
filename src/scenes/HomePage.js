import React from 'react';
import styled from "@emotion/styled";
import LeaderboardTable from "../components/Leaderboard";
import PicksModal from "../components/Leaderboard/PicksModal";
import { FootballDataProvider } from "../providers/FootballContext";
import { Title, Container } from '../styles/style';

const ColumnLayout = styled.div`
    grid-template-columns: 78% 38%;
    grid-column-gap: 1Rem;
`;

const HomePage = () => {
    return (
        <FootballDataProvider>
            <Container>
                <Title>Week 1 NFL Picks</Title>
                <PicksModal />
                <ColumnLayout>
                    <LeaderboardTable />
                </ColumnLayout>
            </Container>
        </FootballDataProvider>
    )
}

export default HomePage;