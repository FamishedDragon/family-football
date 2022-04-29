import React from 'react';
import styled from "@emotion/styled";
import LeaderboardTable from "../components/Leaderboard";
import PicksModal from "../components/Leaderboard/PicksModal";
import { FootballDataProvider } from "../providers/FootballContext";

const Title = styled.h1`
    text-align: center;
`;

const Container = styled.div`
    margin: auto;
    display: block;
    justify-content: center;
    max-width: 1000px;
    padding-top: 1Rem;
    background-color: #fff;
    border-radius: 0.75rem;
`;

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