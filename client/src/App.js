import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AOS from "aos";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import "./styles/App.css";
import "aos/dist/aos.css";

const client = new ApolloClient({
  // uri: 'http://localhost:3001/graphql'
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  cache: new InMemoryCache(),
  
  uri: '/graphql'
});

function App() {
  // AOS init
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ApolloProvider client={client}>
          <div className="app-wrapper">
            <Router>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" element={<Profile />} />
                  {/* <Route path="/addreminder" element={<AddReminder />} />
              <Route path="/addnote" element={<AddNote />} /> */}
                </Routes>
              </main>
            </Router>
            <Footer />
          </div>
        </ApolloProvider>
      </LocalizationProvider>
    </>
  );
}

export default App;
