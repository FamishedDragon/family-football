import React from 'react';
import './App.css';
import styled from "@emotion/styled";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import PokemonSearch from './scenes/PokemonSearch';
import HomePage from './scenes/HomePage';
import ResponsiveAppBar from './components/AppBar/HeaderBar';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
    // background: rgba(198, 118, 245, 0.836);
    //     background: -webkit-liniar-gradient(to right, rgba(198, 118, 245, 0.836), rgba(173, 69, 233, 0.836));
    //     background: linear-gradient(to right, rgba(198, 118, 245, 0.836), rgba(173, 69, 233, 0.836));
    const Container = styled.div`
        
    `;
    return (
        <StyledEngineProvider injectFirst>
            <ResponsiveAppBar />
            <Router>
                <Container>
                        <div style={{ padding: 20 }}>
                            <Routes>
                                {/*HomePage*/}
                                <Route path="/" element={<HomePage />} />
                                {' '}
                            </Routes>
                        </div>
                </Container>
            </Router>
        </StyledEngineProvider>
    );

}

export default App;
