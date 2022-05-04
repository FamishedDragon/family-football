import React from "react";
import footballReducer, { reducerKeys } from "../reducers/footballReducer";

export const FootballContext = React.createContext({});

export function FootballDataProvider({ children }) {
    const [state, dispatch] = React.useReducer(footballReducer, {
        filter: "",
        selectedPlayer: null,
        playerData: [],
        teams: [],
        openModal: false,
        pickListLayout: false
    });

    // Get player data
    var picksData;
    React.useEffect(() => {
        // Get picks
        fetch(`${process.env.PUBLIC_URL}/picks.json`)
            .then(response => response.json())
            .then(data => {
                picksData = data;
                dispatch({
                    type: reducerKeys.SET_PICKS,
                    payload: data
                });
                // Get player data
                return fetch(`${process.env.PUBLIC_URL}/players.json`);
            })
            .then(response => response.json())
            .then(data => {
                // Merge player data with picks
                for (const pick of picksData) {
                    let playerIndex = data.findIndex(p => p.id === pick.id);
                    if (playerIndex >= 0) {
                        data[playerIndex] = {...data[playerIndex], picks: pick};
                    }
                }
                dispatch({
                    type: reducerKeys.SET_PLAYERS,
                    payload: data
                });
            })

            // Get teams data
            fetch(`${process.env.PUBLIC_URL}/teams.json`)
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        type: reducerKeys.SET_TEAMS,
                        payload: data
                    })
                })
    }, []);

    // Handle closing of the picks modal
    const handlePicksModalClose = () => {
        dispatch({
            type: reducerKeys.SET_SELECTED_PLAYER,
            payload: { selectedPlayer: null, open: false }
        });
    };

    // Get the image name for a given team log or BG
    const getTeamImageName = (teamName) => {
        const team = state.teams.find(t => t.name.toLowerCase() === teamName.toLowerCase());

        return team?.city ? `${team.city}.webp` : "";
    };

    return (
        <FootballContext.Provider
            value={{
                handlePicksModalClose,
                getTeamImageName,
                state,
                dispatch
            }}
        >
            {children}
        </FootballContext.Provider>
    );
};