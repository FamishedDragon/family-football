import React from 'react';
import './App.css';
import styled from "@emotion/styled";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './scenes/HomePage';
import HeaderBar from './components/AppBar';
import { StyledEngineProvider } from '@mui/material/styles';
import PLayerPicks from './components/PlayerPicks/PlayerPicks';

function App() {
    // background: rgba(198, 118, 245, 0.836);
    //     background: -webkit-liniar-gradient(to right, rgba(198, 118, 245, 0.836), rgba(173, 69, 233, 0.836));
    //     background: linear-gradient(to right, rgba(198, 118, 245, 0.836), rgba(173, 69, 233, 0.836));
    const Container = styled.div`
        padding: 20;
    `;
    return (
        <StyledEngineProvider injectFirst>
            <Router>
                <HeaderBar />
                <Container>
                    <Routes>
                        {/*HomePage*/}
                        <Route path="/" element={<HomePage />} />
                        {/*Player Picks*/}
                        <Route path="/picks" element={<PLayerPicks />} />
                    </Routes>
                </Container>
            </Router>
        </StyledEngineProvider>
    );
}

export default App;