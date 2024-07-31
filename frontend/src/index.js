import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { MoodsContextProvider } from './context/MoodContext';
import { ActivitiesContextProvider } from './context/ActivityContext';
import { GoalsContextProvider } from './context/GoalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MoodsContextProvider>
        <ActivitiesContextProvider>
          <GoalsContextProvider>
            <App />
          </GoalsContextProvider>
        </ActivitiesContextProvider>
      </MoodsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);