import { createContext, useReducer } from 'react';

// create MoodsContext
export const MoodsContext = createContext();

// reducer func to handle setting and creating moods
export const moodsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MOODS':
            return {
                moods: action.payload       // set the moods in the state
            };
        case 'CREATE_MOOD':
            return {
                moods: [action.payload, ...state.moods]     // add new mood to the state
            };
        default:
            return state;       // return current state if action type is unknown
    }
};

// component to wrap around parts of the app that need mood state
export const MoodsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(moodsReducer, {
        moods: null     // initial state with no moods
    });

    // render child components
    return (
        <MoodsContext.Provider value={{...state, dispatch}}>
            { children }
        </MoodsContext.Provider>
    )
};