import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Calendar from './components/Calendar';
import Reminders from './components/Reminders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import LandingPage from './components/LandingPage';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './styles/App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile:id" element={<Profile />} />


          </Routes>
        </main>
        <Footer />
      </Router>


    </>
  );
}

export default App;