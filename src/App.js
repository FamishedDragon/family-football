import React from 'react';
import './App.css';
import styled from "@emotion/styled";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './scenes/HomePage';
import HeaderBar from './components/AppBar';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
    // background: rgba(198, 118, 245, 0.836);
    //     background: -webkit-liniar-gradient(to right, rgba(198, 118, 245, 0.836), rgba(173, 69, 233, 0.836));
    //     background: linear-gradient(to right, rgba(198, 118, 245, 0.836), rgba(173, 69, 233, 0.836));
    const Container = styled.div`
        background-color: rgb(238, 241, 243);
        padding: 20;
    `;
    return (
        <StyledEngineProvider injectFirst>
            <HeaderBar />
            <Router>
                <Container>
                            <Routes>
                                {/*HomePage*/}
                                <Route path="/" element={<HomePage />} />
                                {' '}
                            </Routes>
                </Container>
            </Router>
        </StyledEngineProvider>
    );
}

export default App;