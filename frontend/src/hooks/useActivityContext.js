import { ActivitiesContext } from "../context/ActivityContext";
import { useContext } from "react";

// custom hook to use ActivitiesContext
export const useActivitiesContext = () => {
    const context = useContext(ActivitiesContext);

    if (!context) {
        throw Error('useActivitiesContext must be used inside an ActivitiesContextProvider');
    }

    return context;
};