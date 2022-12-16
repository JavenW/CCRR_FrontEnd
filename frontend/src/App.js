import './App.css';

import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import {
  Home,
  About,
  NotFound,
  NewItem,
  Profile,
  UnAuth,
} from "./pages";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  let flag = sessionStorage.getItem('userObject') && Object.keys(sessionStorage.getItem('userObject')).length > 0;
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/error" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
        <Route path="/newitem" element={<ProtectedRoute><NewItem /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/unauth" element={flag ? <Navigate to="/" replace /> : <UnAuth />} />
        {/* <Route path="/blog" element={<Blog />}>
          <Route path="" element={<Posts />} />
          <Route path=":postSlug" element={<Post />} />
        </Route> */}
        <Route path='*' element={<Navigate to="/error" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
