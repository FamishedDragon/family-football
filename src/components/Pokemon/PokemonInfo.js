import React, { useContext } from "react";
import PropTypes from "prop-types"; 
import PokemonContext from "../../PokemonContext";

// Name = name of pokemon
// Base = base stats
const PokemonInfo = () => {
    const {
        state: {selectedItem}
    } = useContext(PokemonContext);
    const name = selectedItem?.name;
    const base = selectedItem?.base;

    return selectedItem 
        ? (
        <div>
            <h1>{name.english}</h1>
            <table>
                <tbody>
                    {
                        Object.keys(base).map(key => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{base[key]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        )
        : null;
};

PokemonInfo.propTypes = {
    name: PropTypes.shape({
        english: PropTypes.string,
    }),
    base: PropTypes.shape({
        HP: PropTypes.number.isRequired,
        Attack: PropTypes.number.isRequired,
        Defense: PropTypes.number.isRequired,
        "Sp. Attack": PropTypes.number.isRequired,
        "Sp. Defense": PropTypes.number.isRequired,
        Speed: PropTypes.number.isRequired,
    })
};

export default PokemonInfo;