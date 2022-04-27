export const reducerKeys = {
    SET_FILTER: 'SET_FILTER',
    SET_PLAYERS: 'SET_PLAYERS',
    SET_SELECTED_PLAYER: 'SET_SELECTED_PLAYER',
    SET_PICKS: 'SET_PICKS',
    SET_TEAMS: 'SET_TEAMS'
}

const footballReducer = (state, action) => {
    switch(action.type) {
        case reducerKeys.SET_FILTER:
            return {
                ...state,
                filter: action.payload
            };
        case reducerKeys.SET_PLAYERS: 
            return {
                ...state,
                playerData: action.payload
            };
        case reducerKeys.SET_SELECTED_PLAYER:
            return {
                ...state,
                selectedPlayer: action.payload.selectedPlayer,
                openModal: action.payload.open
            };
            case reducerKeys.SET_PICKS:
                return {
                    ...state,
                    picks: action.payload
                }
            case reducerKeys.SET_TEAMS:
                return {
                    ...state,
                    teams: action.payload
                }
        default:
            throw new Error(`Unknown Action: ${action.type}`);
    }
};

export default footballReducer;