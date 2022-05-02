import { FootballDataProvider } from '../../providers/FootballContext';
import React from 'react';
import styled from "@emotion/styled";
import Table from '@mui/material/Table';
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Label } from "@mui/icons-material";
import { Container, Title } from '../../styles/style';

const ColumnLayout = styled.div`
    grid-template-columns: 78% 38%;
    grid-column-gap: 1Rem;
    display: block;
    justify-content: center;
`;

const PLayerPicks = () => {
    return (
        <FootballDataProvider>
            <Container>
                <Title>My Picks</Title>
                <ColumnLayout>
                    <Box width="25%">
                        <Title>Week 1</Title>
                        <Button>Locked</Button>
                        <Button>View</Button>
                        <Label>Score</Label>
                    </Box>
                    <Box width="25%">
                        <Title>Week 2</Title>
                        <Button>Locked</Button>
                        <Button>View</Button>
                        <Label>Score</Label>
                    </Box>
                </ColumnLayout>
            </Container>
        </FootballDataProvider>
    );
};

export default PLayerPicks;