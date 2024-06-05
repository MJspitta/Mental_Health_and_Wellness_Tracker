import { MoodsContext } from "../context/MoodContext";
import { useContext } from "react";

export const useMoodsContext = () => {
    const context = useContext(MoodsContext);

    if (!context) {
        throw Error('useMoodsContext must be used inside a MoodsContextProvider');
    }

    return context;
};