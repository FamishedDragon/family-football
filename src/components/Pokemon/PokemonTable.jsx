import React from 'react';
import PokemonRow from "./PokemonRow";
import Table from '@material-ui/core/Table';
import TableHead from "@material-ui/core/TableHead";
import TableBody from '@material-ui/core/TableBody';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import PokemonContext from "../../PokemonContext";

const PokemonTable = () => {
    const {
        state: {pokemonData, filter},
        dispatch
    } = React.useContext(PokemonContext);

    return (
        <Table width="100%">
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Show Data</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {pokemonData
                    .slice(0, 20)
                    .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter) || pokemon.type.join(" ").toLowerCase().includes(filter))
                    .map(pokemon => {
                        return (
                            <PokemonRow 
                                pokemon={pokemon} 
                                key={pokemon.id} 
                                onSelect={(pokemon) => dispatch({type: 'SET_SELECTED_ITEM', payload: pokemon})}
                            />
                        );
                    })}
            </TableBody>
        </Table>
    );
};

export default PokemonTable;