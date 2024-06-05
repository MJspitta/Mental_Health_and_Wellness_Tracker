import { useAuthContext } from "./useAuthContext";
// import { useMoodsContext } from "./useMoodContext";
// import { useActivitiesContext } from "./useActivityContext";
// import { useGoalsContext } from "./useGoalContext";


export const useLogout = () => {

    const { dispatch } = useAuthContext();
    // const { dispatch: moodsDispatch } = useMoodsContext();
    // const { dispatch: activitiesDispatch } = useActivitiesContext();
    // const { dispatch: goalsDispatch } = useGoalsContext();

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user');

        // dispatch logout action
        dispatch({type: 'LOGOUT'});
        // moodsDispatch({type: 'SET_MOODS', payload: null});
        // activitiesDispatch({type: 'SET_ACTIVITIES', payload: null});
        // goalsDispatch({type: 'SET_GOALS', payload: null});

    }

    return {logout};
}