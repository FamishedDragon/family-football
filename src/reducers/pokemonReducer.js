const pokemonReducer = (state, action) => {
    switch(action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            };
        case 'SET_POKEMON':
            return {
                ...state,
                pokemonData: action.payload
            };
        case 'SET_SELECTED_ITEM':
            return {
                ...state,
                selectedItem: action.payload
            };
        default:
            throw new Error(`Unknown Action: ${action.type}`);
    }
};

export default pokemonReducer;