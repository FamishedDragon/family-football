import React, {useMemo} from 'react';
import styled from "@emotion/styled";
import LeaderboardTable from "../components/Leaderboard/LeaderboardTable";
import PicksModal from "../components/Leaderboard/PicksModal/PicksModal";
import {FootballDataProvider} from "../providers/FootballContext";

const Title = styled.h1`
text-align: center;
`;

const Container = styled.div`
margin: auto;
width: 800px;
padding-top: 1Rem;
`;

const ColumnLayout = styled.div`
display: grid;
grid-template-columns: 78% 38%;
grid-column-gap: 1Rem;
`;

const HomePage = () => {
    return(
        <FootballDataProvider>
            <Container>
                <Title>Family NFL Picks</Title>
                <PicksModal/>
                <ColumnLayout>
                    <div>
                        <LeaderboardTable/>
                    </div>
                </ColumnLayout>
            </Container>
        </FootballDataProvider>
    )
}

export default HomePage;