import { MoodsContext } from "../context/MoodContext";
import { useContext } from "react";

// custom hook to use the MoodsContext
export const useMoodsContext = () => {
    const context = useContext(MoodsContext);

    if (!context) {
        throw Error('useMoodsContext must be used inside a MoodsContextProvider');
    }

    return context;
};