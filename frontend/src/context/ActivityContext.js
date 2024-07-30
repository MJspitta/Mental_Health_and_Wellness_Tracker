import { createContext, useReducer } from 'react';

// create ActivitiesContext
export const ActivitiesContext = createContext();

// reducer func to handle setting and creating activities
export const activitiesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVITIES':
            return {
                activities: action.payload      // set the activities in the state
            };
        case 'CREATE_ACTIVITY':
            return {
                activities: [action.payload, ...state.activities]   // add new activity to the state
            };
        default:
            return state;       // return current state if action type is unknown
    }
};

// component to wrap around parts of the app that need activity state
export const ActivitiesContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(activitiesReducer, {
        activities: null         // initial state with no activities
    });

    // render child components
    return (
        <ActivitiesContext.Provider value={{...state, dispatch}}>
            { children }        
        </ActivitiesContext.Provider>
    )
};