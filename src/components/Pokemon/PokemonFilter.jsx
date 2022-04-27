import React, { useContext } from 'react';
import styled from "@emotion/styled";
import PokemonContext from '../../PokemonContext';

// Input element
const Input = styled.input`
  width:100%;
  font-size: x-large;
  padding: 1px;
`;

// Input element that sets the filter for the search
const PokemonFilter = () => {
    const { 
        state: {filter}, 
        dispatch 
    } = useContext(PokemonContext);

    return (
        <Input
            type="text"
            value={filter}
            onChange={(e) => dispatch({type: 'SET_FILTER', payload: e.target.value.toLowerCase()})}
        />
    );
};

export default PokemonFilter;