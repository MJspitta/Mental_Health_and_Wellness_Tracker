import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// custom hook for user registration
export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    // func to register new user
    const register = async (firstName, lastName, email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${API_URL}/api/user/register`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({firstName, lastName, email, password})
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json));

            // update auth context
            dispatch({type: 'LOGIN', payload: json});

            setIsLoading(false);
        }
    };

    return { register, isLoading, error };
};