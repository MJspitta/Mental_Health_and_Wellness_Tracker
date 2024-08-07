import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// custom hook for user login
export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    // func to log in a user
    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${API_URL}/api/user/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
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

    return { login, isLoading, error };
};