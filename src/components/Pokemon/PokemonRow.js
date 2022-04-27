import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

// Element for a row of pokemon data to put into the table
const PokemonRow = ({ pokemon, onSelect }) => (
  <TableRow>
    <TableCell>{pokemon.id}</TableCell>
    <TableCell>{pokemon.name.english}</TableCell>
    <TableCell>{pokemon.type.join(", ")}</TableCell>
    <TableCell>
      <Button
        onClick={() => onSelect(pokemon)}
        variant="contained"
        color="primary"
      >
        Select
      </Button>
    </TableCell>
  </TableRow>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.shape({
      english: PropTypes.string,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelect: PropTypes.func
};

export default PokemonRow;