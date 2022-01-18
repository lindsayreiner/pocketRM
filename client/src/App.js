import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Reminders from "./components/Reminders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import LandingPage from "./components/LandingPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AOS from "aos";

import "./styles/App.css";
import "aos/dist/aos.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  // AOS init
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className="app-wrapper">
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/reminders" element={<Reminders />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile:id" element={<Profile />} />
            </Routes>
          </main>
        </Router>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
