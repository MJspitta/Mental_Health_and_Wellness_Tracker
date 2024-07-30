import { createContext, useReducer, useEffect } from "react";

// create AuthContext
export const AuthContext = createContext();

// reducer func to handle login and logout actions
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload };    // set user data on login
        case 'LOGOUT':
            return { user: null };              // clear user data on logout
        default:
            return state;                       // return current state if action type is unknown
    }
};

// component to wrap around parts of the app that need authentication state
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null      // initial state with no user
    });

    // check for user data in local storage and log in the user if found
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            dispatch({ type: 'LOGIN', payload: user });
        }
    }, []);

    console.log('AuthContext state: ', state);

    // render child components
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    );
};