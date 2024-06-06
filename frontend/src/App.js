import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Mood from './pages/Mood';
import Activity from './pages/Activity';
import Goal from './pages/Goal';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import { MoodsContextProvider } from './context/MoodContext';
import { ActivitiesContextProvider } from './context/ActivityContext';
import { GoalsContextProvider } from './context/GoalContext';
import { useAuthContext } from './hooks/useAuthContext';



function App() {

  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={user ? <Dashboard /> : <Navigate to="/landingPage" />} />
          <Route path='/landingPage' element={!user ? <LandingPage /> : <Navigate to="/" />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />} />
          <Route path='/mood' element={user ? <MoodsContextProvider><Mood /></MoodsContextProvider> : <Navigate to="/login" />} />
          <Route path='/activity' element={user ? <ActivitiesContextProvider><Activity /></ActivitiesContextProvider> : <Navigate to="/login" />} />
          <Route path='/goal' element={user ? <GoalsContextProvider><Goal /></GoalsContextProvider> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
