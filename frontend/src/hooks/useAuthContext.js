import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// custom hook to use the AuthContext
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw Error('useAuthContext must be used inside a AuthContextProvider');
    }

    return context;
};