import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

const register = async (userData) => {
    const response = await axios.post(`${API_URL}/user/register`, userData);
    return response.data;
};

const login = async (userData) => {
    const response = await axios.post(`${API_URL}/user/login`, userData);
    return response.data;
};

const getMoods = async (token) => {
    const response = await axios.get(`${API_URL}/moods`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const addMood = async (moodData, token) => {
    const response = await axios.post(`${API_URL}/moods`, moodData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getActivities = async (token) => {
    const response = await axios.get(`${API_URL}/activities`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const addActivity = async (activityData, token) => {
    const response = await axios.post(`${API_URL}/activities`, activityData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getGoals = async (token) => {
    const response = await axios.get(`${API_URL}/goals`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const addGoal = async (goalData, token) => {
    const response = await axios.post(`${API_URL}/goals`, goalData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export default {
    register,
    login,
    getMoods,
    addMood,
    getActivities,
    addActivity,
    getGoals,
    addGoal
};