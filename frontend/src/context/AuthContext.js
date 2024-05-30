import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            api.getMoods(token).then(userData => setUser(userData)).catch(() => setToken(null));
        }
    }, [token]);

    const register = async (userData) => {
        const data = await api.register(userData);
        setToken(data.token);
        localStorage.setItem('token', data.token);
        setUser(data.user);
    };

    const login = async (userData) => {
        const data = await api.login(userData);
        setToken(data.token);
        localStorage.setItem('token', data.token);
        setUser(data.user);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};