import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Moods from './components/Dashboard/Moods';
import Activities from './components/Dashboard/Activities';
import Goals from './components/Dashboard/Goals';
// import LandingPage from './components/LandingPage';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/moods" element={<Moods />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
