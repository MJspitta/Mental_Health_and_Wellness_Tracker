import { GoalsContext } from "../context/GoalContext";
import { useContext } from "react";

// custom hook to use GoalsContext
export const useGoalsContext = () => {
    const context = useContext(GoalsContext);

    if (!context) {
        throw Error('useGoalsContext must be used inside a GoalsContextProvider');
    }

    return context;
};