import React, {useMemo} from 'react';
import styled from "@emotion/styled";
import {PokemonInfo, PokemonFilter, PokemonTable} from '../components'
import PokemonContext from "../PokemonContext";
import pokemonReducer from '../reducers/pokemonReducer';

// Styles
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

const PokemonSearch = () => {
    const [state, dispatch] = React.useReducer(pokemonReducer, {
        filter: "", 
        selectedItem: null, 
        pokemonData: []
    });

    // Get pokemon data
    React.useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/pokemon.json`)
            .then(response => response.json())
            .then(data => dispatch({
                type: 'SET_POKEMON',
                payload: data
            }));
    }, []);

    // If Pookemon data hasnt loaded, sho loading screen
    if (!state.pokemonData) {
        return <div>Loading Data...</div>;
    }

    // Render
    return (
        <PokemonContext.Provider
            value={{
                state, 
                dispatch
            }}
        >
            <Title>Pokemon Search</Title>
            <Container>
                <ColumnLayout>
                    <div>
                        <PokemonFilter />
                        <PokemonTable/>
                    </div>
                    <PokemonInfo/>
                </ColumnLayout>
            </Container>
        </PokemonContext.Provider>
    );
};

export default PokemonSearch;