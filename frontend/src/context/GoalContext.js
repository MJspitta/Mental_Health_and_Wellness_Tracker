import { createContext, useReducer } from 'react';

// create GoalsContext
export const GoalsContext = createContext();

// reducer func to handle setting and creating goals
export const goalsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_GOALS':
            return {
                goals: action.payload       // set the goals in the state
            };
        case 'CREATE_GOAL':
            return {
                goals: [action.payload, ...state.goals]     // add a new goal to the state
            };
        default:
            return state;   // return current state if action type is unknown
    }
};

// component to wrap around parts of the app that need goal state
export const GoalsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(goalsReducer, {
        goals: null     // initial state with no goals
    });

    // render child components
    return (
        <GoalsContext.Provider value={{...state, dispatch}}>
            { children }
        </GoalsContext.Provider>
    )
};